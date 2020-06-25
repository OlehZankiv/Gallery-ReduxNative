import React, { useEffect } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { getPhotos as getPhotosSelector } from "../../selectors/gallerySelectors";
import { GalleryPhoto } from "./GalleryPhoto";
import { FlatList } from "react-native-gesture-handler";
import { getPhotos } from "../../redux/reducers/galleryReducer";
import { Pagination } from "../common/Pagination";

const GalleryPhotoContainer = ({ navigation, getPhotos, photos }) => {
    useEffect(() => {
        getPhotos(1);
    }, []);

    return (
        <View>
            <View style={{ height: "90%" }}>
                <FlatList
                    horizontal={false}
                    data={photos}
                    renderItem={({ item }) => (
                        <GalleryPhoto
                            navigation={navigation}
                            url={item.url}
                            description={item.description}
                            height={item.height}
                            width={item.width}
                            userName={item.userName}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={{ height: "10%" }}>
                <Pagination getPhotos={getPhotos} />
            </View>
        </View>
    );
};

const mapStateToProps = (state) => ({
    photos: getPhotosSelector(state),
});

export default connect(mapStateToProps, { getPhotos })(GalleryPhotoContainer);
