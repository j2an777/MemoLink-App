import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice ({
    name: "search",
    initialState: {
        searchFileName: '',
    },
    reducers: {
        setSearchFileName: (state, action) => {
            state.searchFileName = action.payload;
        }
    },
});

export const { setSearchFileName } = searchSlice.actions;
export default searchSlice.reducer;