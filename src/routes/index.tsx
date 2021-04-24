import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import AppRoutes from './stack.routes';
import { useAuth } from '../hooks/Auth';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <AppLoading />;
    }

    return user ? (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    ) : (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    );
};

export default Routes;
