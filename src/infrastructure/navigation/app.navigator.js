import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavouriteScreen } from "../../features/favourites/favouritescreen";

const BottomTab = createBottomTabNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "md-restaurant";
          } else if (route.name === "Favourites") {
            iconName = "md-heart";
          } else if (route.name === "Map") {
            iconName = "md-map";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#E0144C",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={RestaurantsNavigator}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  </NavigationContainer>
);
