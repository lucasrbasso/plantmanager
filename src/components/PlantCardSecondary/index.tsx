import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import { RectButtonProperties } from 'react-native-gesture-handler';

import {
    Container,
    ButtonTitle,
    PlantDetails,
    PlantText,
    PlantTime,
} from './styles';

interface PlantProps extends RectButtonProperties {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
}

const PlantCardSecondary: React.FC<PlantProps> = ({ data, ...rest }) => {
    return (
        <Container {...rest}>
            <SvgFromUri uri={data.photo} width={60} height={60} />
            <ButtonTitle>{data.name}</ButtonTitle>
            <PlantDetails>
                <PlantText>Regar as</PlantText>
                <PlantTime>{data.hour}</PlantTime>
            </PlantDetails>
        </Container>
    );
};

export default PlantCardSecondary;
