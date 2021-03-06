import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore } from 'date-fns';

import React, { useCallback, useState } from 'react';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

import { Alert, Platform, ScrollView } from 'react-native';
import { format } from 'date-fns/esm';
import { PlantProps, savePlant } from '../../libs/storage';
import {
    Container,
    BackButton,
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

import colorTheme from '../../styles/colors';

import WaterDrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';

const { colors } = colorTheme();

interface PlantParams {
    plant: PlantProps;
}

const PlantSave: React.FC = () => {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
    const { navigate, goBack } = useNavigation();

    const route = useRoute();
    const { plant } = route.params as PlantParams;

    const handleChangeTime = useCallback(
        (_: Event, dateTime: Date | undefined) => {
            if (Platform.OS === 'android') {
                setShowDatePicker(oldState => !oldState);
            }

            if (dateTime && isBefore(dateTime, new Date())) {
                const lateDate = new Date(dateTime);
                lateDate.setHours(lateDate.getHours() + 24);

                setSelectedDateTime(lateDate);
            } else if (dateTime) {
                setSelectedDateTime(dateTime);
            }
        },
        [],
    );

    const handleOpenDatePickerForAndroid = useCallback(() => {
        setShowDatePicker(oldState => !oldState);
    }, []);

    const handleGoBack = useCallback(() => {
        goBack();
    }, [goBack]);

    const handleSave = useCallback(() => {
        const save = async () => {
            try {
                await savePlant({
                    ...plant,
                    dateTimeNotification: selectedDateTime,
                });

                navigate('Added', {
                    title: `Tudo certo`,
                    subtitle:
                        'Fique tranquilo que sempre vamos lembrar voc?? de cuidar da sua plantinha com bastante amor.',
                    buttonTitle: 'Muito obrigado :D',
                    icon: 'hug',
                    nextScreen: 'MyPlants',
                });
            } catch {
                Alert.alert('N??o foi poss??vel salvar. ????');
            }
        };

        save();
    }, [plant, selectedDateTime, navigate]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flex: 1 }}
        >
            <Container>
                <BackButton onPress={handleGoBack}>
                    <Feather
                        name="chevron-left"
                        size={24}
                        color={colors.heading}
                    />
                </BackButton>
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
                        Escolha o melhor hor??rio para ser lembrado:
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
                        <ChangeTimeButton
                            onPress={handleOpenDatePickerForAndroid}
                        >
                            <ChangeTimeButtonText>
                                {`??? ${format(selectedDateTime, 'HH:mm')}`}
                            </ChangeTimeButtonText>
                        </ChangeTimeButton>
                    )}

                    <Button onPress={handleSave}>Cadastrar planta</Button>
                </Controller>
            </Container>
        </ScrollView>
    );
};

export default PlantSave;
