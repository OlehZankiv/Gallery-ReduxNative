import { photosGalleryApi } from "../../api/api";

const GET_PHOTOS = "galleryReducer/GET_PHOTOS";

const initialState = {
    galleryPhotos: [],
};

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
            const newPhotos = action.photos.map((photo) => ({
                url: photo.urls.full,
                description: photo.alt_description,
                userName: photo.user.name,
                height: photo.height,
                width: photo.width,
                id: photo.id,
            }));
            return {
                ...state,
                galleryPhotos: [...newPhotos],
            };

        default:
            return state;
    }
};

const getPhotosAC = (photos) => ({
    type: GET_PHOTOS,
    photos,
});

export const getPhotos = (page) => async (dispatch) => {
    const data = await photosGalleryApi.getPhotos(page);
    dispatch(getPhotosAC(data));
};
