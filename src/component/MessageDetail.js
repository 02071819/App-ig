import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HomeData from "../json/Home.json";

export default function MessageDetail({ Message }) {
    return (
        <View style={styles.container}>
            <View style={styles.LeftStyle}>
                <Image
                    style={styles.PhotoStyle}
                    source={{ uri: Message.PersonUrl }}
                />
                <View style={styles.ContentStyle}>
                    <Text style={styles.PersonIdStyle}>{Message.PersonId}</Text>
                    <Text style={styles.ContentGrayStyle}>{Message.Content}</Text>
                </View>
            </View>
            <View>
                <Image
                    style={styles.iconStyle01}
                    source={{ uri: HomeData.Icon[0].Camera }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 6,
        paddingLeft: 18,
        paddingRight: 18,
    },
    iconStyle01: {
        width: 24,
        height: 24,
    },
    PhotoStyle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#E6E6E6",
    },
    LeftStyle: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
    },
    ContentStyle: {
        marginLeft: 10,
    },
    PersonIdStyle: {
        fontSize: 14,
        marginBottom: 5,
    },
    ContentGrayStyle: {
        fontSize: 14,
        color: "#858585",
    }
});
