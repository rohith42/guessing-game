import { View, Text, StyleSheet } from "react-native";
import colors from "../Constants/Colors";


export default function Title(props) {
    return (
        <Text style={styles.title}>{props.children}</Text>
    );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary2,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: colors.primary2,
        padding: 12,
        marginVertical: 10,
    },
});