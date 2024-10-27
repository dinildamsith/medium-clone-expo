import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function Home () {
    return (
       <View>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginTop:52 }}>
               {/* Home Text */}
               <Text style={{ fontSize: 18, fontWeight:900 }}>Home</Text>

               {/* Bell Icon Button */}
               <TouchableOpacity onPress={() => console.log("Bell icon pressed")}>
                   <Ionicons name="notifications-outline" size={24} color="black" />
               </TouchableOpacity>
           </View>


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

                   {/* Inline Text Items with Buttons */}
                   <TouchableOpacity onPress={() => console.log("For you clicked")} style={{ marginRight: 15 }}>
                       <Text>For you</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={() => console.log("Following clicked")} style={{ marginRight: 15 }}>
                       <Text>Following</Text>
                   </TouchableOpacity>
               </ScrollView>
           </View>
       </View>
    );
}