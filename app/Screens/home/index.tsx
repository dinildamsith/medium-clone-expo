import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useState} from "react";


export default function Home () {

    const [activeTab, setActiveTab] = useState("For you");


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
                   <TouchableOpacity onPress={() => setActiveTab("For you")} style={{ marginRight: 15 }}>
                       <Text style={[{ fontSize: 16 }, activeTab === "For you" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                           For you
                       </Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => setActiveTab("Following")} style={{ marginRight: 15 }}>
                       <Text style={[{ fontSize: 16 }, activeTab === "Following" && { textDecorationLine: 'underline', fontWeight: 'bold', color: 'green' }]}>
                           Following
                       </Text>
                   </TouchableOpacity>
               </ScrollView>
           </View>

           {/* Content based on active tab */}
           <View style={{
               padding: 20,
               backgroundColor: '#f0f0f0',
               borderRadius: 8,
               width: '90%',
               alignItems: 'center',
           }}>
               {activeTab === "For you" ? (
                   <Text style={{ fontSize: 16 }}>This is content for the "For you" tab.</Text>
               ) : (
                   <Text style={{ fontSize: 16 }}>This is content for the "Following" tab.</Text>
               )}
           </View>

       </View>
    );
}
