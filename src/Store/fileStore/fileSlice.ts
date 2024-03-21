import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FileData, FileState } from "../../types/fileData";
import { auth, db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const initialState: FileState = {
    files: [],
    status: 'idle',
    error: null
};

export const fetchFiles = createAsyncThunk (
    'files/fetchFiles',
    async (selectedFolderName: string): Promise<FileData[]> => {
        const user = auth.currentUser;
        if (!user || !selectedFolderName) throw new Error('User not authenticated or folder name is missing');

        const q = query(collection(db, "folders"), where("userId", "==", user.uid), where("fpName", "==", selectedFolderName));

        const querySnapshot = await getDocs(q);
        let files: FileData[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (Array.isArray(data.files)) {
                files = [...files, ...data.files.map(file => ({
                    ...file, createdAt: file.createdAt
                }))];
            }
        });
        return files;
    }
);

const fileSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchFiles.pending, (state) => {
                state.status = 'loading';
            })
          .addCase(fetchFiles.fulfilled, (state, action) => {
                state.status ='succeeded';
                state.files = action.payload;
            })
          .addCase(fetchFiles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Could not fetch files';
            });
    },
});

export default fileSlice.reducer;