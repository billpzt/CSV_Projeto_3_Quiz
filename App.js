import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App() {
  const [selectedCategory, setSelectedCategory] = useState();
  const CATEGORIESLIST = [
    {id: 1, name: 'artliterature'},
    {id: 2, name: 'language'}, 
    {id: 3, name: 'sciencenature'}, 
    {id: 4, name: 'general'}, 
    {id: 5, name: 'fooddrink'}, 
    {id: 6, name: 'peopleplaces'}, 
    {id: 7, name: 'geography'}, 
    {id: 8, name: 'historyholidays'}, 
    {id: 9, name: 'entertainment'}, 
    {id: 10, name: 'toysgames'}, 
    {id: 11, name: 'music'}, 
    {id: 12, name: 'mathematics'}, 
    {id: 13, name: 'religionmythology'}, 
    {id: 14, name: 'sportsleisure'}
  ];

  const Item = ({name}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );

  // function escolhaAleatoria(escolhas) {
  //   let index = Math.floor(Math.random() * escolhas.length);
  //   return escolhas[index];
  // }

  return (
    <View style={styles.container}>
      <Text>Quiz App 1.0</Text>
      <Text>Pick a Category: </Text>
      <FlatList
        styles={styles.flatlist}
        data={CATEGORIESLIST}
        renderItem={({item}) => <Item name={item.name} />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  flatlist: {
    backgroundColor: 'red'
  },
  item: {
    marginTop: 10
  }
});
