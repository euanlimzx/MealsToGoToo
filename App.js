//FOR JAVASCRIPT
//note to self: parenthesis are used as shothand to return an object : ({name:amanda}) is equivalent to { return {name:amanda}}
//parenthesis can also be used to group multitline return statements
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area.component";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useRoboto,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import { Text } from "./src//components/typography/text.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <BottomTab.Navigator
                screenOptions={({ route }) => ({
                  // eslint-disable-next-line react/no-unstable-nested-components
                  tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                      iconName = "md-restaurant";
                    } else if (route.name === "Settings") {
                      iconName = "md-settings";
                    } else if (route.name === "Map") {
                      iconName = "md-map";
                    }

                    // You can return any component that you like here!
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarActiveTintColor: "#E0144C",
                  tabBarInactiveTintColor: "gray",
                })}
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
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
