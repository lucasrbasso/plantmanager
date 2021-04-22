import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useCallback, useState } from 'react';

import { FlatList } from 'react-native';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import PlantCardSecondary from '../../components/PlantCardSecondary';
import Header from '../../components/Header';

import WaterDrop from '../../assets/waterdrop.png';
import { loadPlants, PlantProps } from '../../libs/storage';

import {
    Container,
    Spotlight,
    SpotlightImage,
    SpotlightText,
    Plants,
    PlantsText,
} from './styles';

const MyPlants: React.FC = () => {
    const { navigate } = useNavigation();
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState('');

    useEffect(() => {
        async function loadStorageData() {
            const plantsStoraged = await loadPlants();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: ptBR },
            );

            setNextWatered(
                `Não esquece de regar a ${plantsStoraged[0].name} à ${nextTime}.`,
            );

            setPlants(plantsStoraged);
            setLoading(false);
        }

        loadStorageData();
    }, []);

    const handleNavigate = useCallback(() => {
        navigate('PlantSelect');
    }, [navigate]);

    return (
        <Container>
            <Header />

            <Spotlight>
                <SpotlightImage source={WaterDrop} />
                <SpotlightText>{nextWatered}</SpotlightText>
            </Spotlight>

            <Plants>
                <PlantsText>Próximas regadas</PlantsText>

                <FlatList
                    data={plants}
                    keyExtractor={plant => String(plant.id)}
                    renderItem={({ item: plant }) => (
                        <PlantCardSecondary data={plant} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 32 }}
                />
            </Plants>
        </Container>
    );
};

export default MyPlants;
