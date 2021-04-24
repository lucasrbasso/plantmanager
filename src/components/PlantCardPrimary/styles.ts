import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colorTheme from '../../styles/colors';
import fonts from '../../styles/fonts';

const { colors } = colorTheme();

export const Container = styled(RectButton)`
    flex: 1;
    max-width: 45%;
    background-color: ${colors.shape};
    border-radius: 20px;
    padding: 20px 0px;
    align-items: center;
    margin: 10px;
`;

export const ButtonText = styled.Text`
    color: ${colors.heading};
    font-family: ${fonts.heading};
    margin: 16px 0;
    font-size: 13px;
`;
