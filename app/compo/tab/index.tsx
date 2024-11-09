import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useRouter} from "expo-router";
import {jwtDecode} from "jwt-decode";
import {BASE_URL, SEARCH_USER} from "@/app/config/endPoints";
import axios from "axios";

// @ts-ignore
export default function Tab({ activeTab, setActiveTab }) {
    const router = useRouter();
    const [profilePic, setProfilePic] = useState();


    const navigateProfile = () => {
        router.push("/Screens/myProfileView")
    }

    const navigateHome = () => {
        router.push("/Screens/home")
    }

    const searchUser = async () => {
        // @ts-ignore
        const decode_token:any = jwtDecode(localStorage.getItem("token"));
        const SEARCH_USER_URL = BASE_URL + SEARCH_USER + decode_token.email;

        const response = await axios.get(SEARCH_USER_URL);
        if (response.status === 201 || 200) {
            console.log(response.data.userImage)
            setProfilePic(response.data.userImage);
        } else {
            console.log("error");
        }
    };

    useEffect(() => {
        searchUser();
    }, []);


    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() =>{
                setActiveTab("Home");
                navigateHome()
            }} style={styles.tab}>
                <FontAwesome name="home" size={24} color={activeTab === "Home" ? 'blue' : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Search")} style={styles.tab}>
                <FontAwesome name="search" size={24} color={activeTab === "Search" ? 'blue' : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Bookmarks")} style={styles.tab}>
                <FontAwesome name="bookmark" size={24} color={activeTab === "Bookmarks" ? 'blue' : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setActiveTab("Account");
                    navigateProfile();
                }}
                style={styles.tab}>
                <Image
                    source={{ uri: profilePic }}
                    style={styles.accountImage}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex:99999
    },
    tab: {
        flex: 1,
        alignItems: 'center',
    },
    accountImage: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
});
