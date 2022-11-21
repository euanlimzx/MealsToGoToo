import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { CompactRestaurantInfo } from "../../../../components/compact-restaurant-info.component.";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};
