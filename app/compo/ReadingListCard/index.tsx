import {TouchableOpacity, View, Image, Text} from "react-native";
import {useRouter} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ReadingListCard(props: any) {

    const router = useRouter();

    const navigateAllBookMarkPostPage = () => {
        router.push("/Screens/bookMarkAllPostView");
    }

    return (
        <TouchableOpacity onPress={() => navigateAllBookMarkPostPage()}>
            <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
                <View style={{
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 15,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5, // For Android shadow
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image
                            source={{ uri: props.profilePic || 'https://cdn.vectorstock.com/i/1000v/74/56/blue-user-icon-vector-42797456.avif' }}
                            style={styles.profileImage} // Add style for image
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{props.name}</Text>
                            <Text style={{ color: 'grey', fontSize: 14 }}>Reading List</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'grey', fontSize: 14 }}>{props.bookMarkCount} stories</Text>
                            <Ionicons name="lock-closed" size={16} color="grey" style={{ marginLeft: 5 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="chevron-down" size={20} color="grey" style={{ marginRight: 10 }} />
                            <Ionicons
                                name="ellipsis-horizontal"
                                size={20}
                                color="grey"
                                style={{ transform: [{ rotate: '90deg' }] }}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.imageStyle} />
                        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.imageStyle} />
                        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.imageStyle} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20, // Make it circular
        marginRight: 10,
    },
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
};
