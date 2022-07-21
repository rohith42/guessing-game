import { Pressable, Text, View, StyleSheet } from 'react-native';
import colors from '../Constants/Colors';


export default function PrimaryButton(props) {
    // props.children is a special keyword for anything that appears
    // between the <PrimaryButton></PrimaryButton> tags
    
    return (
        <View style={styles.outerContainer}>
            <Pressable 
                onPress={props.onPress}
                style={({pressed}) => {
                    if (pressed) {
                        return [styles.innerContainer, styles.pressedButton];
                    } else return styles.innerContainer;
                }}
            >
                <Text style={styles.buttonText} >{props.children}</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    outerContainer: {
        margin: 4,
    },
    innerContainer: {
        backgroundColor: colors.primary3,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 16,
        margin: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressedButton: {
        opacity: 0.75,
    },
});