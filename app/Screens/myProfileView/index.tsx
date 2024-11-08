import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import MyStoriesCard from "@/app/compo/myStoriesCard";
import { jwtDecode } from "jwt-decode";
import {BASE_URL, SEARCH_USER, USER_HAVE_ALL_POST_GET} from "@/app/config/endPoints";
import axios from "axios";
import Tab from "@/app/compo/tab";

export default function MyProfile() {

    const [activeTab, setActiveTab] = useState("Account");
    const [selectedTab, setSelectedTab] = useState('Stories');
    const [userName, setUserName] = useState();
    const [profilePic, setProfilePic] = useState();
    const [following, setFollowing] = useState();
    const [followers, setFollowers] = useState();
    const [userAllPost, setUserAllPost] = useState<any>()

    const searchUser = async () => {
        // @ts-ignore
        const decode_token:any = jwtDecode(localStorage.getItem("token"));
        const SEARCH_USER_URL = BASE_URL + SEARCH_USER + decode_token.email;


        const response = await axios.get(SEARCH_USER_URL);
        if (response.status === 201 || 200) {
            setUserName(response.data.userName);
            setProfilePic(response.data.userImage);
            setFollowers(response.data.followers);
            setFollowing(response.data.followings);
        } else {
            console.log("error");
        }
    };

    const userHaveAllPostGet = async () => {
        // @ts-ignore
        const decode_token:any = jwtDecode(localStorage.getItem("token"));
        const USER_HAVE_ALL_POST_GET_URL = BASE_URL + USER_HAVE_ALL_POST_GET + decode_token.email;

        const response = await axios.get(USER_HAVE_ALL_POST_GET_URL);
        if (response.status === 201 || 200) {
                setUserAllPost(response.data)
        } else {
            console.log("error");
        }
    }

    useEffect(() => {
        searchUser();
        userHaveAllPostGet().then(r => "su")
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="settings" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.profileContainer}>
                    {/* Profile Picture and User Info */}
                    <View style={styles.userInfoContainer}>
                        <Image source={{ uri: profilePic }} style={styles.profilePicture} />
                        <View style={styles.textContainer}>
                            <Text style={styles.username}>{userName}</Text>
                            <View style={styles.statsContainer}>
                                <Text style={styles.stat}>{followers} Followers</Text>
                                <Text style={styles.stat}>{following} Following</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.viewStatusButton}>
                                    <Text style={styles.followButtonText}>View Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.editProfileButton}>
                                    <Text style={styles.editProfileButtonText}>Edit Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Tabs Section */}
                    <View style={styles.tabContainer}>
                        <TouchableOpacity
                            style={[styles.tabButton, selectedTab === 'Stories' && styles.activeTab]}
                            onPress={() => setSelectedTab('Stories')}
                        >
                            <Text style={styles.tabText}>Stories</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, selectedTab === 'List' && styles.activeTab]}
                            onPress={() => setSelectedTab('List')}
                        >
                            <Text style={styles.tabText}>List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, selectedTab === 'About' && styles.activeTab]}
                            onPress={() => setSelectedTab('About')}
                        >
                            <Text style={styles.tabText}>About</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Content Section */}
                    <View style={styles.contentContainer}>
                        {selectedTab === 'Stories' && (
                            <View>
                                {
                                    userAllPost && userAllPost.length > 0 ? (
                                        userAllPost.map((post: any, index: any) => (
                                            <MyStoriesCard
                                                key={index}
                                                title={post.postTitle}
                                                description={post.postDescription}
                                                date={post.date}
                                                summary={post.postSummary}
                                            />
                                        ))
                                    ) : (
                                        <Text>No posts available.</Text> // Optional message if no posts
                                    )
                                }
                            </View>
                        )}
                        {selectedTab === 'About' && (
                            <View style={styles.aboutContent}>
                                <Text style={styles.aboutText}>My About | Hello I am Dinil Damsith</Text>
                            </View>
                        )}
                        {selectedTab === 'List' && (
                            <Text style={styles.contentText}>This is the List content.</Text>
                        )}
                    </View>
                </View>
            </ScrollView>

            {/* Fixed Tab Bar */}
            <View style={styles.fixedTabBar}>
                <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        paddingBottom: 70, // Space for bottom tab bar
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    iconButton: {
        padding: 8,
    },
    profileContainer: {
        padding: 16,
        marginTop: -50,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePicture: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 10,
    },
    textContainer: {
        marginLeft: 12,
        marginTop: 40,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        marginTop: 4,
        marginBottom: 8,
    },
    stat: {
        marginRight: 16,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    viewStatusButton: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginRight: 8,
    },
    editProfileButton: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    followButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    editProfileButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    activeTab: {
        borderBottomColor: 'green',
    },
    tabText: {
        fontSize: 16,
    },
    contentContainer: {
        marginTop: 20,
        padding: 16,
    },
    aboutContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    aboutText: {
        fontSize: 30,
        textAlign: 'center',
    },
    contentText: {
        fontSize: 16,
        color: 'gray',
    },
    fixedTabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
});
