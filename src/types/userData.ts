import { FileData } from "./fileData";

export interface UserData extends FileData {
    avatarUrl: string;
    introduce: string;
}