import { Text, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import colors from '../Constants/Colors';

export default function GameOverScreen({ rounds, actual, restart}) {
    return (
        <View style={styles.container} >
            <Title>GAME OVER!</Title>
            <Text style={styles.summary} >
                Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds 
                to guess the number <Text style={styles.highlight}>{actual}</Text>
            </Text>
            <PrimaryButton onPress={restart} >Start New Game</PrimaryButton> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    summary: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    highlight: {
        fontWeight: 'bold',
        color: colors.primary2,
    },
});
