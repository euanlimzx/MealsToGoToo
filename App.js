import React from "react";
import { RestaurantsScreen } from "./features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./features/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, SafeAreaView } from "react-native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useRoboto,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import { Text } from "./features/restaurants/components/typography/text.component";

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
    </View>
  );
}
const BottomTab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  const [robotoLoaded] = useRoboto({
    Roboto_500Medium,
  });

  if (!oswaldLoaded || !latoLoaded || !robotoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name="Home" component={RestaurantsScreen} />
            <BottomTab.Screen name="Map" component={MapScreen} />
            <BottomTab.Screen name="Settings" component={SettingsScreen} />
          </BottomTab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
