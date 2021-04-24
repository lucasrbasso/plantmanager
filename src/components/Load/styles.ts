import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import colorTheme from '../../styles/colors';

const { colors } = colorTheme();

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    background-color: ${colors.background};
`;

export const Animation = styled(LottieView)`
    background-color: transparent;
    width: 200px;
    height: 200px;
`;
