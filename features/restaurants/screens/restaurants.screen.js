import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";
//this is to prevent content from appearing ons staus bar

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchbar}>
      <Searchbar />
    </View>
    <RestaurantInfoCard />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchbar: {
    padding: 16,
  },
});
