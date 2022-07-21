import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";


let min = 1;
let max = 100;

export default function GameScreen({ actual, onGameOver }) {
    const [guess, setGuess] = useState( rng(min, max) );

    useEffect(() => {
        if (guess === actual) {
            onGameOver();
        }
    }, [guess, actual, onGameOver]);
    
    function rng(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function newGuess(direction) {
        if ((direction === '-' && actual > guess) ||
            (direction === '+' && actual < guess) ) {
            Alert.alert(
                "Don't lie!!!!",
                'You know that this is wrong...',
                [{ text: 'Sorry!', style: 'cancel' }]
            );
            return;
        }

        if (direction === '-') {
            max = guess;
        } else {
            min = guess + 1;
        }
        setGuess( rng(min, max) );
    }
    
    return (
        <View style={styles.screen} >
            <Title>Opponents Guess</Title>
            <NumberContainer>{guess}</NumberContainer>

            <View style={styles.feedbackContainer}>
                <Text>Higher or Lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={newGuess.bind(this, '-')} >-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={newGuess.bind(this, '+')} >+</PrimaryButton>
                    </View>
                </View>
            </View>

            {/* <View>LOG ROUNDS</View> */}

        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
    feedbackContainer: {
        margin: 10,
        padding: 5,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonsContainer: {
        flexDirection: 'row',
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        alignContent: "center",
        alignItems: 'center',
        justifyContent: "space-evenly",
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
});