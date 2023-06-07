import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoryCard(props) {

  return (
    <TouchableOpacity
        onPress={props.action}>
      <View style={styles.card}>
        <View>
          <Text style={styles.nome}>{props.category}</Text>
          <Image style={styles.image} source={{ uri: props.path }} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 8,
    boxShadow: "1px 1px 2px #778da9",
    backgroundColor: "lightblue",
    display: "flex",
    flexDirection: "row",
    width: 300
  },
  image: {
    width: 55,
    height: 80,
    marginRight: 10,
  },
  nome: {
    fontSize: 22,
  },
  preco: {},
  quant: {}
});