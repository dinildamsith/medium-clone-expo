import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Button } from 'react-native-paper';
import {useRouter} from "expo-router";
import {useFonts} from "expo-font";
import {useEffect, useState} from "react";
import {auth, provider, signInWithPopup} from "@/firebase";

export default function SignIn() {

    const router = useRouter(); // Initialize the router
    const [error, setError] = useState(false);
    const [googleErrorMessage, setGoogleErrorMessage] = useState("");


    const handleSignInWithGoogle = async () => {
        try {
            // Sign in with a pop-up window
            const result = await signInWithPopup(auth, provider);
            // Retrieve signed-in user credential
            const user = result.user;
            console.log("User signed in:", user);
            alert("Sign In success...")
            router.push("/Screens/home")
        } catch (error:any) {
            const errorMessage = error.message;
            const errorCode = error.code;
            setError(true);

            switch (errorCode) {
                case "auth/operation-not-allowed":
                    setGoogleErrorMessage("Email/password accounts are not enabled.");
                    break;
                case "auth/operation-not-supported-in-this-environment":
                    setGoogleErrorMessage("HTTP protocol is not supported. Please use HTTPS.");
                    break;
                case "auth/popup-blocked":
                    setGoogleErrorMessage("Popup has been blocked by the browser. Please allow popups for this website.");
                    break;
                case "auth/popup-closed-by-user":
                    setGoogleErrorMessage("Popup has been closed by the user before finalizing the operation. Please try again.");
                    break;
                default:
                    setGoogleErrorMessage(errorMessage);
                    break;
            }
        }
    };

    useEffect(() => {
        if (error) {
            alert(error + "\n" + googleErrorMessage);
        }
    }, [error, googleErrorMessage]);

    const signUpHandel = () => {
        router.push("/Screens/signUp")
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}>
            <View>
                <Text style={{
                    textAlign: 'center', // Center the text
                    // fontFamily: 'PlayfairDisplay_900Black',
                    fontSize: 30,
                    fontWeight: '900',
                    marginTop: 55
                }}>
                    Medium
                </Text>

                <Text style={{
                    display: 'flex',
                    justifyContent: 'center',
                    // fontFamily: 'PlayfairDisplay_900Black',
                    fontSize: 60,
                    fontWeight: '900',
                    marginTop: 55,
                    textAlign: 'center'
                }}>
                    Human Stories and ideas.
                </Text>

                <Text style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: '600',
                    marginTop: 10,
                    textAlign: 'center'
                }}>
                    Discover perspectives that deepen understanding
                </Text>

                {/*------------------------------Button Group------------------------*/}
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30
                }}>
                    <Button
                        icon="google"
                        mode="outlined"
                        style={{ width: 300 }}
                        onPress={() => handleSignInWithGoogle()}
                    >
                        Sign In With Google
                    </Button>

                    <Button
                        icon="facebook"
                        mode="outlined"
                        style={{ width: 300, marginTop: 10 }}
                        onPress={() => console.log('Pressed')}
                    >
                        Sign In With Facebook
                    </Button>
                    <Button
                        icon="close"
                        mode="outlined"
                        style={{ width: 300, marginTop: 10 }}
                        onPress={() => console.log('Pressed')}
                    >
                        Sign In With X
                    </Button>

                    <Button
                        icon="email"
                        mode="outlined"
                        style={{ width: 300, marginTop: 10 }}
                        onPress={() => console.log('Pressed')}
                    >
                        Sign In With Email
                    </Button>
                </View>

                {/* Already have an account section */}
                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ marginRight: 5 }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => signUpHandel()}>
                        <Text style={{ color: 'green', fontWeight: 'bold' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>


                    <Text style={{ marginTop: 22 }}>
                        Forget Email or trouble signing in?
                        <TouchableOpacity onPress={() => console.log("Get Help clicked")}>
                            <Text style={{ textDecorationLine: 'underline', color: 'blue' }}> Get Help</Text>
                        </TouchableOpacity>
                    </Text>

                    <Text style={{ marginTop: 22, textAlign: 'center', alignSelf: 'center' }}>
                        By signing up, you agree to our
                        <Text onPress={() => console.log("Terms of Service clicked")} style={{ textDecorationLine: 'underline', color: 'blue' }}> Terms of Service </Text>
                        and acknowledge that our
                        <Text onPress={() => console.log("Privacy Policy clicked")} style={{ textDecorationLine: 'underline', color: 'blue' }}> Privacy Policy </Text>
                        applies to you.
                    </Text>

                </View>
            </View>
        </ScrollView>
    );
}
