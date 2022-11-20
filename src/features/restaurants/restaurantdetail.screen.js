import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../../components/restaurant-info-card.component";
import styled from "styled-components/native";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <Text>We are going to place the reviews here</Text>
    </SafeArea>
  );
};
