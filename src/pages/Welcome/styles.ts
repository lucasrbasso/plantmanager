import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding: 0 30px;
`;

export const Title = styled.Text`
    font-family: ${fonts.heading};
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: ${colors.heading};
    margin-top: 38px;
`;

export const Image = styled.Image`
    height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Description = styled.Text`
    text-align: center;
    font-family: ${fonts.text};
    font-size: 18px;
    color: ${colors.heading};
`;

export const Button = styled(RectButton)`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 30px;
    height: 56px;
    width: 56px;
`;

export const ButtonIcon = styled(Entypo)`
    color: ${colors.white};
    font-size: 28px;
`;
