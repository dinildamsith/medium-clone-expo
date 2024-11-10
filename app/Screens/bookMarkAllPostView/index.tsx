import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import BookmarkPostCard from "@/app/compo/bookmarkPostCard";

export default function BookMarkAllPostView() {
    return (
        <View style={{ flex: 1 }}>
            {/* Top Area */}
            <View style={styles.topArea}>
                <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <View style={styles.iconGroup}>
                    <TouchableOpacity style={styles.circleButton}>
                        <Ionicons name="chevron-down" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 9 }}>
                        <Entypo name="dots-three-vertical" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* User Info Section */}
            <View style={styles.userInfo}>
                <Image
                    source={{ uri: 'https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' }} // Replace with actual user image URL
                    style={styles.userImage}
                />
                <View style={styles.userText}>
                    <Text style={styles.username}>Username</Text>
                    <Text style={styles.timestamp}>2 hours ago</Text>
                    <Text style={styles.stories}>4 stories</Text>
                </View>
            </View>

            {/* "Reading List" Text */}
            <Text style={styles.readingList}>Reading List</Text>

            <View>
                <BookmarkPostCard/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    topArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 22,
    },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circleButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 20,
        marginRight: 10,
    },
    userText: {
        flexDirection: 'column',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    timestamp: {
        fontSize: 12,
        color: 'gray',
    },
    stories: {
        fontSize: 12,
        color: 'gray',
    },
    readingList: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 20,
        marginTop: 30,
    },
});
