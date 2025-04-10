import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React, {useEffect, useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Comment from "@/app/compo/commentView";
import {useRoute} from "@react-navigation/core";
import {jwtDecode} from "jwt-decode";
import {BASE_URL, COMMENT_ADD_URL, READ_POST_GET_URL, SEARCH_USER} from "@/app/config/endPoints";
import axios from "axios";
import {useRouter} from "expo-router";

export default function CommentAddView() {

    const router = useRouter();
    const route = useRoute();
    const { commentAdd }:any = route.params // post id
    const [comment, setComment] = useState<any>()

    const [userName, setUserName] = useState();
    const [profilePic, setProfilePic] = useState();
    const [postComments, setPostComments] = useState<any>([])


    const searchUser = async () => {
        // @ts-ignore
        const decode_token:any = jwtDecode(localStorage.getItem("token"));
        const SEARCH_USER_URL = BASE_URL + SEARCH_USER + decode_token.email;


        const response = await axios.get(SEARCH_USER_URL);
        if (response.status === 201 || 200) {
            setUserName(response.data.userName);
            setProfilePic(response.data.userImage);
        } else {
            console.log("error");
        }
    };


    const addCommentHandel = async () => {

        const ADD_COMMENT_URL = BASE_URL + COMMENT_ADD_URL

        try {
            const newComment = {
                postId: commentAdd, // postId
                comment,
                commenterName: userName,
                commenterPic: profilePic
            }

            const response = await axios.put(ADD_COMMENT_URL, newComment)
            if (response.status === 200) {
                console.log("Comment added:", response.data);
                postGet()
            }
        } catch (error) {
            console.error("Error adding comment:", error);
        }

    }


    const postGet = async () => {
        try {

            const GET_POST_URL = BASE_URL + READ_POST_GET_URL + commentAdd

            const response:any = await axios.get(GET_POST_URL);

            if (response.status === 200 || response.status === 201) {
                console.log(response.data)
                setPostComments(response.data.postComments)
            } else {
                console.log("Unexpected response status:", response.status);
            }
        } catch (error: any) {
            console.log(error)
            alert("try again...")
        }
    }



    useEffect(() => {
        searchUser().then(()=> console.log("done"))
        postGet()
    }, []);


    return (
        <>
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, marginTop: 2 }}>
                    {/* Back Arrow Button */}
                    <TouchableOpacity onPress={() =>
                        // @ts-ignore
                        router.push("/Screens/articleReadView/"+commentAdd)
                    } style={{ marginRight: 10 }}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Response Text */}
                    {/*<Text style={{ fontSize: 18, fontWeight: 'bold', flex: 1 }}>Response ({postComments.length})</Text>*/}
                </View>

                {/* Comments Section */}
                <View style={{ flex: 1 }}>
                    {postComments.map((comment:any, index:any) => (
                        <Comment
                            key={index}
                            comment={comment.comment}
                            commenterName={comment.commenterName}
                            commenterPic={comment.commenterPic}
                            date={comment.date}
                        />
                    ))}
                </View>

                {/* Bottom Input Section */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                }}>
                    <TextInput
                        placeholder="What are your thoughts?"
                        style={{
                            flex: 1,
                            padding: 10,
                            borderRadius: 20,
                            marginRight: 10
                        }}
                        onChangeText={setComment}
                    />
                    <TouchableOpacity onPress={() => { addCommentHandel() }}>
                        <Ionicons name="send" size={24} color="blue" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
