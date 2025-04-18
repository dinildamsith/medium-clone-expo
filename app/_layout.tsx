import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { AppProvider } from "./appProvider";


export default function RootLayout() {
    return (
         <AppProvider>
            <SafeAreaView style={styles.safeArea}>
                <Stack>
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/signUp/index" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/main/index" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/home/index" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/articleWriteView/index" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/articleReadView/[readArticle]" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/usersProfileView/[userProfileView]" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/myProfileView/index" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/publishNowView/index" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/bookMarkView/index" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/bookMarkAllPostView/index" options={{ headerShown: false }} />
                    <Stack.Screen name="Screens/commentAddView/[commentAdd]" options={{ headerShown: false }} />
                </Stack>
            </SafeAreaView>
        </AppProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
});
