import {View, TouchableOpacity, StyleSheet, Image, Text, BackHandler} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import BookmarkPostCard from "@/app/compo/bookmarkPostCard";
import {jwtDecode} from "jwt-decode";
import {BASE_URL, READ_POST_GET_URL, SEARCH_USER} from "@/app/config/endPoints";
import axios from "axios";
import {useRouter} from "expo-router";

export default function BookMarkAllPostView() {

    const router = useRouter();
    const [userName, setUserName] = useState();
    const [profilePic, setProfilePic] = useState();
    const [bookMarkPostIds, setBookMarkPostIds] = useState<any>([])
    const [AllBookMarkPost, setAllBookMarkPost] = useState<any>([]);



    const searchUser = async () => {
        // @ts-ignore
        const decode_token: any = jwtDecode(localStorage.getItem("token"));
        const SEARCH_USER_URL = BASE_URL + SEARCH_USER + decode_token.email;


        const response = await axios.get(SEARCH_USER_URL);
        if (response.status === 201 || 200) {
            setUserName(response.data.userName);
            setProfilePic(response.data.userImage);
            setBookMarkPostIds(response.data.bookMarksPosts)
        } else {
            console.log("error");
        }
    }

    useEffect(() => {
        searchUser().then(() => console.log("done"));
        // bookMarkPostGet()
    }, []);



    const bookMarkPostGet = async () => {
        try {
            const fetchedPosts = [];
            for (let i = 0; i < bookMarkPostIds.length; i++) {
                const BOOKMARK_POST_GET_URL = `${BASE_URL}${READ_POST_GET_URL}${bookMarkPostIds[i]}`;

                const response = await axios.get(BOOKMARK_POST_GET_URL);

                if (response.status === 200 || response.status === 201) {
                    console.log(response.data);
                    fetchedPosts.push(response.data);
                } else {
                    console.log("Unexpected response status:", response.status);
                }
            }
            setAllBookMarkPost(fetchedPosts); // Update state to trigger re-render
        } catch (error) {
            console.error("Error fetching bookmarked posts:", error);
            alert("Try again...");
        }
    };

    useEffect(() => {
        // Fetch bookmarked posts after setting bookMarkPostIds
        if (bookMarkPostIds.length > 0) {
            bookMarkPostGet();
        }
    }, [bookMarkPostIds]);


    //----------handel mobile back
    useEffect(() => {
        // Function to handle the back button press
        const backAction = () => {
            // Show an alert before navigating
            router.push("/Screens/home")
            return true; // Prevent default back action (going back to previous screen)
        };

        // Add event listener to handle the back button press
        BackHandler.addEventListener('hardwareBackPress', backAction);

        // Cleanup the event listener when the component unmounts
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backAction);
        };
    }, []);


    //--------handel browser back
        useEffect(() => {
            const handleBackButton = (event:any) => {
                event.preventDefault();
                router.push("/Screens/home")
            };

            // Attach event listener to the popstate event
            window.onpopstate = handleBackButton;

            // Cleanup the event listener when the component unmounts
            return () => {
                window.onpopstate = null;
            };
        }, []);


    return (
        <View style={{ flex: 1 }}>
            {/* Top Area */}
            <View style={styles.topArea}>
                <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={()=> router.push("/Screens/bookMarkView") }>
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
                    source={{ uri: profilePic }} // Replace with actual user image URL
                    style={styles.userImage}
                />
                <View style={styles.userText}>
                    <Text style={styles.username}>{userName}</Text>
                    <Text style={styles.timestamp}>2 hours ago</Text>
                    <Text style={styles.stories}>{bookMarkPostIds.length} stories</Text>
                </View>
            </View>

            {/* "Reading List" Text */}
            <Text style={styles.readingList}>Reading List</Text>

            <View>
                {AllBookMarkPost.map((post:any, index:any) => (
                    <BookmarkPostCard key={post.id || index}
                                      postId={post._id}
                                      authorImage={post.authorImage}
                                      authorName={post.authorName}
                                      title={post.postTitle}
                                      postImage={post.images[0]}
                                      date={post.date}

                    />
                ))}
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
        borderRadius: 90,
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
