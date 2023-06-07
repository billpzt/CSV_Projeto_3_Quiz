import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [perguntas, setPerguntas] = useState({});

  const url = `https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia?category=${selectedCategory}&limit=10`;
  
  const options = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': 'a777e9f51bmshbe718764991ce9cp1688bajsn080688213b13',
		'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
  }
};

  const CATEGORIESLIST = [
    {
      name: "Art & Literature", 
      category: 'artliterature'
    },
    {
      name: "Language", 
      category: 'language'
    }, 
    {
      name: "Science & Nature", 
      category: 'sciencenature'
    }, 
    {
      name: "General", 
      category: 'general'
    }, 
    {
      name: "Food & Drink", 
      category: 'fooddrink'
    }, 
    {
      name: "People & Places", 
      category: 'peopleplaces'
    }, 
    {
      name: "Geography", 
      category: 'geography'
    }, 
    {
      name: "History & Holidays", 
      category: 'historyholidays'
    }, 
    {
      name: "Entertainment", 
      category: 'entertainment'
    }, 
    {
      name: "Toys & Games", 
      category: 'toysgames'
    }, 
    {
      name: "Music", 
      category: 'music'
    }, 
    {
      name: "Mathematics", 
      category: 'mathematics'
    }, 
    {
      name: "Religion & Mythology", 
      category: 'religionmythology'
    }, 
    {
      name: "Sports & Leisure", 
      category: 'sportsleisure'
    }
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
