import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Tab from "@/app/compo/tab"; // Adjust the import path as needed
import Home from "@/app/Screens/home";
import MyProfile from "@/app/Screens/myProfileView";
import BookMarkView from "@/app/Screens/bookMarkView";


export default function Main() {
    const [activeTab, setActiveTab] = useState("Home");

    // Function to render content based on the active tab
    const renderContent = () => {
        switch (activeTab) {
            case "Home":
                return (
                    <View style={styles.content}>
                        <Home />
                    </View>
                );
            case "Search":
                return (
                    <View style={styles.content}>
                        <Text>Search Content</Text>
                    </View>
                );
            case "Bookmarks":
                return (
                    <View style={styles.content}>
                        <BookMarkView/>
                    </View>
                );
            case "Account":
                return (
                    <View style={styles.content}>
                        <MyProfile/>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {/* Render the content based on the active tab */}
            {renderContent()}
            {/* Tab component for navigation */}
            <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', // Align content to the bottom
    },
    content: {
        flex: 1, // Allow the content area to take up remaining space
        paddingBottom: 60, // Add padding to ensure content doesn't overlap with tabs
    },
});
