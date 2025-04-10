import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { jwtDecode } from "jwt-decode";
import {
    BASE_URL,
    SEARCH_USER,
    USER_HAVE_ALL_POST_GET,
    USER_UNFOLLOWING_URL,
    USERS_FOLLOWING_URL
} from "@/app/config/endPoints";
import axios from "axios";
import MyStoriesCard from "../../compo/myAndUsersStoriesCard";
import { useRoute } from "@react-navigation/core";

export default function UserProfile() {
    const router = useRouter();
    const route = useRoute();
    const { userProfileView }: any = route.params;
    const [selectedTab, setSelectedTab] = useState('Stories');
    const [authorName, setAuthorName] = useState('');
    const [authorImage, setAuthorImage] = useState('');
    const [authorEmail, setAuthorEmail] = useState('');
    const [authorFollowersCount, setAuthorFollowersCount] = useState(0);
    const [authorFollowingsCount, setAuthorFollowingsCount] = useState(0);
    const [authorFollowers, setAuthorFollowers] = useState<any[]>([]);
    const [userAllPost, setUserAllPost] = useState<any[]>([]);
    const [isFollowing, setIsFollowing] = useState(false);
    const [authorSearchDone, setAuthorSearchDone] = useState(false);

    const handleBack = () => {
        router.push("/Screens/home");
    }

    const fetchUserProfileData = async () => {
        try {
            const userProfileUrl = `${BASE_URL}${SEARCH_USER}${userProfileView}`;
            const response = await axios.get(userProfileUrl);
            if (response.status === 200) {
                const data = response.data;
                setAuthorName(data.userName);
                setAuthorImage(data.profileImage);
                setAuthorEmail(data.userMail);
                setAuthorFollowers(data.followers);
                setAuthorFollowersCount(data.followers.length);
                setAuthorFollowingsCount(data.followings.length);
                setAuthorSearchDone(true);
                // @ts-ignore
                setIsFollowing(data.followers.includes(jwtDecode(localStorage.getItem("token")).email));
            }
        } catch (error) {
            console.error("Error fetching user data", error);
        }
    };

    const fetchUserPosts = async () => {
        try {
            const postsUrl = `${BASE_URL}${USER_HAVE_ALL_POST_GET}${userProfileView}`;
            const response = await axios.get(postsUrl);
            if (response.status === 200) {
                setUserAllPost(response.data);
            }
        } catch (error) {
            console.error("Error fetching user posts", error);
        }
    };

    const handleFollowUnfollow = async () => {
        try {
            // @ts-ignore
            const decode_token: any = jwtDecode(localStorage.getItem("token"));
            const url = isFollowing ? BASE_URL + USER_UNFOLLOWING_URL : BASE_URL + USERS_FOLLOWING_URL;
            const response = await axios.put(url, {
                followerEmail: decode_token.email,
                followeeEmail: authorEmail,
            });

            if (response.status === 200 || response.status === 201) {
                // Update the following state
                setIsFollowing(!isFollowing);

                // Update the followers count based on follow/unfollow action
                setAuthorFollowersCount(prevCount => isFollowing ? prevCount - 1 : prevCount + 1);
            }
        } catch (error) {
            console.error("Error handling follow/unfollow", error);
        }
    };

    useEffect(() => {
        fetchUserProfileData();
        fetchUserPosts();
    }, [userProfileView]);

    const formatCount = (count: any) => {
        if (count < 1000) return count.toString();
        return (count / 1000).toFixed(1) + 'k';
    };

    return (
        <ScrollView style={styles.container}>
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
                <View style={styles.userInfoContainer}>
                    <Image source={{ uri: authorImage }} style={styles.profilePicture} />
                    <View style={styles.textContainer}>
                        <Text style={styles.username}>{authorName}</Text>
                        <View style={styles.statsContainer}>
                            {/*<Text style={styles.stat}>{formatCount(authorFollowersCount)} Followers</Text>*/}
                            {/*<Text style={styles.stat}>{formatCount(authorFollowingsCount)} Following</Text>*/}
                        </View>

                        <TouchableOpacity
                            style={styles.followButton}
                            onPress={handleFollowUnfollow}
                        >
                            <Text style={styles.followButtonText}>
                                {isFollowing ? "Following" : "Follow"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

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

                <View style={styles.contentContainer}>
                    {selectedTab === 'Stories' && (
                        <>{userAllPost && userAllPost.length > 0 ? (
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
                            <Text>No posts available.</Text>
                        )}</>
                    )}
                    {selectedTab === 'About' && (
                        <Text style={styles.contentText}>This is the About content.</Text>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 10 },
    iconButton: { padding: 8 },
    rightIcons: { flexDirection: 'row', alignItems: 'center' },
    profileContainer: { padding: 16 },
    userInfoContainer: { flexDirection: 'row', alignItems: 'center' },
    profilePicture: { width: 70, height: 70, borderRadius: 35 },
    textContainer: { marginLeft: 12 },
    username: { fontSize: 20, fontWeight: 'bold' },
    statsContainer: { flexDirection: 'row', marginTop: 4 },
    stat: { marginRight: 16, color: 'black', fontSize: 18 },
    followButton: { backgroundColor: 'green', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 16, alignItems: 'center', marginTop: 10 },
    followButtonText: { color: 'white', fontWeight: 'bold' },
    tabContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
    tabButton: { flex: 1, paddingVertical: 10, alignItems: 'center', borderBottomWidth: 2, borderBottomColor: 'white' },
    activeTab: { borderBottomColor: 'green' },
    tabText: { fontSize: 16, color: 'black' },
    contentContainer: { marginTop: 20 },
    contentText: { fontSize: 16, color: 'gray' },
});
