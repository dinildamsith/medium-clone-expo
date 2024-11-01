import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from "expo-router";

export default function MyProfile() {
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState('Stories'); // Initialize selected tab state

    return (
        <ScrollView style={styles.container}>
            {/* Header with back arrow, share, and more options */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="settings" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.profileContainer}>
                {/* Profile Picture and User Info */}
                <View style={styles.userInfoContainer}>
                    <Image
                        source={{ uri: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/2140/production/_85021580_85021579.jpg.webp' }}
                        style={styles.profilePicture}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.username}>Mahinda Rajapaksha</Text>
                        <View style={styles.statsContainer}>
                            <Text style={styles.stat}>100 Followers</Text>
                            <Text style={styles.stat}>50 Following</Text>
                        </View>
                        {/* Inline View Status and Edit Profile Buttons */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.viewStatusButton]} onPress={() => console.log("View Status")}>
                                <Text style={styles.followButtonText}>View Status</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.editProfileButton]} onPress={() => console.log("Edit Profile")}>
                                <Text style={[styles.editProfileButtonText]}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Tabs Section */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tabButton, selectedTab === 'Stories' && styles.activeTab]}
                        onPress={() => setSelectedTab('Stories')}
                    >
                        <Text style={styles.tabText}>Stories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, selectedTab === 'List' && styles.activeTab]}
                        onPress={() => setSelectedTab('List')}
                    >
                        <Text style={styles.tabText}>List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, selectedTab === 'About' && styles.activeTab]}
                        onPress={() => setSelectedTab('About')}
                    >
                        <Text style={styles.tabText}>About</Text>
                    </TouchableOpacity>
                </View>

                {/* Content Section */}
                <View style={styles.contentContainer}>
                    {selectedTab === 'Stories' && (
                        <Text style={styles.contentText}>This is the Stories content.</Text>
                    )}
                    {selectedTab === 'About' && (
                        <Text style={styles.contentText}>This is the About content.</Text>
                    )}
                    {selectedTab === 'List' && (
                        <Text style={styles.contentText}>This is the List content.</Text>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    iconButton: {
        padding: 8,
    },
    profileContainer: {
        padding: 16,
        marginTop: -50,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePicture: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 10,
    },
    textContainer: {
        marginLeft: 12,
        marginTop: 40,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        marginTop: 4,
        marginBottom: 8,
    },
    stat: {
        marginRight: 16,
        color: 'black',
        marginTop: 5,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    viewStatusButton: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginRight: 8,
    },
    editProfileButton: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginRight: 8,
    },
    followButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    editProfileButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    activeTab: {
        borderBottomColor: 'green',
    },
    tabText: {
        fontSize: 16,
        color: 'black',
    },
    contentContainer: {
        marginTop: 20,
        padding: 16,
    },
    contentText: {
        fontSize: 16,
        color: 'gray',
    },
});
