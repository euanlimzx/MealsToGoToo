import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import open from "../../../assets/open";
import { SvgXml } from "react-native-svg";
import { Text } from "../components/typography/text.component";

//just take note that if you use styled components there will be an ios error when u do the status bar thing
//(if this part is true) && (this part will execute)

//TODOLIST FOR MYSELF : (1) Settle ios status bar error ^^ (2) Migrate styles to different js file if needed

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
    ratingcount = 112,
    price = 2,
    isClosedTemporarily = false,
  } = restaurant;
  //this is known as destructuring an object

  const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
  `;

  const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]}
    background-color: ${(props) => props.theme.colors.ui.quatenanary};
  `;
  const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.lato};
    font-size: ${(props) => props.theme.fontSizes.caption};
  `;
  const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
  `;

  const Row = styled.View`
    flex-direction: row;
    padding-bottom: 7px;
  `;

  const Right = styled.View`
    flex: 1;
    flex-direction: row;
    padding-right:${(props) => props.theme.space[4]}
    justify-content: flex-end;
  `;
  const ratingArray = Array.from(new Array(Math.round(rating)));
  //creates an array based on rating
  //uses the math function to round down to avoid breaking the app
  return (
    <View style={styles.list}>
      <RestaurantCard elevation={5}>
        <Info>
          <Text variant="label">{name}</Text>
          <Row>
            <Text>{rating} </Text>
            {ratingArray.map((val, index) => (
              <Text key={index}>⭐</Text>
            ))}
            <Text>({ratingcount})</Text>
            <Right>
              {isClosedTemporarily && (
                <Text style={{ color: "#E0144C" }}>CLOSED TEMPORARILY</Text>
              )}
              {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
            </Right>
          </Row>
          <Address>{address}</Address>
        </Info>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </RestaurantCard>
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
