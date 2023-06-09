import React, { FC, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryCard from "../components/CategoryCard";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const apiCall = `https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia?category=${selectedCategory}&limit=10`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a777e9f51bmshbe718764991ce9cp1688bajsn080688213b13",
      "X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com",
    },
  };

  const handleSearch = (category) => {
    setSelectedCategory(category);

    fetch(apiCall, options)
      .then((result) => result.json())
      .then((usefulData) => {
        setData(usefulData);
      })
      .catch((error) => {
        setError(`An error occurred: ${error}`);
      });
  };

  const CATEGORIESLIST = [
    {
      id: 1,
      name: "Art & Literature",
      category: "artliterature",
    },
    {
      id: 2,
      name: "Language",
      category: "language",
    },
    {
      id: 3,
      name: "Science & Nature",
      category: "sciencenature",
    },
    {
      id: 4,
      name: "General",
      category: "general",
    },
    {
      id: 5,
      name: "Food & Drink",
      category: "fooddrink",
    },
    {
      id: 6,
      name: "People & Places",
      category: "peopleplaces",
    },
    {
      id: 7,
      name: "Geography",
      category: "geography",
    },
    {
      id: 8,
      name: "History & Holidays",
      category: "historyholidays",
    },
    {
      id: 9,
      name: "Entertainment",
      category: "entertainment",
    },
    {
      id: 10,
      name: "Toys & Games",
      category: "toysgames",
    },
    {
      id: 11,
      name: "Music",
      category: "music",
    },
    {
      id: 12,
      name: "Mathematics",
      category: "mathematics",
    },
    {
      id: 13,
      name: "Religion & Mythology",
      category: "religionmythology",
    },
    {
      id: 14,
      name: "Sports & Leisure",
      category: "sportsleisure",
    },
  ];

  // function escolhaAleatoria(escolhas) {
  //   let index = Math.floor(Math.random() * escolhas.length);
  //   return escolhas[index];
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App 1.0</Text>
      <Text>Pick a Category: </Text>
      <FlatList
        styles={styles.flatlist}
        data={CATEGORIESLIST}
        renderItem={({ item }) => 
          <CategoryCard 
            category={item.name}
            action={() => handleSearch(item.category)} 
            />}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 'auto',
  },
  title: {
    marginTop: 10,
    fontSize: 50
  },
  flatlist: {
    backgroundColor: "red",
  },
  item: {
    marginTop: 10,
  },
});
