import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '../../hooks/Auth';
import colorTheme from '../../styles/colors';

import {
    Container,
    Content,
    HelloText,
    UserText,
    ProfileImage,
} from './styles';

const { colors } = colorTheme();

const Header: React.FC = ({ ...rest }) => {
    const { user } = useAuth();

    return (
        <Container {...rest}>
            <Content>
                <HelloText>Olá,</HelloText>
                <UserText>{user.username} ;)</UserText>
            </Content>

            <ProfileImage
                source={{
                    uri: `https://github.com/${user.username}.png`,
                }}
            />
        </Container>
    );
};

export default Header;
