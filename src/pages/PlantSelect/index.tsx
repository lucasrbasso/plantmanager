import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Header from '../../components/Header';

import EnvironmentButton from '../../components/EnvironmentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Load from '../../components/Load';

import {
    Container,
    HeaderContainer,
    Title,
    SubTitle,
    EnvironmentContainer,
    EnvironmentList,
    PlantContainer,
    PlantList,
} from './styles';

import api from '../../services/api';
import colors from '../../styles/colors';

export interface Environment {
    key: string;
    title: string;
}

export interface Plant {
    id: number;
    name: string;
    about: string;
    water_types: string;
    photo: string;
    environments: [string];
    frequency: {
        number: number;
        repeat_every: string;
    };
}

const PlantSelect: React.FC = () => {
    const [environments, setEnvironments] = useState<Environment[]>([]);
    const [plants, setPlants] = useState<Plant[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loadedAll, setLoadedAll] = useState(false);

    useEffect(() => {
        async function fetchEnvironments() {
            api.get<Environment[]>(
                'plants_environments?_sort=title&_order=asc',
            ).then(response => {
                setEnvironments([
                    { key: 'all', title: 'Todos' },
                    ...response.data,
                ]);
            });
        }

        fetchEnvironments();
    }, []);

    useEffect(() => {
        api.get<Plant[]>(
            `plants?_sort=name&_order=asc&_page=${page}&_limit=8`,
        ).then(response => {
            if (!response.data) {
                setLoadedAll(true);
            }

            if (page > 1) {
                setPlants(oldValue => [...oldValue, ...response.data]);
            } else {
                setPlants(response.data);
            }

            setLoading(false);
            setLoadingMore(false);
        });
    }, [page]);

    const handleEnvironment = useCallback((environment: string) => {
        setEnvironmentSelected(environment);
    }, []);

    const handleFetchMore = useCallback((distance: number) => {
        if (distance < 1) {
            return;
        }

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
    }, []);

    const filteredPlants = useMemo(() => {
        if (environmentSelected === 'all') {
            return plants;
        }

        return plants.filter(plant =>
            plant.environments.includes(environmentSelected),
        );
    }, [environmentSelected, plants]);

    if (loading) {
        return <Load />;
    }
    return (
        <Container>
            <HeaderContainer>
                <Header />
                <Title>Em qual ambiente </Title>
                <SubTitle>você quer colocar sua planta?</SubTitle>
            </HeaderContainer>

            <EnvironmentContainer>
                <EnvironmentList
                    data={environments}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={environment => environment.key}
                    renderItem={({ item: environment }) => (
                        <EnvironmentButton
                            active={environmentSelected === environment.key}
                            onPress={() => handleEnvironment(environment.key)}
                        >
                            {environment.title}
                        </EnvironmentButton>
                    )}
                />
            </EnvironmentContainer>
            <PlantContainer>
                <PlantList
                    data={filteredPlants}
                    keyExtractor={plant => String(plant.id)}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) =>
                        handleFetchMore(distanceFromEnd)
                    }
                    renderItem={({ item: plant }) => (
                        <PlantCardPrimary data={plant} />
                    )}
                    ListFooterComponent={
                        loadingMore ? (
                            <ActivityIndicator color={colors.green} />
                        ) : (
                            <></>
                        )
                    }
                />
            </PlantContainer>
        </Container>
    );
};

export default PlantSelect;
