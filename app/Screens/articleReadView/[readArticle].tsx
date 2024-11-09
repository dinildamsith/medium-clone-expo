import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import LikeCommentBookMarkTab from "@/app/compo/tab2";
import {useRouter} from "expo-router";
import {useRoute} from "@react-navigation/core";
import {jwtDecode} from "jwt-decode";
import {ANOTHER_USER_PUBLISH_POST_GET_URL, BASE_URL, READ_POST_GET_URL} from "@/app/config/endPoints";
import axios from "axios";

export default function ArticleReadView() {

    const router = useRouter()
    const route = useRoute();
    const { readArticle }:any = route.params;

    const [authorName, setAuthorName] = useState()
    const [authorImage, setAuthorImage] = useState()
    const [postTitle, setPostTitle] = useState()
    const [postDescription, setPostDescription] = useState()
    const [postSummary, setPostSummary] = useState()
    const [postImages, setPostImages] = useState<any>([])



    const handelBack = () => {
        router.push("/Screens/main")
    }

    const readPostGet = async () => {
        try {

            const READ_POST_GET_URl = BASE_URL + READ_POST_GET_URL + readArticle

            const response:any = await axios.get(READ_POST_GET_URl);

            if (response.status === 200 || response.status === 201) {
                console.log(response.data)
                setAuthorName(response.data.authorName)
                setAuthorImage(response.data.authorImage)
                setPostTitle(response.data.postTitle)
                setPostDescription(response.data.postDescription)
                setPostSummary(response.data.postSummary)
                setPostImages(response.data.images)
            } else {
                console.log("Unexpected response status:", response.status);
            }
        } catch (error: any) {
            console.log(error)
            alert("try again...")
            router.push("/Screens/main")
        }
    }

    useEffect(() => {
        readPostGet().then(()=> console.log("done"))
    }, []);

    return (
        <View style={styles.container}>
            {/*--------------------------- Top Area */}
            <View style={styles.topArea}>
                {/* Close Button on the Left */}
                <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={()=> handelBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                {/* Grouping Preview Button and Three Dots */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* Play Button */}
                    <TouchableOpacity
                        style={{
                            borderRadius: 500,
                            borderWidth: 1,
                            borderColor: 'black',
                            width: 25,
                            height: 25,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => console.log("Play icon clicked")}
                    >
                        <Entypo name="controller-play" size={18} color="black" />
                    </TouchableOpacity>

                    {/* Share Button */}
                    <TouchableOpacity style={{ paddingHorizontal: 9 }}>
                        <Entypo name="share" size={20} color="black" />
                    </TouchableOpacity>

                    {/* Three Dots Button */}
                    <TouchableOpacity style={{ paddingHorizontal: 9 }}>
                        <Entypo name="dots-three-vertical" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/*--------------------------- Article */}
            <ScrollView contentContainerStyle={styles.articleContainer}>
                <View style={styles.articleArea}>
                    {/* Post Title */}
                    <Text style={{ fontSize: 40, marginBottom: 10 }}>{postTitle}</Text>

                    {/* User Details */}
                    <View style={{ alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => console.log("click")}
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            {/* User Image */}
                            <Image
                                source={{ uri: authorImage }}
                                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }}
                            />

                            {/* Username, Followed Text, and Publish Date */}
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, color: 'black' }}>{authorName}</Text>
                                    <Text style={{ fontSize: 16, color: 'gray', marginLeft: 5 }}>Followed</Text>
                                </View>
                                <Text style={{ fontSize: 14, color: 'gray' }}>Published on...</Text>
                                <Text style={{ fontSize: 14, color: 'gray' }}>5 min read {"Sep 26, 2024"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30, alignItems: 'center' }}>
                        <Image
                            source={{ uri: postImages[0] || 'https://esquire-shop.co.za/images/noimg.png' }}
                            style={{ width: '100%', height: 300 }}
                        />
                        <Text style={{marginTop:13}}>
                            {postDescription + "\n" + postSummary}
                        </Text>
                    </View>

                </View>
            </ScrollView>

            {/* Like, Comment, Bookmark Tab */}
            <LikeCommentBookMarkTab />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 22,
    },
    articleContainer: {
        paddingBottom: 80, // Ensures the content doesn't overlap with the tab
    },
    articleArea: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 40,
    },
});



