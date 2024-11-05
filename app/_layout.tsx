import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function RootLayout() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="Screens/signUp/index" options={{ headerShown: false }} />
                <Stack.Screen name="Screens/main/index" options={{ headerShown: false }} />
                <Stack.Screen name="Screens/home/index" options={{ headerShown: false }} />
                <Stack.Screen name="Screens/articleWriteView/index" options={{ headerShown: false }} />
                <Stack.Screen name="Screens/articleReadView/index" options={{ headerShown: false }} />
                <Stack.Screen name="Screens/usersProfileView/index" options={{ headerShown: false }} />
                <Stack.Screen name="Screens/myProfileView/index" options={{ headerShown: false }} />
                <Stack.Screen name="Screens/publishNowView/index" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white', // optional, to set a background color for the safe area
    },
});
