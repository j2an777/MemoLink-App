import { createSlice } from "@reduxjs/toolkit";
import { LinxFileData } from "../../types/fileData";

interface DetailState {
    selectedFile: LinxFileData | null;
}

const initialState: DetailState = {
    selectedFile: null,
};

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        setDetail: (state, action) => {
            state.selectedFile = action.payload;
        },
        clearDetail: (state) => {
            state.selectedFile = null;
        },
    }
});
export const { setDetail, clearDetail } = detailSlice.actions;

export default detailSlice.reducer;