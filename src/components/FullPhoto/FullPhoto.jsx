import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const FullPhoto = ({ route }) => {
    const height = route.params.height / 10,
        width = route.params.width / 10;

    return (
        <ScrollView contentContainerStyle={styles.fullPhotoWrapper}>
            <Image style={{ width, height }} source={{ uri: route.params.url }} />
            <Text style={styles.description}>{route.params.description || "No description"}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    fullPhotoWrapper: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    description: {
        marginTop: 20,
        paddingHorizontal: 20,
        fontSize: 18,
        letterSpacing: 1,
        textAlign: "center",
    }
});
export default FullPhoto;
