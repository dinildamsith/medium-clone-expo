import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useRouter} from "expo-router";

// @ts-ignore
export default function Tab({ activeTab, setActiveTab }) {
    const router = useRouter();

    const navigateProfile = () => {
        router.push("/Screens/myProfileView")
    }
    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() => setActiveTab("Home")} style={styles.tab}>
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
                    source={{ uri: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/2140/production/_85021580_85021579.jpg.webp' }}
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
