import { View,Text,  Image, TouchableOpacity } from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import React from "react";
import {useRouter} from "expo-router";

export default function PostView(props:any){

    const router = useRouter();

    const navigateHandelProfile = () => {
        router.push("/Screens/usersProfileView")
    }

    const navigateArticleRead = () => {
        router.push("/Screens/articleReadView")
    }

    return (
      <View style={{marginBottom:100}}>

          {/*//--------Author details show view*/}
          <View style={{ alignItems: 'flex-start' }}>
              <TouchableOpacity
                  onPress={() => navigateHandelProfile()}
                  style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                  {/* User Image */}
                  <Image
                      source={{ uri: props.authorImage }}
                      style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }}
                  />

                  {/* Username */}
                  <Text style={{ fontSize: 16, color: 'black' }}>{props.authorName}</Text>
              </TouchableOpacity>
          </View>

          {/*//------------Post Details*/}
          <TouchableOpacity
                onPress={()=> navigateArticleRead()}
          >
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
                  <Text style={{ color: 'gray' }}>
                      {props.summary}
                  </Text>
              </View>

              {/* Image on the Right */}
              <Image
                  source={{ uri: 'https://www.azilen.com/wp-content/uploads/2023/07/spring.jpg' }}
                  style={{ width: 130, height: 90, marginRight:-30 }}
              />
          </View>
          </TouchableOpacity>

          {/*//---------Post details footer*/}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
              {/* Left Side - Date and Icons */}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {/* Date */}
                  <Text style={{ fontSize: 16, color: 'black', marginRight: 10 }}>Aug 20</Text>

                  {/* Hand Icon with Clap Count */}
                  <TouchableOpacity onPress={() => console.log("Hand icon clicked")}>
                      <FontAwesome name="hand-paper-o" size={24} color="black" style={{ marginRight: 5 }} />
                  </TouchableOpacity>
                  {/*<Text style={{ fontSize: 16, color: 'black', marginRight: 10 }}>20</Text>*/}

                  {/* Comment Icon with Comment Count */}
                  <TouchableOpacity onPress={() => console.log("Comment icon clicked")}>
                      <FontAwesome name="comment-o" size={24} color="black" style={{ marginRight: 5 }} />
                  </TouchableOpacity>
                  {/*<Text style={{ fontSize: 16, color: 'black', marginRight: 10 }}>20</Text>*/}
              </View>

              {/* Right Side - Minus Icon and Ellipsis Icon */}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {/* Minus Icon */}
                  <TouchableOpacity onPress={() => console.log("Minus icon clicked")}>
                      <FontAwesome name="minus" size={24} color="black" style={{ marginRight: 30 }} />
                  </TouchableOpacity>

                  {/* Ellipsis Icon */}
                  <TouchableOpacity onPress={() => console.log("More options clicked")}>
                      <FontAwesome name="ellipsis-h" size={24} color="black" style={{ transform: [{ rotate: '90deg' }] }} />
                  </TouchableOpacity>
              </View>
          </View>

      </View>
    );
}