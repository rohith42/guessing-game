import { View, Text, StyleSheet } from "react-native";
import colors from "../Constants/Colors";

export default function NumberContainer(props) {
    return (
        <View style={styles.container} >
            <Text style={styles.textStyle} >{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderWidth: 4,
        borderRadius: 10,
        borderColor: colors.primary1,
        margin: 15,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 36,
        color: colors.primary1,
        fontWeight: '900',
    },
});