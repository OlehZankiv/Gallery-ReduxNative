import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export const Pagination = ({ startPage = 1, getPhotos }) => {
    const [page, setPage] = useState(startPage);

    useEffect(() => {
        getPhotos(page);
    }, [page]);

    const backPage = () => {
        setPage(page - 1);
    };
    const nextPage = () => {
        setPage(page + 1);
    };

    return (
        <View style={styles.paginationWrapper}>
            <View style={styles.btn}>
                <Button title="Back" onPress={backPage} disabled={page === 1} />
            </View>
            <Text style={styles.page}>{page}</Text>
            <View style={styles.btn}>
                <Button title="Next" onPress={nextPage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    paginationWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 10,
        marginTop: 15,
    },
    btn: {
        width: 150,
    },
    page: {
        fontSize: 20,
    },
});
