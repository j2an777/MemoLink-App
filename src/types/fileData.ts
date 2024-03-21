
export interface FileData {
    id: string;
    title: string;
    tags: string[];
    content : string;
    stars: boolean;
    linx: boolean;
    createdAt: string;
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