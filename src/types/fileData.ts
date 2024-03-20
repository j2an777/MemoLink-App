import { Timestamp } from "firebase/firestore";

export interface FileData {
    id: string;
    title: string;
    tags: string[];
    content : string;
    stars: boolean;
    createdAt: Timestamp;
}

export interface FileState {
    files: FileData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error : string | null;
}