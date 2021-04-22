import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface PlantProps extends RectButtonProperties {
    data: {
        name: string;
        photo: string;
    };
}

const PlantCardPrimary: React.FC<PlantProps> = ({ data, ...rest }) => {
    return (
        <Container {...rest}>
            <SvgFromUri uri={data.photo} width={90} height={90} />
            <ButtonText>{data.name}</ButtonText>
        </Container>
    );
};

export default PlantCardPrimary;
