import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';


// @ts-ignore
export default function EditorToolbar({ onImageSelect }) {
    const handleImageSelect = () => {

    };

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const imageUri = result.assets[0].uri;
            const uriParts = imageUri.split('.');
            const fileType = uriParts[uriParts.length - 1]; // Get the file extension

            // Create a file from the image URI
            const response = await fetch(imageUri);
            const blob = await response.blob(); // Convert to blob
            const file = new File([blob], `image.${fileType}`, { type: `image/${fileType}` });

            onImageSelect(file);  // Pass the file to the parent function
        } else {
            alert('You did not select any image.');
        }
    };


    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab}>
                <Text style={styles.iconText}>T<Text style={styles.subText}>T</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Text style={styles.iconText}>,,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="bars" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="link" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="ellipsis-h" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="at" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="code" style={styles.icon} />
            </TouchableOpacity>

            {/* Photo Icon - Right-aligned */}
            <TouchableOpacity style={[styles.tab, styles.photoIcon]} onPress={pickImageAsync}>
                <FontAwesome name="image" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#f3f3f3',
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 62,
        width: '100%',
    },
    tab: {
        alignItems: 'center',
        padding: 10,
    },
    iconText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },
    subText: {
        fontSize: 12,
        fontWeight: '400',
    },
    icon: {
        fontSize: 20,
        color: '#333',
    },
    photoIcon: {
        position: 'absolute',
        right: 0,
        padding: 10,
    },
});
