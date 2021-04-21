import React from 'react';

import {
    Container,
    Content,
    HelloText,
    UserText,
    ProfileImage,
} from './styles';

const Header: React.FC = ({ ...rest }) => {
    return (
        <Container {...rest}>
            <Content>
                <HelloText>Olá,</HelloText>
                <UserText>Lucas</UserText>
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
