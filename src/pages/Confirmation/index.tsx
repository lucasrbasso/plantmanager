import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import Button from '../../components/Button';

import { Container, Content, Emoji, Title, SubTitle, Footer } from './styles';

const Confirmation: React.FC = () => {
    const { navigate } = useNavigation();

    const handleNavigate = useCallback(() => {
        navigate('PlantSelect');
    }, [navigate]);

    return (
        <Container>
            <Content>
                <Emoji>😄</Emoji>
                <Title>Prontinho</Title>
                <SubTitle>
                    Agora vamos começar a cuidas das suas plantinhas com muito
                    cuidado.
                </SubTitle>

                <Footer>
                    <Button onPress={handleNavigate}>Começar</Button>
                </Footer>
            </Content>
        </Container>
    );
};

export default Confirmation;
