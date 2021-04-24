import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colorTheme from '../styles/colors';
import PlantSave from '../pages/PlantSave';
import TabRoutes from './tab.routes';
import Confirmation from '../pages/Confirmation';

const Stack = createStackNavigator();

const { colors } = colorTheme();

const AppRoutes: React.FC = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: colors.background },
        }}
    >
        <Stack.Screen name="PlantSelect" component={TabRoutes} />
        <Stack.Screen name="PlantSave" component={PlantSave} />
        <Stack.Screen name="Added" component={Confirmation} />
        <Stack.Screen name="MyPlants" component={TabRoutes} />
    </Stack.Navigator>
);

export default AppRoutes;
