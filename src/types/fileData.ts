import { Timestamp } from "firebase/firestore";

export interface FileData {
    id: string;
    title: string;
    tags: string[];
    content : string;
    stars: boolean;
    createdAt: Timestamp;
}