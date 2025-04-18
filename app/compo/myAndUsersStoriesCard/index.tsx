import {Image, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";
import React from "react";

const formatDate = (dateString:any) => {
    const date = new Date(dateString);
    const options:any = { year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
};


export default function MyStoriesCard(props:any){
    return (
        <>
            <View style={{marginTop:22}}>

                {/*//------------Post Details*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    {/* Text Content: Post Title and Description */}
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            {props.title}
                        </Text>

                        {/* Limit description to 3 lines */}
                        {/*<Text style={{ color: 'gray', marginTop: 4 }} numberOfLines={3} ellipsizeMode="tail">*/}
                        {/*    {props.description}*/}
                        {/*</Text>*/}
                        <Text style={{ color: 'gray', marginTop: 4 }} numberOfLines={3} ellipsizeMode="tail">
                            {props.description}
                        </Text>
                        <Text style={{ color: 'gray' }} numberOfLines={3} ellipsizeMode="tail">
                            {props.summary}
                        </Text>
                    </View>

                    {/* Image on the Right */}
                    <Image
                        source={{ uri: props.images[0] ||'https://www.pixsector.com/cache/517d8be6/av5c8336583e291842624.png' }}
                        style={{ width: 130, height: 90}}
                    />
                </View>


                {/*//---------Post details footer*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    {/* Left Side */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Date */}
                        <Text style={{ fontSize: 16, color: 'black', marginRight: 10 }}>{formatDate(props.date)}</Text>
                    </View>

                    {/* Right Side - Minus Icon and Ellipsis Icon */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Minus Icon */}
                        <TouchableOpacity onPress={() => console.log("Minus icon clicked")}>
                            <MaterialIcons name="bookmark-border" size={24} color="black" style={{ marginRight: 30 }} />
                        </TouchableOpacity>

                        {/* Ellipsis Icon */}
                        <TouchableOpacity onPress={() => console.log("More options clicked")}>
                            <FontAwesome name="ellipsis-h" size={24} color="black" style={{ transform: [{ rotate: '90deg' }] }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 10, top:21}} />

            </View>
        </>
    )
}