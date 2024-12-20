import React, { useContext, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {SafeAreaView, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, TextInput } from 'react-native-paper';
import Tab from "@/app/compo/tab";
import EditorToolbar from "@/app/compo/editorToolBar";
import { Stack, useRouter } from "expo-router";
import { AppContext } from "@/app/appProvider"; // Import the context

export default function ArticleWriteView() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("Home");
    // @ts-ignore
    const { articleData, setArticleData, imageURL, setImageURL } = useContext(AppContext);
    const [allImageUrl, setAllImageUrls] = useState<any>([])
    const [articleText, setArticleText] = useState(""); // Define articleText state
    const [cursorPosition, setCursorPosition] = useState(0);

    // Handle closing the editor
    const handleClose = () => {
        router.push("/Screens/home");
    };

    const handlePreview = () => {
        setArticleData(articleText); // Store articleText in context
        router.push("/Screens/publishNowView"); // Navigate to the publish page
    };

    // Insert image at cursor position
    const insertImageAtCursor = (imageURL: any) => {
        // Update the list of all image URLs
        setAllImageUrls((prev:any) => [...prev, imageURL]);

        // Update the article text with the image at the cursor position
        const textBeforeCursor = articleText.slice(0, cursorPosition);
        const textAfterCursor = articleText.slice(cursorPosition);
        // setArticleText(`${textBeforeCursor}![Image](${imageURL})${textAfterCursor}`);

        // Optionally update context with the latest image URL
        setImageURL(imageURL);  // Update the context with the selected image URL
    };
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* Top Area */}
                <View style={styles.topArea}>
                    <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={handleClose}>
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Button
                            mode="contained"
                            onPress={handlePreview} // Use handlePreview function
                            buttonColor="black"
                            textColor="white"
                            style={styles.previewButton}
                        >
                            Preview
                        </Button>
                        <TouchableOpacity style={{ paddingHorizontal: 9 }}>
                            <Entypo name="dots-three-vertical" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Text Area */}
                <View style={styles.textArea}>
                    <TextInput
                        label="Write Your article here ...."
                        mode="flat"
                        style={styles.textInput}
                        underlineColor="transparent"
                        theme={{
                            colors: {
                                primary: 'transparent',
                                placeholder: 'transparent'
                            }
                        }}
                        multiline={true}
                        textAlignVertical="top"
                        value={articleText}
                        onChangeText={setArticleText}
                        onSelectionChange={(e) => {
                            const cursor = e.nativeEvent.selection.start;
                            setCursorPosition(cursor); // Update cursor position on selection
                        }}
                    />
                    {/*{allImageUrl.map((image: any, index: number) => (*/}
                    {/*    <Image key={index} source={{ uri: image }} style={{ width: 100, height: 100 }} />*/}
                    {/*))}*/}
                </View>

                {/* Tab Component at Bottom */}
                <View style={styles.tabContainer}>
                    <EditorToolbar onImageSelect={insertImageAtCursor} />  {/* Pass insertImageAtCursor as a prop */}
                    <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

// @ts-ignore
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
    previewButton: {
        width: 120,
        height: 40,
        borderRadius: 58,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textArea: {
        flex: 1,
        padding: 10,
    },
    textInput: {
        width: '100%',
        height:500,
        backgroundColor: 'transparent',
        color: 'black',
    },
    tabContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});
