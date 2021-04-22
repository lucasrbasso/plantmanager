import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore } from 'date-fns';

import React, { useCallback, useState } from 'react';
import { SvgFromUri } from 'react-native-svg';

import { Alert, Platform } from 'react-native';
import { format } from 'date-fns/esm';
import { PlantProps, savePlant } from '../../libs/storage';
import {
    Container,
    PlantInfo,
    PlantName,
    AboutPlantText,
    Controller,
    TipContainer,
    WaterImage,
    TipText,
    ChooseTimerText,
    ChangeTimeButton,
    ChangeTimeButtonText,
} from './styles';

import WaterDrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';

interface PlantParams {
    plant: PlantProps;
}

const PlantSave: React.FC = () => {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
    const { navigate } = useNavigation();

    const route = useRoute();
    const { plant } = route.params as PlantParams;

    const handleChangeTime = useCallback(
        (_: Event, dateTime: Date | undefined) => {
            if (Platform.OS === 'android') {
                setShowDatePicker(oldState => !oldState);
            }

            if (dateTime && isBefore(dateTime, new Date())) {
                setSelectedDateTime(new Date());
                Alert.alert('Escolha uma hora no futuro! ⌛');
            }

            if (dateTime) {
                setSelectedDateTime(dateTime);
            }
        },
        [],
    );

    const handleOpenDatePickerForAndroid = useCallback(() => {
        setShowDatePicker(oldState => !oldState);
    }, []);

    const handleSave = useCallback(() => {
        const save = async () => {
            try {
                await savePlant({
                    ...plant,
                    dateTimeNotification: selectedDateTime,
                });

                navigate('Confirmation', {
                    title: `Tudo certo`,
                    subtitle:
                        'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
                    buttonTitle: 'Muito obrigado :D',
                    icon: 'hug',
                    nextScreen: 'MyPlants',
                });
            } catch {
                Alert.alert('Não foi possível salvar. 😪');
            }
        };

        save();
    }, [plant, selectedDateTime, navigate]);

    return (
        <Container>
            <PlantInfo>
                <SvgFromUri uri={plant.photo} width={200} height={200} />
                <PlantName>{plant.name}</PlantName>
                <AboutPlantText>{plant.about}</AboutPlantText>
            </PlantInfo>
            <Controller>
                <TipContainer>
                    <WaterImage source={WaterDrop} />
                    <TipText>{plant.water_tips}</TipText>
                </TipContainer>

                <ChooseTimerText>
                    Escolha o melhor horário para ser lembrado:
                </ChooseTimerText>

                {showDatePicker && (
                    <DateTimePicker
                        value={selectedDateTime}
                        mode="time"
                        display="spinner"
                        onChange={handleChangeTime}
                    />
                )}

                {Platform.OS === 'android' && (
                    <ChangeTimeButton onPress={handleOpenDatePickerForAndroid}>
                        <ChangeTimeButtonText>
                            {`⏰ ${format(selectedDateTime, 'HH:mm')}`}
                        </ChangeTimeButtonText>
                    </ChangeTimeButton>
                )}

                <Button onPress={handleSave}>Cadastrar planta</Button>
            </Controller>
        </Container>
    );
};

export default PlantSave;