// import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import Ionicons from "@expo/vector-icons/Ionicons";
// import {Button} from "react-native-paper";
// import {Entypo} from "@expo/vector-icons";
// import React from "react";
// import LikeCommentBookMarkTab from "@/app/compo/tab2";
//
// export default function ArticleReadView(){
//     return (
//         <>
//             <View>
//                 {/*--------------------------- Top Area */}
//                 <View style={styles.topArea}>
//                     {/* Close Button on the Left */}
//                     <TouchableOpacity style={{ paddingHorizontal: 10 }}>
//                         <Ionicons name="arrow-back" size={24} color="black" />
//                     </TouchableOpacity>
//
//                     {/* Grouping Preview Button and Three Dots */}
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         {/* play Button */}
//                         <TouchableOpacity
//                             style={{
//                                 borderRadius: 500,
//                                 borderWidth: 1,
//                                 borderColor: 'black',
//                                 width: 25, // Slightly increase the size to fit the icon comfortably
//                                 height: 25,
//                                 justifyContent: 'center',
//                                 alignItems: 'center'
//                             }}
//                             onPress={() => console.log("Play icon clicked")}
//                         >
//                             <Entypo name="controller-play" size={18} color="black" />
//                         </TouchableOpacity>
//
//                         {/* share Button */}
//                         <TouchableOpacity style={{ paddingHorizontal: 9 }}>
//                             <Entypo name="share" size={20} color="black" />
//                         </TouchableOpacity>
//
//                         {/* Three Dots Button */}
//                         <TouchableOpacity style={{ paddingHorizontal: 9 }}>
//                             <Entypo name="dots-three-vertical" size={20} color="black" />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//
//                 {/*--------------------------- Article  */}
//                 <View style={styles.articleArea}>
//                     {/* Post Title */}
//                     <Text style={{ fontSize: 40, marginBottom: 10 }}>Post Title</Text>
//
//                     {/* User Details */}
//                     <View style={{ alignItems: 'flex-start' }}>
//                         <TouchableOpacity
//                             onPress={() => console.log("click")}
//                             style={{ flexDirection: 'row', alignItems: 'center' }}
//                         >
//                             {/* User Image */}
//                             <Image
//                                 source={{ uri: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/2140/production/_85021580_85021579.jpg.webp' }}
//                                 style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }}
//                             />
//
//                             {/* Username, Followed Text, and Publish Date */}
//                             <View>
//                                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                     <Text style={{ fontSize: 16, color: 'black' }}>Mahinda Rajapaksa</Text>
//                                     <Text style={{ fontSize: 16, color: 'gray', marginLeft: 5 }}>Followed</Text>
//                                 </View>
//                                 <Text style={{ fontSize: 14, color: 'gray' }}>Published on...</Text>
//                                 <Text style={{ fontSize: 14, color: 'gray' }}>5 min read {"Sep 26, 2024"}</Text>
//                             </View>
//                         </TouchableOpacity>
//
//
//                         <View style={{marginTop:30}}>
//                             <Text>Article Content....</Text>
//                         </View>
//                         <LikeCommentBookMarkTab/>
//                     </View>
//                 </View>
//             </View>
//         </>
//     )
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//     },
//     topArea: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: 10,
//         paddingVertical: 15,
//         marginTop: 22,
//     },
//     previewButton: {
//         width: 120,
//         height: 40,
//         borderRadius: 58,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     textArea: {
//         flex: 1,
//         padding: 10,
//     },
//     textInput: {
//         width: '100%',
//         maxHeight: 300, // Set max height to avoid overflow
//         backgroundColor: 'transparent',
//         color: 'black',
//     },
//     tabContainer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//     },
//
//     articleArea: {
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         justifyContent: 'flex-start',
//         paddingHorizontal: 10,
//         paddingVertical: 15,
//         marginTop: 40,
//     },
// });
