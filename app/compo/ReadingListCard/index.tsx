import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ReadingListCard() {
    return (
        <View style={{ flex: 1, alignItems: 'center', padding: 10 }}> {/* Center card horizontally */}
            {/* Card Container */}
            <View style={{
                width: '100%', // Set card width to 80% of the parent container
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5, // For Android shadow
            }}>
                {/* User Info */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Ionicons name="person-circle" size={40} color="black" style={{ marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Username</Text>
                        <Text style={{ color: 'grey', fontSize: 14 }}>Reading List</Text>
                    </View>
                </View>

                {/* Info Row with lock icon, story count, and icons */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'grey', fontSize: 14 }}>4 stories</Text>
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

                {/* Image Row */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.imageStyle} />
                    <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.imageStyle} />
                    <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.imageStyle} />
                </View>
            </View>
        </View>
    )
}

const styles = {
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
};
