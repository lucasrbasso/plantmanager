import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 30px;
    background-color: ${colors.background};
`;

export const Spotlight = styled.View`
    background-color: ${colors.blue_light};
    margin-top: 30px;
    padding: 0 20px;
    border-radius: 20px;
    height: 110px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SpotlightImage = styled.Image`
    width: 60px;
    height: 60px;
`;

export const SpotlightText = styled.Text`
    flex: 1;
    color: ${colors.blue};
    padding: 0 20px;
`;

export const Plants = styled.View`
    flex: 1;
    width: 100%;
`;

export const PlantsText = styled.Text`
    font-size: 24px;
    font-family: ${fonts.heading};
    color: ${colors.heading};
    margin: 20px 0;
`;
