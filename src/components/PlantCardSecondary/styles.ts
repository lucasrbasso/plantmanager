import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
    width: 100%;
    padding: 25px 10px;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.shape};
    margin: 5px 0;
`;

export const ButtonTitle = styled.Text`
    flex: 1;
    color: ${colors.green_dark};
    font-family: ${fonts.heading};
    margin-left: 10px;
    font-size: 17px;
`;

export const PlantDetails = styled.View`
    align-items: flex-end;
`;

export const PlantText = styled.Text`
    font-size: 16px;
    font-family: ${fonts.text};
    color: ${colors.body_light};
`;

export const PlantTime = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    font-family: ${fonts.heading};
    color: ${colors.body_dark};
`;
