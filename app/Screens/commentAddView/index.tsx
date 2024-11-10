import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Comment from "@/app/compo/commentView";

export default function CommentAddView() {
    return (
        <>
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, marginTop: 2 }}>
                    {/* Back Arrow Button */}
                    <TouchableOpacity onPress={() => {}} style={{ marginRight: 10 }}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Response Text */}
                    <Text style={{ fontSize: 18, fontWeight: 'bold', flex: 1 }}>Response (22)</Text>
                </View>

                {/* Comments Section */}
                <View style={{ flex: 1 }}>
                    <Comment />
                    <Comment />
                </View>

                {/* Bottom Input Section */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                }}>
                    <TextInput
                        placeholder="What are your thoughts?"
                        style={{
                            flex: 1,
                            padding: 10,
                            borderRadius: 20,
                            marginRight: 10
                        }}
                    />
                    <TouchableOpacity onPress={() => { /* Handle send action */ }}>
                        <Ionicons name="send" size={24} color="blue" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
