import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Tab from "@/app/compo/tab"; // Adjust the import path as needed
import Home from "@/app/Screens/home"; // Adjust the import path as needed

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
                        <Text>Bookmarks Content</Text>
                    </View>
                );
            case "Account":
                return (
                    <View style={styles.content}>
                        <Text>Account Content</Text>
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
