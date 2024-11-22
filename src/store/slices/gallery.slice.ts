import { type AttachmentsType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateType = {
    attachments: AttachmentsType[];
    currentPicture: AttachmentsType | null;
    isOpen: boolean;
};

type ActionType = Omit<StateType, 'isOpen'>;

const initialState: StateType = {
    isOpen: false,
    attachments: [],
    currentPicture: null,
};

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        openGallery: (state, action: PayloadAction<ActionType>) => {
            state.isOpen = true;
            state.attachments = action.payload.attachments;
            state.currentPicture = action.payload.currentPicture;
        },
        closeGallery: state => {
            state.isOpen = false;
        },
        changeCurrentPic: (state, action: PayloadAction<AttachmentsType>) => {
            state.currentPicture = action.payload;
        },
    },
});

export const { closeGallery, openGallery, changeCurrentPic } = gallerySlice.actions;

export default gallerySlice.reducer;
