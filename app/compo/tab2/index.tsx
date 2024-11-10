import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
// @ts-ignore
import { BASE_URL, BOOKMARK_POST_URL, SEARCH_USER } from "@/app/config/endPoints";
import axios from "axios";

export default function LikeCommentBookMarkTab(props: any) {
    const [postId, setPostId] = useState();
    const [userId, setUserId] = useState();
    const [userBookMarkAllPosts, setUserBookMarkAllPosts] = useState<any>([]);
    const [userThisPostBookMark, setUserThisPostBookMark] = useState<any>();
    const [bookMarkDone, setBookMarkDone] = useState<any>();

    const checkThisPostAlreadyBookMark = () => {
        // Check if the postId exists in userBookMarkAllPosts
        if (userBookMarkAllPosts.includes(postId)) {
            setUserThisPostBookMark("bookmarked");
        } else {
            setUserThisPostBookMark("notBookMark");
        }
    };

    const searchUser = async () => {
        // @ts-ignore
        const decode_token: any = jwtDecode(localStorage.getItem("token"));
        const SEARCH_USER_URL = BASE_URL + SEARCH_USER + decode_token.email;

        try {
            const response = await axios.get(SEARCH_USER_URL);
            if (response.status === 200 || response.status === 201) {
                setUserId(response.data._id);
                setUserBookMarkAllPosts(response.data.bookMarksPosts);
            } else {
                console.log("Error fetching user data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    //--------handel post bookmark and un-bookmark
    const handelPostBookMark = async (postId: any) => {
        try {
            const POST_BOOKMARK_URL = BASE_URL + BOOKMARK_POST_URL;

            // Send postId in the request body
            const response = await axios.put(POST_BOOKMARK_URL, {
                bookMarkPostId: postId,
                userId: userId,
            });

            if (response.status === 200 || response.status === 201) {
                console.log(response.data); // Response from the server

                // Update the local state after the bookmark action
                setUserBookMarkAllPosts((prevPosts:any) => {
                    const updatedPosts = [...prevPosts];
                    if (userThisPostBookMark === "bookmarked") {
                        // If already bookmarked, remove it
                        const index = updatedPosts.indexOf(postId);
                        if (index > -1) {
                            updatedPosts.splice(index, 1);
                        }
                    } else {
                        // If not bookmarked, add it
                        updatedPosts.push(postId);
                    }
                    return updatedPosts;
                });

                // Update the bookmark state
                setUserThisPostBookMark(
                    userThisPostBookMark === "bookmarked" ? "notBookMark" : "bookmarked"
                );
                setBookMarkDone(true);
            } else {
                console.log("Unexpected response status:", response.status);
            }
        } catch (error: any) {
            if (error.response) {
                console.error("Error:", error.response.data); // Error message from the server
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error setting up the request:", error.message);
            }
        }
    };

    useEffect(() => {
        searchUser();
        setPostId(props.postId);
    }, [props.postId]);

    useEffect(() => {
        if (userBookMarkAllPosts.length > 0) {
            checkThisPostAlreadyBookMark();
        }
    }, [userBookMarkAllPosts, postId]);

    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="hand-paper-o" size={24} color="black" />
                <Text style={{ fontSize: 16, marginLeft: 5 }}>{props.postClaps || 0}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.centerTab}>
                <FontAwesome name="comment-o" size={24} color="black" />
                <Text style={{ fontSize: 16, marginLeft: 5 }}>{props.comments || 0}</Text>
            </TouchableOpacity>

            {userThisPostBookMark === "bookmarked" ? (
                <TouchableOpacity style={styles.tab} onPress={() => handelPostBookMark(props.postId)}>
                    <FontAwesome name="bookmark" size={24} color="black" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => handelPostBookMark(props.postId)}
                >
                    <FontAwesome name="bookmark-o" size={24} color="black" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        borderTopWidth: 1,
        borderColor: "#e0e0e0",
        paddingHorizontal: 10,
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingVertical: 10,
    },
    tab: {
        flex: 1,
        alignItems: "center",
    },
    centerTab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
