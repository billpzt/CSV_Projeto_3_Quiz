import { Text, View, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function QuestionCard(props) {
  const [revealAnswer, setRevealAnswer] = useState(false);

  return (
    <View>
      <Text>Category: {props.category}</Text>
      <Text>Question:</Text>
      <Text>{props.question}</Text>
      {revealAnswer && <Text>Resposta: {props.answer}</Text>}
      <Button 
        title="Reveal Answer" 
        onPress={() => setRevealAnswer(!revealAnswer)}
        style={styles.btnReveal} />
    </View>
  );
}

const styles = StyleSheet.create({
    btnReveal: {
        marginBottom: 20,
    }
});
