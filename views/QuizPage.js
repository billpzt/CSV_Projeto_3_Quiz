import React from "react";
import { View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';

export default function QuizPage() {
    const route = useRoute();
    const { data } = route.params;
    console.log(data);
    return (
        <View>
            <Text>QuizPage</Text>
            {data && <Text>{data}</Text>}
        </View>
    )
}
