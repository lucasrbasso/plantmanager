import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header';

import EnvironmentButton from '../../components/EnvironmentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Load from '../../components/Load';

import {
    Container,
    HeaderContainer,
    HeaderContent,
    HeaderContentTitle,
    Title,
    SubTitle,
    EnvironmentContainer,
    PlantContainer,
} from './styles';

import api from '../../services/api';
import colorTheme from '../../styles/colors';
import { PlantProps as Plant } from '../../libs/storage';
import { useAuth } from '../../hooks/Auth';

const { colors } = colorTheme();

interface Environment {
    key: string;
    title: string;
}

const PlantSelect: React.FC = () => {
    const { navigate } = useNavigation();
    const [environments, setEnvironments] = useState<Environment[]>([]);
    const [plants, setPlants] = useState<Plant[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');
    const [loading, setLoading] = useState(true);
    const { signOut } = useAuth();

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

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
                setLoading(false);
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

    const handlePlantSelect = useCallback(
        (plant: Plant) => {
            navigate('PlantSave', { plant });
        },
        [navigate],
    );

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
                <HeaderContent>
                    <HeaderContentTitle>
                        <Title>Em qual ambiente </Title>
                        <SubTitle>você quer colocar sua planta?</SubTitle>
                    </HeaderContentTitle>
                    <TouchableOpacity onPress={signOut}>
                        <Feather
                            name="power"
                            size={20}
                            color={colors.heading}
                        />
                    </TouchableOpacity>
                </HeaderContent>
            </HeaderContainer>

            <EnvironmentContainer>
                <FlatList
                    contentContainerStyle={styles.environmentList}
                    data={environments}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={environment => environment.title}
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
                <FlatList
                    contentContainerStyle={styles.plantList}
                    data={filteredPlants}
                    keyExtractor={plant => String(plant.name)}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) =>
                        handleFetchMore(distanceFromEnd)
                    }
                    renderItem={({ item: plant }) => (
                        <PlantCardPrimary
                            data={plant}
                            onPress={() => handlePlantSelect(plant)}
                        />
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

const styles = StyleSheet.create({
    plantList: {
        paddingBottom: 32,
        paddingHorizontal: 16,
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 32,
        marginLeft: 32,
        paddingRight: 64,
    },
});
