import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/Auth';

import { Container, Content, Emoji, Title, SubTitle, Footer } from './styles';

interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    nextScreen: string;
    user?: {
        username: string;
    };
}

const emojis = {
    hug: '🤗',
    smile: '😄',
};

const Confirmation: React.FC = () => {
    const { navigate } = useNavigation();
    const { signIn } = useAuth();
    const routes = useRoute();
    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen,
        user,
    } = routes.params as Params;

    const handleSubmit = useCallback(async () => {
        if (nextScreen === 'PlantSelect' && user) {
            await signIn(user);
            return;
        }

        navigate(nextScreen);
    }, [nextScreen, signIn, user, navigate]);

    return (
        <Container>
            <Content>
                <Emoji>{emojis[icon]}</Emoji>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>

                <Footer>
                    <Button onPress={handleSubmit}>{buttonTitle}</Button>
                </Footer>
            </Content>
        </Container>
    );
};

export default Confirmation;
