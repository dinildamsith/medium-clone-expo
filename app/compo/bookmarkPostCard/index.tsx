import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";

const formatDate = (dateString:any) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    // @ts-ignore
    return date.toLocaleDateString('en-US', options);
};



export default function BookmarkPostCard(props:any) {
    return (
        <View style={styles.cardContainer}>
            {/* User Info (Image + Username) */}
            <View style={styles.userInfo}>
                <Image
                    source={{ uri: props.authorImage ||'https://www.pixsector.com/cache/517d8be6/av5c8336583e291842624.png' }} // Add your user image URL here
                    style={styles.userImage}
                />
                <Text style={styles.username}>{props.authorName}</Text>
            </View>

            {/* Post Details */}
            <View style={styles.postDetails}>
                {/* Text Content: Post Title and Description */}
                <View style={styles.textContent}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>

                {/* Image on the Right */}
                <Image
                    source={{ uri: props.postImage ||'https://www.pixsector.com/cache/517d8be6/av5c8336583e291842624.png' }}
                    style={styles.image}
                />
            </View>

            {/* Post Details Footer */}
            <View style={styles.footer}>
                {/* Left Side - Date */}
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{formatDate(props.date)}</Text>
                </View>

                {/* Right Side - Bookmark Icon and Ellipsis Icon */}
                <View style={styles.iconGroup}>

                    {/* Ellipsis Icon */}
                    <TouchableOpacity onPress={() => console.log("More options clicked")}>
                        <FontAwesome name="ellipsis-h" size={24} color="black" style={styles.ellipsisIcon} />
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10, // Add some spacing between user info and title
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    username: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    postDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContent: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        color: 'gray',
        marginTop: 4,
    },
    summary: {
        color: 'gray',
    },
    image: {
        width: 130,
        height: 90,
        borderRadius: 8,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        color: 'black',
    },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginRight: 20,
    },
    ellipsisIcon: {
        transform: [{ rotate: '90deg' }],
    },
    divider: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});
