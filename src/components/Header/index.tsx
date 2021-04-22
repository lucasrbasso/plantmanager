import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

import {
    Container,
    Content,
    HelloText,
    UserText,
    ProfileImage,
} from './styles';

const Header: React.FC = ({ ...rest }) => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@PlantManager:user');
            setUserName(user || '');
        }

        loadStorageUserName();
    });

    return (
        <Container {...rest}>
            <Content>
                <HelloText>Olá,</HelloText>
                <UserText>{userName}</UserText>
            </Content>

            <ProfileImage
                source={{
                    uri: 'https://avatars.githubusercontent.com/u/55299115?v=4',
                }}
            />
        </Container>
    );
};

export default Header;
