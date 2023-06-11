import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useRoute } from '@react-navigation/native';
import QuestionCard from "../components/QuestionCard";

export default function QuizPage({ route }) {
    // const route = useRoute();
    const { data } = route.params;
    console.log(data[0].question);

    function gravarAcertoErro(acertoOuErro) {
        switch (acertoOuErro) {
            case 'acerto': 
                return null;
                break;
            case 'erro':
                return null;
                break; 
        }
    }

    return (
        <View>
            <Text>QuizPage</Text>
            {data && <Text>{data}</Text>}
            <QuestionCard />
            <View style={styles.btnAcerteiErrei}>
                <View style={styles.btnAcertei}>
                    <Button
                        title="Acertei"
                        onPress={() => gravarAcertoErro('acerto')}
                        />
                </View>
                <View style={styles.btnErrei}>
                    <Button
                        title="Errei"
                        onPress={() => gravarAcertoErro('erro')}
                        />
                </View>
                <View style={styles.btnProxima}>
                    <Button
                        title="--->"
                        onPress={() => gravarAcertoErro('proxima')}
                        />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnAcerteiErrei: {
        display: 'flex',
        flexDirection: 'row',
        // width: '100%',
        justifyContent: 'center'
    },
    btnAcertei: {
        marginRight: 10,
        marginLeft: 10
    },
    btnErrei: {
        marginRight: 10,
        marginLeft: 10
    },
    btnProxima: {
        marginRight: 10,
        marginLeft: 10
    }
})