import React, { useEffect, useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';
import { 
    useFonts, 
    Montserrat_400Regular, 
    Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';
import mock from './src/mocks/cesta'

export default function App() {

    const [fontsLoaded] = useFonts({
        "MontserratRegular" : Montserrat_400Regular,
        "MontserratBold" : Montserrat_700Bold
    });

    useEffect(() => {
        async function prepare() {
          try {
            await SplashScreen.preventAutoHideAsync();
          } catch (e) {
            console.warn(e);
          }
        }
        prepare();
      }, []);
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <SafeAreaView onLayout={onLayoutRootView} style={{flex: 1}}>
            <StatusBar />
            <Cesta {...mock} />
        </SafeAreaView>
    );
}