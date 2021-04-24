import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colorTheme from '../styles/colors';
import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';

const Stack = createStackNavigator();

const { colors } = colorTheme();

const AuthRoutes: React.FC = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: colors.background },
        }}
        initialRouteName="Welcome"
    >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
            name="UserIdentification"
            component={UserIdentification}
        />
        <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
);

export default AuthRoutes;
