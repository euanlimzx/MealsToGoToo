import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbar}>
        <Text >Searchbar</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchbar:{
    padding:16,
    backgroundColor: "green"
  },
  list:{
    backgroundColor:"#FF0000",
    flex:1
  }
});
