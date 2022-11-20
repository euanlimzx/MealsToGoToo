import { Searchbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";

import React, { useContext, useState, useEffect } from "react";

import { LocationContext } from "../../../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  //this is destructuring the keyword as well as the search funcction
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <View style={styles.searchbar}>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    padding: 28,
    backgroundColor: "#E0144C",
  },
});
