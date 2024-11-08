import { Dimensions, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useEffect, useState} from "react";
import PostView from "@/app/compo/postView";
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation, useRouter } from "expo-router";
import EditorToolbar from "@/app/compo/editorToolBar";
import Tab from "@/app/compo/tab";
import {jwtDecode} from "jwt-decode";
import {ANOTHER_USER_PUBLISH_POST_GET_URL, BASE_URL, USER_HAVE_ALL_POST_GET} from "@/app/config/endPoints";
import axios from "axios";

export default function Home() {
    const [activeTab, setActiveTab] = useState("Home");
    const [homeActiveTab, setHomeActiveTab] = useState("For you");
    const [forYouTabPost, setForYouTabPost] = useState<any[]>([]); // Default to an empty array


    const { height } = Dimensions.get('window');
    const router = useRouter();

    const newArticleHandel = () => {
        router.push("/Screens/articleWriteView");
    }


    const anotherUsersPostLoad = async () => {
        try {
            // @ts-ignore
            const decode_token: any = jwtDecode(localStorage.getItem("token"));
            const USER_HAVE_ALL_POST_GET_URL = BASE_URL + ANOTHER_USER_PUBLISH_POST_GET_URL + decode_token.email;

            const response = await axios.get(USER_HAVE_ALL_POST_GET_URL);

            if (response.status === 200 || response.status === 201) {
                console.log(response.data)
                setForYouTabPost(response.data)
            } else {
                console.log("Unexpected response status:", response.status);
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        anotherUsersPostLoad().then(()=> console.log("done..."))
    }, []);

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
                        {
                            forYouTabPost.length > 0 ? (
                                forYouTabPost.map((post:any) => (
                                    <PostView
                                        key={post._id}
                                        authorName={post.authorName}
                                        authorImage={post.authorImage}
                                        title={post.postTitle}
                                        description={post.postDescription}
                                        summary={post.postSummary}
                                    />
                                ))
                            ) : (
                                <p>No posts available</p> // Fallback message
                            )
                        }
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
