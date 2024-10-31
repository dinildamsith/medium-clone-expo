import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function EditorToolbar() {
    return (
        <View style={styles.tabContainer}>
            {/* Custom "Tt" Icon */}
            <TouchableOpacity style={styles.tab}>
                <Text style={styles.iconText}>T<Text style={styles.subText}>T</Text></Text>
            </TouchableOpacity>

            {/* Custom "Quotes" Icon */}
            <TouchableOpacity style={styles.tab}>
                <h6 style={styles.iconText}>,,</h6>
            </TouchableOpacity>

            {/* Bars Icon */}
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="bars" style={styles.icon} />
            </TouchableOpacity>

            {/* Link Icon */}
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="link" style={styles.icon} />
            </TouchableOpacity>

            {/* Ellipsis Icon */}
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="ellipsis-h" style={styles.icon} />
            </TouchableOpacity>

            {/* @ Symbol Icon */}
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="at" style={styles.icon} />
            </TouchableOpacity>

            {/* Code Bracket Icon */}
            <TouchableOpacity style={styles.tab}>
                <FontAwesome name="code" style={styles.icon} />
            </TouchableOpacity>

            {/* Photo Icon - Right-aligned */}
            <TouchableOpacity style={[styles.tab, styles.photoIcon]}>
                <FontAwesome name="image" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#f3f3f3',
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 62,
        width: '100%', // Ensures full-width container
    },
    tab: {
        alignItems: 'center',
        padding: 10,
    },
    iconText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },
    subText: {
        fontSize: 12,
        fontWeight: '400',
    },
    icon: {
        fontSize: 20,
        color: '#333',
    },
    photoIcon: {
        position: 'absolute', // Positions the Photo icon separately
        right: 0, // Aligns it flush to the right side
        padding: 10,
    },
});
