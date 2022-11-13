import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  FlatList,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";
//this is to prevent content from appearing ons staus bar

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchbar}>
      <Searchbar />
    </View>
    <FlatList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 3 }}
      //we might actually want to avoid in line styling, and we can use attrs & Flatlist instead (styled components)
      //the rule of thumb is to use attrs when you want every instance of a styled component to have that prop, and pass props directly when every instance needs a different one -
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchbar: {
    padding: 28,
    backgroundColor: "#E0144C",
  },
});
