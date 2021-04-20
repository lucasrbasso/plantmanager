import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 30px;
    height: 56px;
    padding: 0 15px;
`;

export const ButtonText = styled.Text`
    color: ${colors.white};
    font-size: 16px;
    font-family: ${fonts.heading};
`;
