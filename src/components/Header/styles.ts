import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colorTheme from '../../styles/colors';
import fonts from '../../styles/fonts';

const { colors } = colorTheme();

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 60}px;
`;

export const Content = styled.View``;

export const HelloText = styled.Text`
    font-size: 36px;
    font-family: ${fonts.light};
    color: ${colors.heading};
`;

export const UserText = styled.Text`
    font-size: 36px;
    font-family: ${fonts.heading};
    color: ${colors.heading};
    line-height: 40px;
`;

export const ProfileImage = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`;
