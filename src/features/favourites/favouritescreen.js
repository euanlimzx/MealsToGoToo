import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeArea,
} from "react-native";

//import { SafeArea } from "../../components/utility/safe-area.component";
import { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../components/restaurant-info-card.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      <Text style={styles.text}>Favourites</Text>
      <FlatList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 3 }}
        //we might actually want to avoid in line styling, and we can use attrs & Flatlist instead (styled components)
        //the rule of thumb is to use attrs when you want every instance of a styled component to have that prop, and pass props directly when every instance needs a different one -
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
    padding: 28,
    paddingTop: 40,
    backgroundColor: "#E0144C",
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
