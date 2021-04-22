import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../styles/colors';
import PlantSelect from '../pages/PlantSelect';
import MyPlants from '../pages/MyPlants';
import fonts from '../styles/fonts';

const Tab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: colors.green,
            inactiveTintColor: colors.body_light,
            labelPosition: 'beside-icon',
            labelStyle: {
                fontFamily: fonts.text,
                fontSize: 15,
            },
            style: {},
        }}
    >
        <Tab.Screen
            name="Nova Planta"
            component={PlantSelect}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons
                        name="add-circle-outline"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />

        <Tab.Screen
            name="Minhas Plantas"
            component={MyPlants}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons
                        name="format-list-bulleted"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);

export default AuthRoutes;
