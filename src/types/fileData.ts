import { Timestamp } from "firebase/firestore";

export interface FileData {
    id: string;
    title: string;
    tags: string[];
    content : string;
    createdAt: Timestamp;
}

export interface NoteData extends FileData {
    marking : boolean;
}