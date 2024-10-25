import {View, Text} from "react-native";
import { Button } from 'react-native-paper';
import {PlayfairDisplay_900Black} from "@expo-google-fonts/playfair-display";
import {useFonts} from "expo-font";
// import { useFonts, PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';


export default function Index() {

    return (
        <View>
            <Text style={{
                display:'flex',
                justifyContent:'center',
                fontFamily: 'PlayfairDisplay_900Black',
                fontSize: 30,
                fontWeight: '900',
                marginTop:55
            }}
            >
                Medium
            </Text>

            <Text style={{
                    display:'flex',
                    justifyContent:'center',
                    fontFamily: 'PlayfairDisplay_900Black',
                    fontSize: 60,
                    fontWeight: '900',
                    marginTop:55,
                    textAlign: 'center'
                }}>
                Human Stories and ideas.
            </Text>

            <Text style={{
                display:'flex',
                justifyContent:'center',
                fontSize: 20,
                fontWeight: '600',
                marginTop:10,
                textAlign: 'center'
            }}>
                Discover perspectives that deepen understanding
            </Text>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:30
            }}>
                <Button
                    icon="google"
                    mode="outlined"
                    style={{
                        width: 300, // Set the desired width for the button
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    Sign In With Google
                </Button>

                <Button
                    icon="facebook"
                    mode="outlined"
                    style={{
                        width: 300, // Set the desired width for the button
                        marginTop:10
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    Sign In With Facebook
                </Button>
                <Button
                    icon="close"
                    mode="outlined"
                    style={{
                        width: 300, // Set the desired width for the button
                        marginTop:10
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    Sign In With X
                </Button>

                <Button
                    icon="email"
                    mode="outlined"
                    style={{
                        width: 300, // Set the desired width for the button
                        marginTop:10
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    Sign In With Email
                </Button>
            </View>

        </View>
    );
}

