import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Environment, Plant } from './index';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.background};
`;

export const HeaderContainer = styled.View`
    padding: 0 30px;
`;

export const Title = styled.Text`
    font-size: 17px;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    line-height: 20px;
    margin-top: 30px;
`;

export const SubTitle = styled.Text`
    font-size: 17px;
    color: ${colors.heading};
    font-family: ${fonts.text};
    line-height: 20px;
`;

export const EnvironmentContainer = styled.View``;

export const EnvironmentList = styled(
    FlatList as new () => FlatList<Environment>,
)`
    padding: 32px 32px 5px 32px;
`;

export const PlantContainer = styled.View`
    flex: 1;
`;

export const PlantList = styled(FlatList as new () => FlatList<Plant>)`
    flex: 1;
    padding: 32px 32px 0px 32px;
`;
