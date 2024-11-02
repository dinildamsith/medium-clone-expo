import {Dimensions, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useState} from "react";
import PostView from "@/app/compo/postView";
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome'
import {useNavigation, useRouter} from "expo-router";






export default function Home () {

    const [homeActiveTab, setHomeActiveTab] = useState("For you");

    const { height } = Dimensions.get('window');

    const router = useRouter(); // Initialize the router

    const newArticleHandel = () => {
        router.push("/Screens/articleWriteView")
    }

    return (
       <View>

           {/*//------------Header*/}
           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginTop:52 }}>
               {/* Home Text */}
               <Text style={{ fontSize: 18, fontWeight:900 }}>Home</Text>

               {/* Bell Icon Button */}
               <TouchableOpacity onPress={() => console.log("Bell icon pressed")}>
                   <Ionicons name="notifications-outline" size={24} color="black" />
               </TouchableOpacity>
           </View>


           {/*//-------------Tabs Area Title*/}
           <View style={{ marginTop: 10 }}>
               <ScrollView
                   horizontal
                   showsHorizontalScrollIndicator={false}
                   contentContainerStyle={{ paddingHorizontal: 10 }}
               >
                   {/* Plus Button */}
                   <TouchableOpacity onPress={() => console.log("Plus button clicked")} style={{ marginRight: 10 }}>
                       <Ionicons name="add-circle-outline" size={24} color="black" />
                   </TouchableOpacity>

                   {/* Inline Text Items with Underline when Active */}
                   <TouchableOpacity onPress={() => setHomeActiveTab("For you")} style={{ marginRight: 15 }}>
                       <Text style={[{ fontSize: 16 }, homeActiveTab === "For you" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                           For you
                       </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => setHomeActiveTab("Following")} style={{ marginRight: 15 }}>
                       <Text style={[{ fontSize: 16 }, homeActiveTab === "Following" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                           Following
                       </Text>
                   </TouchableOpacity>
               </ScrollView>
           </View>



           <TouchableOpacity
               style={{
                   position: 'absolute',
                   height: 70,
                   width: 70,
                   backgroundColor: 'green',
                   borderRadius: 35,
                   top: height - 150,
                   right: 22,
                   justifyContent: 'center',
                   alignItems: 'center',
                   zIndex: 9999,
               }}
               onPress={newArticleHandel}
           >
               <Ionicons name="pencil" size={24} color="white" />
           </TouchableOpacity>


           {/* Content based on active tab */}
           <View style={{
               padding: 20,
               backgroundColor: '#f0f0f0',
               borderRadius: 8,
           }}>
               {homeActiveTab === "For you" ? (
                   <ScrollView
                       contentContainerStyle={{ paddingBottom: 220 }}
                       showsVerticalScrollIndicator={false} // Hide vertical scrollbar
                       showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar (if any)
                   >
                       {/* Wrap multiple PostView components in a Fragment or View */}
                       <PostView />
                       <PostView />
                       <PostView />
                       <PostView />
                       <PostView />
                       <PostView />
                   </ScrollView>
               ) : (
                   <Text style={{ fontSize: 16 }}>This is content for the "Following" tab.</Text>
               )}
           </View>


       </View>
    );
}
