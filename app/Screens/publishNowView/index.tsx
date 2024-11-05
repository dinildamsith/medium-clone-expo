import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper'; // Make sure to install expo/vector-icons if you haven't

export default function PublishNowView() {
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
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description..."
                    multiline
                />
                <Text style={styles.subtitle}>Your Story Subtitle</Text>
            </View>

            {/* Publish Now Button */}
            <TouchableOpacity style={styles.publishButton}>
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
