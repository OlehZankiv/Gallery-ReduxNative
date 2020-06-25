export const photosGalleryApi = {
    getPhotos(page) {
        return fetch(_getUrl("photos/", "page=" + page)).then((response) => response.json());
    },
};

const _getUrl = (path, setData = "") => {
    const amp = !!setData ? "&" : "";
    return `https://api.unsplash.com/${path}?client_id=HgUFQgqIEW38BjboNRJGbB8jZYx93tSsqvXZ365k398${amp + setData}`;
};
