import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import Button from '../../components/Button';

import { Container, Content, Emoji, Title, SubTitle, Footer } from './styles';

interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😄',
};

const Confirmation: React.FC = () => {
    const { navigate } = useNavigation();
    const routes = useRoute();
    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen,
    } = routes.params as Params;

    const handleNavigate = useCallback(() => {
        navigate(nextScreen);
    }, [navigate, nextScreen]);

    return (
        <Container>
            <Content>
                <Emoji>{emojis[icon]}</Emoji>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>

                <Footer>
                    <Button onPress={handleNavigate}>{buttonTitle}</Button>
                </Footer>
            </Content>
        </Container>
    );
};

export default Confirmation;
