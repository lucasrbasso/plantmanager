import styled from 'styled-components/native';
import colorTheme from '../../styles/colors';
import fonts from '../../styles/fonts';

const { colors } = colorTheme();

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.background};
`;

export const HeaderContainer = styled.View`
    padding: 0 30px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    padding-right: 20px;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderContentTitle = styled.View``;

export const Title = styled.Text`
    font-size: 17px;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    line-height: 20px;
`;

export const SubTitle = styled.Text`
    font-size: 17px;
    color: ${colors.heading};
    font-family: ${fonts.text};
    line-height: 20px;
`;

export const EnvironmentContainer = styled.View``;

export const PlantContainer = styled.View`
    flex: 1;
`;
