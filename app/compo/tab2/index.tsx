import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";

export default function LikeCommentBookMarkTab() {
    return (
        <>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.tab}>
                    <FontAwesome name="hand-paper-o" size={24} color="black" />
                    <Text style={{ fontSize: 16, marginLeft: 5 }}>12</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.centerTab}>
                    <FontAwesome name="comment-o" size={24} color="black" />
                    <Text style={{ fontSize: 16, marginLeft: 5 }}>12</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab}>
                    <FontAwesome name="bookmark-o" size={24} color="black" />
                    <Text style={{ fontSize: 16, marginLeft: 5 }}>{}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Distributes space between the icons
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 0, // Aligns the tab at the bottom of the window
        width: '100%', // Ensures full-width container
        paddingVertical: 10, // Adds some vertical padding
    },
    tab: {
        flex: 1, // Makes each tab take equal width
        alignItems: 'center',
    },
    centerTab: {
        flex: 1, // This will also take equal width
        alignItems: 'center',
        justifyContent: 'center', // Center the icon in its container
    },
});