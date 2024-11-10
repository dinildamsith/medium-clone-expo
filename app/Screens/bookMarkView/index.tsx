import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useEffect, useState} from "react";
import PostView from "@/app/compo/postView";
import ReadingListCard from "@/app/compo/ReadingListCard";
import {useRouter} from "expo-router";
import {jwtDecode} from "jwt-decode";
import {BASE_URL, READ_POST_GET_URL, SEARCH_USER} from "@/app/config/endPoints";
import axios from "axios";

export default function BookMarkView() {

    const router = useRouter();
    const [homeActiveTab, setHomeActiveTab] = useState("Your List");

    const [userName, setUserName] = useState();
    const [profilePic, setProfilePic] = useState();
    const [bookMarkPostIds, setBookMarkPostIds] = useState<any>([])
    const [following, setFollowing] = useState();
    const [followers, setFollowers] = useState();
    const [bookMarkAllPost, setBookMarkAllPost] = useState<any>()

    const searchUser = async () => {
        // @ts-ignore
        const decode_token: any = jwtDecode(localStorage.getItem("token"));
        const SEARCH_USER_URL = BASE_URL + SEARCH_USER + decode_token.email;


        const response = await axios.get(SEARCH_USER_URL);
        if (response.status === 201 || 200) {
            setUserName(response.data.userName);
            setProfilePic(response.data.userImage);
            setFollowers(response.data.followers.length);
            setFollowing(response.data.followings.length);
            setBookMarkPostIds(response.data.bookMarksPosts)
        } else {
            console.log("error");
        }
    }


    // const bookMarkPostGet = async () => {
    //     try {
    //
    //         for (let i = 0; i < bookMarkPostIds.length; i++) {
    //             const BOOKMARK_POST_GET_URl = BASE_URL + READ_POST_GET_URL + bookMarkPostIds[i]
    //
    //             const response:any = await axios.get(BOOKMARK_POST_GET_URl);
    //
    //             if (response.status === 200 || response.status === 201) {
    //                 console.log(response.data)
    //
    //             } else {
    //                 console.log("Unexpected response status:", response.status);
    //             }
    //         }
    //
    //     } catch (error: any) {
    //         console.log(error)
    //         alert("try again...")
    //     }
    // }

    useEffect(() => {
        searchUser().then(() => console.log("done"));
        // bookMarkPostGet()
    }, []);



    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginTop: 52 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Your Library</Text>
                <TouchableOpacity
                    onPress={() => console.log("New List button pressed")}
                    style={{
                        backgroundColor: 'green',
                        borderRadius: 30,
                        paddingVertical: 10,
                        paddingHorizontal: 20
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 16 }}>New List</Text>
                </TouchableOpacity>
            </View>

            {/* Tabs Area */}
            <View style={{ marginTop: 10 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                >
                    <TouchableOpacity onPress={() => setHomeActiveTab("Your List")} style={{ marginRight: 15 }}>
                        <Text style={[{ fontSize: 16 }, homeActiveTab === "Your List" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                            Your List
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHomeActiveTab("Saved List")} style={{ marginRight: 15 }}>
                        <Text style={[{ fontSize: 16 }, homeActiveTab === "Saved List" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                            Saved List
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHomeActiveTab("Highlights")} style={{ marginRight: 15 }}>
                        <Text style={[{ fontSize: 16 }, homeActiveTab === "Highlights" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                            Highlights
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHomeActiveTab("Reading History")} style={{ marginRight: 15 }}>
                        <Text style={[{ fontSize: 16 }, homeActiveTab === "Reading History" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                            Reading History
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* Content based on active tab */}
            <View style={{
                flex: 1,
                padding: 20,
                backgroundColor: '#f0f0f0',
                borderRadius: 8,
            }}>
                {homeActiveTab === "Your List" && (
                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                        <>
                            <ReadingListCard profilePic={profilePic} name={userName} bookMarkCount={bookMarkPostIds.length}/>
                        </>
                    </ScrollView>
                )}
                {homeActiveTab === "Saved List" && (
                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                        <Text>This is content for the "Saved List" tab.</Text>
                    </ScrollView>
                )}
                {homeActiveTab === "Highlights" && (
                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                        <Text>This is content for the "Highlights" tab.</Text>
                    </ScrollView>
                )}
                {homeActiveTab === "Reading History" && (
                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                        <Text>This is content for the "Reading History" tab.</Text>
                    </ScrollView>
                )}
            </View>
        </View>
    );
}
