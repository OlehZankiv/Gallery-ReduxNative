import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { galleryReducer } from "./reducers/galleryReducer";

const reducers = combineReducers({ galleryPhotos: galleryReducer });

export const store = createStore(reducers, applyMiddleware(thunk));
