// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { FileData, LinxFileState } from "../../types/fileData";
// import { auth, db } from "../../firebase";
// import { collection, getDocs } from "firebase/firestore";


// const initialState: LinxFileState = {
//     linxFiles: [],
//     userLinxFiles: [],
//     status: 'idle',
//     error: null
// };

// export const fetchLinxFiles = createAsyncThunk(
//     'linxFiles/fetchLinxFiles',
//     async (_, { rejectWithValue }) => {
//         const user = auth.currentUser;
//         if (!user) return rejectWithValue('User not authenticated');

//         try {
//             const folderSnapshot = await getDocs(collection(db, "folders"));
//             const allLinxFiles: FileData[] = [];
//             const userLinxFiles: FileData[] = [];
//             const currentUserUid = user.uid;

//             folderSnapshot.forEach((folderDoc) => {
//                 const folderData = folderDoc.data();
//                 const files = folderData.files || [];

//                 files.forEach((file: FileData) => { // Temporarily use 'any' to bypass TypeScript checks
//                     if (file.linx) {
                
//                         const fileWithDate = {
//                             ...file,
//                             createdAt: file.createdAt,
//                         };
                        
//                         allLinxFiles.push(fileWithDate);

//                         if (folderData.userId === currentUserUid) {
//                             userLinxFiles.push(fileWithDate);
//                         }
//                     }
//                 });
//             });

//             console.log("Fetched Linx Files:", { allLinxFiles, userLinxFiles });
//             return { allLinxFiles, userLinxFiles };
//         } catch (error) {
//             if (error instanceof Error) {
//                 return rejectWithValue(error.message);
//             }

//             return rejectWithValue("An unexpected error occurred");
//         }
//     }
// );

// const linxFileSlice = createSlice({
//     name: 'linxFiles',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//           .addCase(fetchLinxFiles.pending, (state) => {
//                 state.status = 'loading';
//             })
//           .addCase(fetchLinxFiles.fulfilled, (state, action) => {
//                 state.status ='succeeded';
//                 console.log('Fulfilled State:', state.linxFiles, state.userLinxFiles);
                
//                 state.linxFiles = action.payload.allLinxFiles;
//                 state.userLinxFiles = action.payload.userLinxFiles;
//             })
//           .addCase(fetchLinxFiles.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.payload as string;
//             });
//     },
// });

// export default linxFileSlice.reducer;