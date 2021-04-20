import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonInputProps {
    isDisabled?: boolean;
}

export const Container = styled(RectButton)<ButtonInputProps>`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 30px;
    height: 56px;
    padding: 0 15px;

    ${props =>
        props.isDisabled &&
        css`
            background-color: ${colors.green_light};
        `}
`;

export const ButtonText = styled.Text`
    color: ${colors.white};
    font-size: 16px;
    font-family: ${fonts.heading};
`;
