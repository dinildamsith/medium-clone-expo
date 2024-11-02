import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import LikeCommentBookMarkTab from "@/app/compo/tab2";
import {useRouter} from "expo-router";

export default function ArticleReadView() {

    const router = useRouter();

    const handelBack = () => {
        router.push("/Screens/main")
    }

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
                    <Text style={{ fontSize: 40, marginBottom: 10 }}>Post Title</Text>

                    {/* User Details */}
                    <View style={{ alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => console.log("click")}
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            {/* User Image */}
                            <Image
                                source={{ uri: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/2140/production/_85021580_85021579.jpg.webp' }}
                                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }}
                            />

                            {/* Username, Followed Text, and Publish Date */}
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, color: 'black' }}>Mahinda Rajapaksa</Text>
                                    <Text style={{ fontSize: 16, color: 'gray', marginLeft: 5 }}>Followed</Text>
                                </View>
                                <Text style={{ fontSize: 14, color: 'gray' }}>Published on...</Text>
                                <Text style={{ fontSize: 14, color: 'gray' }}>5 min read {"Sep 26, 2024"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text>Article Content....</Text>
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