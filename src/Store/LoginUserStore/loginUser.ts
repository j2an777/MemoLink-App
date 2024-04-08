import { createSlice } from "@reduxjs/toolkit";


const loginUserSlice = createSlice({
    name: "userId",
    initialState: {
        userId: '',
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        }
    },
});

export const { setUserId } = loginUserSlice.actions;
export default loginUserSlice.reducer;