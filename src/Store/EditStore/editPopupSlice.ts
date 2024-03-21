import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FileData } from "../../types/fileData";

interface EditPopupState {
    isOpen: boolean;
    editingNote: FileData | null;
}

const initialState: EditPopupState = {
    isOpen: false,
    editingNote: null,
};

export const editPopupSlice = createSlice({
    name: 'editPopup',
    initialState,
    reducers: {
        openPopup: (state, action: PayloadAction<FileData | null>) => {
            state.isOpen = true;
            state.editingNote = action.payload;
        },
        closePopup: (state) => {
            state.isOpen = false;
            state.editingNote = null;
        },
    },
});

export const { openPopup, closePopup } = editPopupSlice.actions;

export default editPopupSlice.reducer;