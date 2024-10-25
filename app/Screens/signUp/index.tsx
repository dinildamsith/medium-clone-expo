import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { useFonts, PlayfairDisplay_900Black } from "@expo-google-fonts/playfair-display"; // Ensure correct font imports

export default function Index() {
    // Load the font
    const [fontsLoaded] = useFonts({
        PlayfairDisplay_900Black,
    });

    if (!fontsLoaded) {
        return null; // Optionally render a loading state or return null while fonts are loading
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Medium
            </Text>

            <Text style={styles.subtitle}>
                Human Stories and ideas.
            </Text>

            <Text style={styles.description}>
                Discover perspectives that deepen understanding
            </Text>

            {/* Button Section */}
            <View style={styles.buttonContainer}>
                <Button
                    icon="google"
                    mode="outlined"
                    style={styles.button}
                    onPress={() => console.log('Pressed')}
                >
                    Sign In With Google
                </Button>

                <Button
                    icon="facebook"
                    mode="outlined"
                    style={styles.button}
                    onPress={() => console.log('Pressed')}
                >
                    Sign In With Facebook
                </Button>

                <Button
                    icon="apple"
                    mode="outlined"
                    style={styles.button}
                    onPress={() => console.log('Pressed')}
                >
                    Sign In With Apple
                </Button>

                <Button
                    icon="close" // Changed from "x" to "close"
                    mode="outlined"
                    style={styles.button}
                    onPress={() => console.log('Pressed')}
                >
                    Sign In With X
                </Button>

                <Button
                    icon="email"
                    mode="outlined"
                    style={styles.button}
                    onPress={() => console.log('Pressed')}
                >
                    Sign In With Email
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Take full height of the parent
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        padding: 0, // Optional padding for better layout
    },
    title: {
        fontFamily: 'PlayfairDisplay_900Black',
        fontSize: 30,
        fontWeight: '900',
        marginTop: 0,
        textAlign: 'center', // Center text
    },
    subtitle: {
        fontFamily: 'PlayfairDisplay_900Black',
        fontSize: 60,
        fontWeight: '900',
        marginTop: 30,
        textAlign: 'center', // Center text
    },
    description: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10,
        textAlign: 'center', // Center text
    },
    buttonContainer: {
        marginTop: 30, // Space above the button section
        alignItems: 'center', // Align buttons to the center
    },
    button: {
        width: 300, // Set the desired width
        marginVertical: 10, // Space between buttons
        flexDirection: 'row', // Align icon and text in a row
        justifyContent: 'center', // Center items horizontally within the button
        alignItems: 'center', // Center items vertically
    },
});
