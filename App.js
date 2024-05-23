import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Navigator from "./navigation/Navigator";

import { AuthProvider } from "./authentication/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Outfit-Black": require("./assets/fonts/Outfit-Black.ttf"),
    "Outfit-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Light": require("./assets/fonts/Outfit-Light.ttf"),
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    Satisfy: require("./assets/fonts/Satisfy/Satisfy-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null; // Keep splash screen visible while fonts are loading
  }

  return (
    <AuthProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <Navigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
