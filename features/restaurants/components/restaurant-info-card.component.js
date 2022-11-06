import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  // in order to set defaults, restaurant should be an empty object
  const {
    name = "Default Name",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Placeholder St",
    isOpenNow = true,
    rating = 4,
    price = 2,
    isClosedTemporarily = false,
  } = restaurant;
  //this is known as destructuring an object

  return (
    <View style={styles.list}>
      <Card elevation={5}>
        <Card.Content>
          <Title>{name}</Title>
          <Card.Cover key={name} source={{ uri: photos[0] }} />
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 9,
  },
});
