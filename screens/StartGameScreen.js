import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

import PrimaryButton from '../components/PrimaryButton';
import colors from '../Constants/Colors';

export default function StartGameScreen(props) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function inputHandler(input) {
        setEnteredNumber(input);
    }

    function reset() {
        setEnteredNumber('');
    }

    function confirm() {
        const num = parseInt(enteredNumber);

        if (isNaN(num) || num <= 0 || num > 99) {
            Alert.alert(
                'Invalid Number!', 
                'Number has to be between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: reset}]
            );
            return;
        }

        props.pickNumber(num);
    }
    
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType='number-pad'
                value={enteredNumber}
                onChangeText={inputHandler} 
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={reset}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirm}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    inputContainer:  {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: colors.primary1,
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: colors.secondary,
        color: colors.secondary,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});