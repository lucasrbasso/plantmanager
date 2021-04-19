import React from 'react';

import wateringImg from '../../assets/watering.png';
import Button from '../../components/Button';
import { Container, Title, Image, Description } from './styles';

const Welcome: React.FC = () => (
    <Container>
        <Title>
            Gerencie
            {'\n'}
            suas plantas de
            {'\n'}
            forma fácil
        </Title>
        <Image source={wateringImg} />
        <Description>
            Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
            sempre que precisar.
        </Description>

        <Button activeOpacity={0.7}>Avançar</Button>
    </Container>
);

export default Welcome;
