import { Dimensions, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import PostView from "@/app/compo/postView";
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation, useRouter } from "expo-router";
import EditorToolbar from "@/app/compo/editorToolBar";
import Tab from "@/app/compo/tab";

export default function Home() {
    const [activeTab, setActiveTab] = useState("Home");
    const [homeActiveTab, setHomeActiveTab] = useState("For you");

    const { height } = Dimensions.get('window');
    const router = useRouter();

    const newArticleHandel = () => {
        router.push("/Screens/articleWriteView");
    }

    return (
        <View style={{ flex: 1 }}> {/* Set flex: 1 to make it take full height */}
            {/* Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginTop: 52 }}>
                <Text style={{ fontSize: 18, fontWeight: 900 }}>Home</Text>
                <TouchableOpacity onPress={() => console.log("Bell icon pressed")}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Tabs Area */}
            <View style={{ marginTop: 10 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                >
                    <TouchableOpacity onPress={() => console.log("Plus button clicked")} style={{ marginRight: 10 }}>
                        <Ionicons name="add-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHomeActiveTab("For you")} style={{ marginRight: 15 }}>
                        <Text style={[{ fontSize: 16 }, homeActiveTab === "For you" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                            For you
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHomeActiveTab("Following")} style={{ marginRight: 15 }}>
                        <Text style={[{ fontSize: 16 }, homeActiveTab === "Following" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                            Following
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* Floating Action Button */}
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    height: 70,
                    width: 70,
                    backgroundColor: 'green',
                    borderRadius: 35,
                    top: height - 150,
                    right: 22,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                }}
                onPress={newArticleHandel}
            >
                <Ionicons name="pencil" size={24} color="white" />
            </TouchableOpacity>

            {/* Content based on active tab */}
            <View style={{
                flex: 1,
                padding: 20,
                backgroundColor: '#f0f0f0',
                borderRadius: 8,
            }}>
                {homeActiveTab === "For you" ? (
                    <ScrollView
                        contentContainerStyle={{ paddingBottom: 100 }} // Extra padding for Tab bar space
                        showsVerticalScrollIndicator={false}
                    >
                        <PostView />
                        <PostView />
                        <PostView />
                        <PostView />
                        <PostView />
                        <PostView />
                    </ScrollView>
                ) : (
                    <Text style={{ fontSize: 16 }}>This is content for the "Following" tab.</Text>
                )}
            </View>

            {/* Tab Bar at the bottom */}
            <View style={styles.tabContainer}>
                <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});
