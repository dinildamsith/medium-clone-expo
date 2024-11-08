import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import {AppContext} from "@/app/appProvider";
import axios from "axios";
import {jwtDecode } from 'jwt-decode';
import {BASE_URL, POST_SAVE_URL} from "@/app/config/endPoints";


export default function PublishNowView() {

    // @ts-ignore
    const { articleData, imageURL } = useContext(AppContext);
    const [articleTitle, setArticleTitle] = useState("");
    const [articleDesc, setArticleDesc] = useState("")




    const handelPublishNow = async () => {

        const URL = BASE_URL + POST_SAVE_URL

        // @ts-ignore
        const decodedToken:any = jwtDecode(localStorage.getItem("token"));

        const POST_DATA = {
            authorMail: decodedToken.email,
            authorName: decodedToken.name,
            authorImage: decodedToken.picture,
            postTitle: articleTitle,
            postDescription: articleDesc,
            postSummary: articleData,
            images: imageURL,
            postClaps: 0,
            postComments: []
        }

        try {
            // Make POST request
            const response = await axios.post(URL, POST_DATA);
            if (response.status === 201 || 200) {
                console.log("Success", "Article saved successfully!");
                // Optionally clear the form fields
                setArticleTitle("");
            } else {
                console.log("Error", "Failed to save the article.");
            }
        } catch (error) {
            console.error("Error saving article:", error);
            console.log("Error", "An error occurred. Please try again.");
        }
    }

    return (
        <View style={styles.container}>
            {/* Back Arrow Icon */}
            <TouchableOpacity style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Story Preview</Text>

            {/* Story Preview Text */}
            <Text style={styles.storyPreview}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim a minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>

            {/* Story Preview Box */}
            <View style={styles.storyPreviewBox}>
                <View style={styles.userAccount}>
                    {/* User Profile Picture */}
                    <Image
                        source={{ uri: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/2140/production/_85021580_85021579.jpg.webp' }} // Replace with actual user image URL
                        style={styles.userImage}
                    />
                    {/* User Name */}
                    <Text style={styles.userName}>User Name</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Title..."
                    multiline
                    onChangeText={setArticleTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description..."
                    multiline
                    onChangeText={setArticleDesc}
                />
                <Text style={styles.subtitle}>Your Story Subtitle</Text>
            </View>

            {/* Publish Now Button */}
            <TouchableOpacity style={styles.publishButton} onPress={handelPublishNow}>
                <Text style={styles.publishButtonText}>Publish Now</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    backButton: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 16,
    },
    storyPreview: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555',
    },
    storyPreviewBox: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
        marginHorizontal: 16,
        marginTop: 16,
    },
    userAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: '600',
    },
    input: {
        height: 20, // Increase height for better user experience
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginBottom: 12,
        textAlignVertical: 'top',
    },
    publishButton: {
        backgroundColor: 'black', // Black color for the button
        padding: 16,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: 20, // Space above the button
    },
    publishButtonText: {
        color: '#fff', // White text color
        fontSize: 18,
        fontWeight: 'bold',
    },
});
