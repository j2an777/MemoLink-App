import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "./folderStore/folderSlice";


export const store = configureStore({
    reducer: {
        folder: folderReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;