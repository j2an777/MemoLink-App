import { createSlice } from "@reduxjs/toolkit";


const folderSlice = createSlice({
    name: "folder",
    initialState: {
        selectedFolderName: '',
    },
    reducers: {
        setSelectedFolderName: (state, action) => {
            state.selectedFolderName = action.payload;
        }
    },
});

export const { setSelectedFolderName } = folderSlice.actions;
export default folderSlice.reducer;