import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { AppearanceProvider, Appearance } from 'react-native-appearance';
import {
    useFonts,
    Jost_300Light,
    Jost_400Regular,
    Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import AppProvider from './src/hooks';

import Routes from './src/routes';

const colorScheme = Appearance.getColorScheme();

export default function App() {
    const [fontsLoaded] = useFonts({
        Jost_300Light,
        Jost_400Regular,
        Jost_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <StatusBar
                barStyle={
                    colorScheme === 'light' ? 'dark-content' : 'light-content'
                }
                backgroundColor={
                    colorScheme === 'light' ? '#DAF2E4' : '#2B2B2C'
                }
                translucent
            />
            <AppearanceProvider>
                <AppProvider>
                    <SafeAreaView style={{ flex: 1 }}>
                        <Routes />
                    </SafeAreaView>
                </AppProvider>
            </AppearanceProvider>
        </>
    );
}
