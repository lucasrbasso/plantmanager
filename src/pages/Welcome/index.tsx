import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import wateringImg from '../../assets/watering.png';
import {
    Container,
    Title,
    Image,
    Description,
    Button,
    ButtonIcon,
} from './styles';

const Welcome: React.FC = () => {
    const { navigate } = useNavigation();

    const handleStart = useCallback(() => {
        navigate('UserIdentification');
    }, [navigate]);

    return (
        <Container>
            <Title>
                Gerencie
                {'\n'}
                nossas plantas de
                {'\n'}
                forma fácil
            </Title>
            <Image source={wateringImg} resizeMode="contain" />
            <Description>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar
                você sempre que precisar.
            </Description>

            <Button onPress={handleStart} activeOpacity={0.7}>
                <ButtonIcon name="chevron-right" />
            </Button>
        </Container>
    );
};

export default Welcome;
