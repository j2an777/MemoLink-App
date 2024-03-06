/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MEMOLINX_APP_FIREBASE_API_KEY: string;
    readonly MEMOLINX_APP_FIREBASE_AUTH_DOMAIN: string;
    readonly MEMOLINX_APP_FIREBASE_PROJECT_ID: string;
    readonly MEMOLINX_APP_FIREBASE_STORAGE_BUCKET: string;
    readonly MEMOLINX_APP_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly MEMOLINX_APP_FIREBASE_APP_ID: string;
    readonly MEMOLINX_APP_FIREBASE_MEASUREMENT_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  