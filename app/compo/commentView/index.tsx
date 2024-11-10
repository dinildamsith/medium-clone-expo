import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Comment(props:any) {


    // Function to calculate relative time
    const getRelativeTime = (dateString:any) => {
        const now:any = new Date();
        const commentDate:any = new Date(dateString);

        const seconds = Math.floor((now - commentDate) / 1000); // Time difference in seconds
        const minutes = Math.floor(seconds / 60); // Time difference in minutes
        const hours = Math.floor(minutes / 60); // Time difference in hours
        const days = Math.floor(hours / 24); // Time difference in days
        const months = Math.floor(days / 30); // Time difference in months
        const years = Math.floor(days / 365); // Time difference in years

        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

        // Return relative time
        if (seconds < 60) {
            return rtf.format(-seconds, 'seconds');
        } else if (minutes < 60) {
            return rtf.format(-minutes, 'minutes');
        } else if (hours < 24) {
            return rtf.format(-hours, 'hours');
        } else if (days < 30) {
            return rtf.format(-days, 'days');
        } else if (months < 12) {
            return rtf.format(-months, 'months');
        } else {
            return rtf.format(-years, 'years');
        }
    };


    return (
        <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            {/* Top Row: User Image, Name, Date, and Menu */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                {/* User Image */}
                <Image
                    source={{ uri: props.commenterPic }}
                    style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
                />

                {/* User Name and Date */}
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{props.commenterName}</Text>
                    <Text style={{ color: '#777', fontSize: 12 }}>{getRelativeTime(props.date)}</Text>
                </View>

                {/* Three-Dot Menu */}
                <TouchableOpacity style={{ transform: [{ rotate: '90deg' }] }}>
                    <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Comment Message */}
            <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>
                {props.comment}
            </Text>

            {/* Actions Row: Clap and Comment Icons */}
            {/*<View style={{ flexDirection: 'row', alignItems: 'center' }}>*/}
            {/*    /!* Clap Icon *!/*/}
            {/*    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>*/}
            {/*        <Ionicons name="heart-outline" size={20} color="black" />*/}
            {/*        <Text style={{ marginLeft: 5 }}>24</Text>*/}
            {/*    </TouchableOpacity>*/}

            {/*    /!* Comment Icon *!/*/}
            {/*    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>*/}
            {/*        <Ionicons name="chatbubble-outline" size={20} color="black" />*/}
            {/*        <Text style={{ marginLeft: 5 }}>3</Text>*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}
        </View>
    );
}
