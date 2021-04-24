import React, { useEffect, useCallback, useState } from 'react';

import { FlatList, Alert } from 'react-native';
import { differenceInHours, differenceInMinutes } from 'date-fns';

import PlantCardSecondary from '../../components/PlantCardSecondary';
import Header from '../../components/Header';

import WaterDrop from '../../assets/waterdrop.png';
import { loadPlants, PlantProps, removePlant } from '../../libs/storage';

import {
    Container,
    Spotlight,
    SpotlightImage,
    SpotlightText,
    Plants,
    PlantsText,
} from './styles';
import Load from '../../components/Load';

const MyPlants: React.FC = () => {
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState('');

    useEffect(() => {
        async function loadStorageData() {
            const plantsStoraged = await loadPlants();

            if (plantsStoraged.length > 0) {
                const time = 'hora(s)';
                const nextTime = differenceInHours(
                    new Date(plantsStoraged[0].dateTimeNotification),
                    new Date(),
                );

                setNextWatered(
                    `Não esquece de regar a ${plantsStoraged[0].name} em ${nextTime} ${time}.`,
                );
            } else {
                setNextWatered(`Você ainda não tem nenhuma planta!`);
            }

            setPlants(plantsStoraged);
            setLoading(false);
        }

        loadStorageData();
    }, []);

    const handleRemove = useCallback((plant: PlantProps) => {
        Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
            {
                text: 'Não',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await removePlant(String(plant.id));
                        setPlants(oldData =>
                            oldData.filter(p => p.id !== plant.id),
                        );
                    } catch (error) {
                        Alert.alert('Não foi possível remover!');
                    }
                },
            },
        ]);
    }, []);

    if (loading) {
        return <Load />;
    }

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
                        <PlantCardSecondary
                            handleRemove={() => handleRemove(plant)}
                            data={plant}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 32 }}
                />
            </Plants>
        </Container>
    );
};

export default MyPlants;
