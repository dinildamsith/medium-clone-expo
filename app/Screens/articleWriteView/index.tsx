import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, TouchableOpacity, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from 'react-native-paper';
import React, { useState } from "react";
import { TextInput } from 'react-native-paper';
import Tab from "@/app/compo/tab";
import EditorToolbar from "@/app/compo/editorToolBar";


export default function ArticleWriteView() {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* Top Area */}
                <View style={styles.topArea}>
                    {/* Close Button on the Left */}
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Grouping Preview Button and Three Dots */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Preview Button */}
                        <Button
                            mode="contained"
                            onPress={() => console.log('Pressed')}
                            buttonColor="black"
                            textColor="white"
                            style={styles.previewButton}
                        >
                            Preview
                        </Button>

                        {/* Three Dots Button */}
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
                        // Uncomment if you want to handle max height for input
                        // numberOfLines={4}
                    />
                </View>


                {/* Tab Component at Bottom */}
                <View style={styles.tabContainer}>
                    <EditorToolbar/>
                    <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
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
        maxHeight: 300, // Set max height to avoid overflow
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
