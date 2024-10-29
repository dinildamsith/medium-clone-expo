import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from 'react-native-paper';

export default function ArticleWriteView() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                {/*//----------------top area*/}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                        paddingVertical: 15,
                    }}
                >
                    {/* Close Button on the Left */}
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Grouping Preview Button and Three Dots */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Preview Button */}
                        <Button
                            mode="contained"
                            onPress={() => console.log('Pressed')}
                            buttonColor="black"
                            textColor="white"
                            style={{
                                width: 90, // Sets width to 100px
                                height: 40, // Sets height to 100px
                                borderRadius: 58,
                                alignItems: 'center',
                                justifyContent: 'center', // Centers the text inside
                            }}
                        >
                            Preview
                        </Button>


                        {/* Three Dots Button */}
                        <TouchableOpacity style={{ paddingHorizontal: 9 }}>
                            <Entypo name="dots-three-vertical" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/*//-------------------------*/}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
