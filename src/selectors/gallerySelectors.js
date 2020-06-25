import { createSelector } from "reselect";

const _getPhotos = (state) => {
    return state.galleryPhotos.galleryPhotos;
};

export const getPhotos = createSelector(_getPhotos, (photos) => {
    return photos;
});
