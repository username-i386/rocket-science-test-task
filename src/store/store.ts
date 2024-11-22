import { combineReducers, configureStore } from '@reduxjs/toolkit/react';
import chatReducer from './slices/chat.slice';
import galleryReducer from './slices/gallery.slice';

const rootReducer = combineReducers({
    chat: chatReducer,
    gallery: galleryReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
