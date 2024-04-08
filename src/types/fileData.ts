
export interface FileData {
    id: string;
    title: string;
    tags: string[];
    content : string;
    stars: boolean;
    linx: boolean;
    textColor : string;
    noteColor : string;
    imageUrl : string;
    createdAt: string;
}

export interface LinxFileData extends FileData {
    username : string;
    avatarUrl: string;
    userId : string;
}

export interface LinxData extends FileData {
    import : boolean;
}

export interface FileState {
    files: FileData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error : string | null;
}

export interface LinxFileState {
    linxFiles: FileData[];
    userLinxFiles: FileData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | undefined;
}