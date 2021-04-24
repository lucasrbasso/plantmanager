import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import {
    Container,
    DeleteButton,
    ButtonTitle,
    PlantDetails,
    PlantText,
    PlantTime,
} from './styles';
import colorTheme from '../../styles/colors';

const { colors } = colorTheme();

interface PlantProps extends RectButtonProperties {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    handleRemove: () => void;
}

const PlantCardSecondary: React.FC<PlantProps> = ({
    data,
    handleRemove,
    ...rest
}) => {
    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <DeleteButton onPress={handleRemove}>
                            <Feather
                                name="trash"
                                size={32}
                                color={colors.white}
                            />
                        </DeleteButton>
                    </View>
                </Animated.View>
            )}
        >
            <Container {...rest}>
                <SvgFromUri uri={data.photo} width={60} height={60} />
                <ButtonTitle>{data.name}</ButtonTitle>
                <PlantDetails>
                    <PlantText>Regar as</PlantText>
                    <PlantTime>{data.hour}</PlantTime>
                </PlantDetails>
            </Container>
        </Swipeable>
    );
};

export default PlantCardSecondary;
