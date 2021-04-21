import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps {
    isActive: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
    background-color: ${colors.shape};
    padding: 7px 20px;
    height: 40px;
    width: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: 5px;

    ${props =>
        props.isActive &&
        css`
            background-color: ${colors.green_light};
        `}
`;

export const ButtonText = styled.Text<ButtonProps>`
    color: ${colors.heading};
    font-family: ${fonts.text};
    font-size: 13px;
    ${props =>
        props.isActive &&
        css`
            font-family: ${fonts.heading};
            color: ${colors.green_dark};
        `}
`;
