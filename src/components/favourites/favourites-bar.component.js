import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../typography/text.component";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import { CompactRestaurantInfo } from "../compact-restaurant-info.component.";

const CentreText = styled(Text)`
  font-size: 17px;
  padding: 15px;
  text-align: center;
`;

const FavouritesWrapper = styled(View)`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return <CentreText>You haven't added any favourites yet!</CentreText>;
  }
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <TouchableOpacity
              key={key}
              onPress={() =>
                onNavigate("RestaurantDetail", {
                  restaurant,
                })
              }
            >
              <View style={{ paddingLeft: 10 }}>
                <CompactRestaurantInfo restaurant={restaurant} />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
