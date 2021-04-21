import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
    children: string;
    active?: boolean;
}

const EnvironmentButton: React.FC<ButtonProps> = ({
    children,
    active = false,
    ...rest
}) => {
    return (
        <Container isActive={active} {...rest}>
            <ButtonText isActive={active}>{children}</ButtonText>
        </Container>
    );
};

export default EnvironmentButton;
