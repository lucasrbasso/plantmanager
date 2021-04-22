import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Jost_300Light,
    Jost_400Regular,
    Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import Routes from './src/routes';

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
                barStyle="dark-content"
                backgroundColor="#DAF2E4"
                translucent
            />
            <SafeAreaView style={{ flex: 1 }}>
                <Routes />
            </SafeAreaView>
        </>
    );
}
