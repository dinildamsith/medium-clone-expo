import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import PostView from "@/app/compo/postView";
import ReadingListCard from "@/app/compo/ReadingListCard";

export default function BookMarkView() {
    const [homeActiveTab, setHomeActiveTab] = useState("Your List");

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginTop: 52 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Your Library</Text>
                <TouchableOpacity
                    onPress={() => console.log("New List button pressed")}
                    style={{
                        backgroundColor: 'green',
                        borderRadius: 30,
                        paddingVertical: 10,
                        paddingHorizontal: 20
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 16 }}>New List</Text>
                </TouchableOpacity>
            </View>

            {/* Tabs Area */}
            <View style={{ marginTop: 10 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                >
                    <TouchableOpacity onPress={() => setHomeActiveTab("Your List")} style={{ marginRight: 15 }}>
                        <Text style={[{ fontSize: 16 }, homeActiveTab === "Your List" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                            Your List
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHomeActiveTab("Saved List")} style={{ marginRight: 15 }}>
                        <Text style={[{ fontSize: 16 }, homeActiveTab === "Saved List" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                            Saved List
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHomeActiveTab("Highlights")} style={{ marginRight: 15 }}>
                        <Text style={[{ fontSize: 16 }, homeActiveTab === "Highlights" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                            Highlights
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setHomeActiveTab("Reading History")} style={{ marginRight: 15 }}>
                        <Text style={[{ fontSize: 16 }, homeActiveTab === "Reading History" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                            Reading History
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* Content based on active tab */}
            <View style={{
                flex: 1,
                padding: 20,
                backgroundColor: '#f0f0f0',
                borderRadius: 8,
            }}>
                {homeActiveTab === "Your List" && (
                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                        <>
                            <ReadingListCard/>
                        </>
                    </ScrollView>
                )}
                {homeActiveTab === "Saved List" && (
                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                        <Text>This is content for the "Saved List" tab.</Text>
                    </ScrollView>
                )}
                {homeActiveTab === "Highlights" && (
                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                        <Text>This is content for the "Highlights" tab.</Text>
                    </ScrollView>
                )}
                {homeActiveTab === "Reading History" && (
                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                        <Text>This is content for the "Reading History" tab.</Text>
                    </ScrollView>
                )}
            </View>
        </View>
    );
}
