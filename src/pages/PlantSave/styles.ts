import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import colorTheme from '../../styles/colors';
import fonts from '../../styles/fonts';

const { colors } = colorTheme();

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.shape};
`;

export const BackButton = styled.TouchableOpacity`
    position: relative;
    margin-top: 60px;
    margin-left: 30px;
`;

export const PlantInfo = styled.View`
    flex: 1;
    padding: 50px 30px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.shape};
`;

export const PlantName = styled.Text`
    text-align: center;
    font-family: ${fonts.heading};
    font-size: 24px;
    color: ${colors.heading};
    margin-top: 15px;
`;

export const AboutPlantText = styled.Text`
    text-align: center;
    font-family: ${fonts.text};
    color: ${colors.heading};
    font-size: 17px;
    margin-top: 10px;
    margin-bottom: 80px;
`;

export const Controller = styled.View`
    background-color: ${colors.white};
    padding: 20px 20px ${getBottomSpace() || 20}px 20px;
`;

export const TipContainer = styled.View`
    flex-direction: row;
    border-radius: 20px;
    position: relative;
    bottom: 70px;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.blue_light};
    padding: 20px;
`;

export const WaterImage = styled.Image`
    height: 56px;
    width: 56px;
`;

export const TipText = styled.Text`
    flex: 1;
    margin-left: 20px;
    font-family: ${fonts.text};
    color: ${colors.blue};
    font-size: 17px;
    text-align: justify;
`;

export const ChooseTimerText = styled.Text`
    text-align: center;
    font-family: ${fonts.complement};
    color: ${colors.heading};
    font-size: 15px;
    margin-bottom: 5px;
`;

export const ChangeTimeButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    padding: 40px 0;
`;

export const ChangeTimeButtonText = styled.Text`
    color: ${colors.heading};
    font-size: 24px;
    font-family: ${fonts.text};
`;
