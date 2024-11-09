import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useRouter} from "expo-router";
import {jwtDecode} from "jwt-decode";
import {BASE_URL, SEARCH_USER, USER_HAVE_ALL_POST_GET} from "@/app/config/endPoints";
import axios from "axios";
import MyStoriesCard from "../../compo/myAndUsersStoriesCard";
import {useRoute} from "@react-navigation/core";

export default function UserProfile() {
    const router = useRouter();
    const route = useRoute();
    const { userProfileView }:any = route.params;
    const [selectedTab, setSelectedTab] = useState('Stories'); // Initialize selected tab state
    const [authorName, setAuthorName] = useState()
    const [authorImage, setAuthorImage] = useState()
    const [authorFollowers, setAuthorFollowers] = useState()
    const [authorFollowings, setAuthorFollowing] = useState()
    const [userAllPost, setUserAllPost] = useState<any>()

    const handleBack = () => {
        router.push("/Screens/main")
    }


    const userHaveAllPostGet = async () => {
        try {

            const USER_HAVE_ALL_POST_GET_URL = BASE_URL + USER_HAVE_ALL_POST_GET + userProfileView;

            const response = await axios.get(USER_HAVE_ALL_POST_GET_URL);

            if (response.status === 200 || response.status === 201) {
                console.log(response.data[0])
                setAuthorName(response.data[0].authorName)
                setAuthorImage(response.data[0].authorImage)
                setUserAllPost(response.data);
            } else {
                console.log("Unexpected response status:", response.status);
            }
        } catch (error: any) {
            // Check if the error is from the response
            if (error.response) {
                console.error("Error:", error.response.data); // Error message from the server
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error setting up the request:", error.message);
            }
        }
    };

    const searchUser = async () => {
        const SEARCH_USER_URL = BASE_URL + SEARCH_USER + userProfileView;

        const response = await axios.get(SEARCH_USER_URL);
        if (response.status === 201 || 200) {
            setAuthorFollowers(response.data.followers);
            setAuthorFollowing(response.data.followings);
        } else {
            console.log("error");
        }
    };


    useEffect(() => {
        userHaveAllPostGet().then(()=> console.log("done"))
        searchUser().then(()=> console.log("done"))
    }, []);


    const formatCount = (count:any) => {
        if (count < 1000) {
            return count.toString();
        } else {
            return (count / 1000).toFixed(1) + "k";
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header with back arrow, share, and more options */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={handleBack}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.rightIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="share" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="more-vert" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.profileContainer}>
                {/* Profile Picture and User Info */}
                <View style={styles.userInfoContainer}>
                    <Image
                        source={{ uri: authorImage }}
                        style={styles.profilePicture}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.username}>{authorName}</Text>
                        <View style={styles.statsContainer}>
                            <Text style={styles.stat}>{formatCount(authorFollowers)} Followers</Text>
                            <Text style={styles.stat}>{formatCount(authorFollowings)} Following</Text>
                        </View>
                        <TouchableOpacity style={styles.followButton} onPress={()=> console.log("hii")}>
                            <Text style={styles.followButtonText}>Follow</Text>
                        </TouchableOpacity>
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
                        style={[styles.tabButton, selectedTab === 'About' && styles.activeTab]}
                        onPress={() => setSelectedTab('About')}
                    >
                        <Text style={styles.tabText}>About</Text>
                    </TouchableOpacity>
                </View>

                {/* Content Section */}
                <View style={styles.contentContainer}>
                    {selectedTab === 'Stories' && (
                       <>
                           {
                               userAllPost && userAllPost.length > 0 ? (
                                   userAllPost.map((post: any, index: any) => (
                                       <MyStoriesCard
                                           key={index}
                                           title={post.postTitle}
                                           description={post.postDescription}
                                           date={post.date}
                                           summary={post.postSummary}
                                           images={post.images}
                                       />
                                   ))
                               ) : (
                                   <Text>No posts available.</Text> // Optional message if no posts
                               )
                           }
                       </>
                    )}
                    {selectedTab === 'About' && (
                        <Text style={styles.contentText}>This is the About content.</Text>
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    iconButton: {
        position:'relative',
        zIndex:99999,
        padding: 8,
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileContainer: {
        padding: 16,
        marginTop:-55
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
        marginTop:42
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
        color: 'black',
        marginTop: 5,
        fontSize: 18,
    },
    followButton: {
        backgroundColor: 'green',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginTop: 10,
        width: 150,
    },
    followButtonText: {
        color: 'white',
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
        color: 'black',
    },
    contentContainer: {
        marginTop: 20,
        padding: 16,
    },
    contentText: {
        fontSize: 16,
        color: 'gray',
    },
});
