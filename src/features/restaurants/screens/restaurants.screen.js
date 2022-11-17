import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import {
  StyleSheet,
  FlatList,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { RestaurantInfoCard } from "../../../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../../../components/search.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#9A1663" />
        </LoadingContainer>
      )}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 3 }}
        //we might actually want to avoid in line styling, and we can use attrs & Flatlist instead (styled components)
        //the rule of thumb is to use attrs when you want every instance of a styled component to have that prop, and pass props directly when every instance needs a different one -
      />
    </SafeArea>
  );
};
