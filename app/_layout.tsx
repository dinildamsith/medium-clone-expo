import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="Screens/signUp/index" options={{ headerShown: false }} />
            <Stack.Screen name="Screens/main/index" options={{ headerShown: false }} />
            <Stack.Screen name="Screens/home/index" options={{ headerShown: false }} />
            <Stack.Screen name="Screens/articleWriteView/index" options={{ headerShown: false }} />
        </Stack>
    );
}