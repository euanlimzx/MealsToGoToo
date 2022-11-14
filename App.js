import React from "react";
import { RestaurantsScreen } from "./features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./features/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./features/restaurants/components/utility/safe-area.component";
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
import { Ionicons } from "@expo/vector-icons";

function MapScreen() {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
}
const BottomTab = createBottomTabNavigator();

const TABICON = {
  Home: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};
const createScreenOptions = ({ route }) => {
  const iconName = TABICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

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
          <BottomTab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <BottomTab.Screen
              name="Home"
              component={RestaurantsScreen}
              options={{ headerShown: false }}
            />
            <BottomTab.Screen
              name="Map"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <BottomTab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ headerShown: false }}
            />
          </BottomTab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
