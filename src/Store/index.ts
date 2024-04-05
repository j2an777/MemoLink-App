import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "./FolderStore/folderSlice";
import fileReducer from "./FileStore/fileSlice";
import searchReducer from "./SearchStore/searchSlice";
import detailReducer from "./DetailStore/detailSlice";

export const store = configureStore({
    reducer: {
        folder: folderReducer,
        files: fileReducer,
        search: searchReducer,
        detail: detailReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;