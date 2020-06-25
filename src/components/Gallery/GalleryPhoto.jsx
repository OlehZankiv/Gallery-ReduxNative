import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const GalleryPhoto = ({ navigation, description, url, userName, height, width }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation && navigation.navigate("FullPhoto", { url, userName, height, width, description })}
        >
            <View style={styles.photoWrapper}>
                <Image style={styles.photo} source={{ uri: url }} />
                <View style={styles.userNameWrapper}>
                    <Text style={styles.userName}>{userName}</Text>
                </View>
            </View>
            <Text style={styles.description}>{description || "No description"}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    photoWrapper: {
        width: "95%",
        height: 300,
        flexDirection: "row",
        alignSelf: "center",
        marginVertical: 5,
    },
    photo: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    userNameWrapper: {
        borderRadius: 10,
        position: "absolute",
        padding: 10,
        bottom: 10,
        right: 10,
        backgroundColor: "rgba(255, 255, 255, 0.8);",
    },
    userName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    description: {
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 20,
        padding: 7,
        maxHeight: 77,
        overflow: "hidden",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#bababa",
        backgroundColor: "#ededed",
        color: "#2b2b2b",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 16,
        letterSpacing: 1,
    },
});
