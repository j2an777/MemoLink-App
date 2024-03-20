import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "./folderStore/folderSlice";
import fileReducer from "./fileStore/fileSlice";
import searchReducer from "./searchStore/searchSlice";


export const store = configureStore({
    reducer: {
        folder: folderReducer,
        files: fileReducer,
        search: searchReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;