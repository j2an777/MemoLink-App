import { useEffect, useState, useRef } from "react";
import { DeleteFolder, FPlogo, FPlusTitle, FolderItem, FolderName, FolderPlus, FpContainer, SSTitle, SSWrapper } from "./SidebarStyles";
import { auth, db } from "../../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useAppDispatch } from "../../../hooks/redux";
import { setSelectedFolderName } from "../../../Store/folderStore/folderSlice";

interface ScriptSidebarProps {
  openPopup: () => void;
}

interface Folder {
  id: string;
  fpName: string;
}

export default function ScriptSidebar( { openPopup }: ScriptSidebarProps ) {
  const [folders, setFolders] = useState<Folder[]>([]);
  const dispatch = useAppDispatch();
  const firstFolderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const q = query(collection(db, "folders"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const folderData = QuerySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Folder[];

      setFolders(folderData);
    });

    return () => unsubscribe();
  }, []);

  // 로드 시 folders 맨 처음 div를 선택
  useEffect(() => {
    if (folders.length > 0) {
      setTimeout(() => {
        firstFolderRef.current?.click();
      }, 0);
    }
  }, [folders]);

  const handleFolderClick = (fpName: string) => {
    dispatch(setSelectedFolderName(fpName));
  };

  return (
    <SSWrapper>
      <SSTitle>Folders</SSTitle>
      <FolderPlus onClick={openPopup}>
        <FPlogo>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M28 44H20C12.458 44 8.686 44 6.344 41.656C4 39.314 4 35.542 4 28V20C4 12.458 4 8.686 6.344 6.344C8.686 4 12.478 4 20.06 4C21.272 4 22.242 4 23.06 4.034C23.034 4.194 23.02 4.356 23.02 4.522L23 10.19C23 12.384 23 14.324 23.21 15.886C23.438 17.58 23.96 19.274 25.344 20.658C26.724 22.038 28.42 22.562 30.114 22.79C31.676 23 33.616 23 35.81 23H43.914C44 24.068 44 25.38 44 27.126V28C44 35.542 44 39.314 41.656 41.656C39.314 44 35.542 44 28 44Z" fill="#AAAAAA"/>
            <path d="M38.704 15.2342L30.784 8.10823C28.6768 6.21044 27.5555 5.19887 26.2859 4.64211C26.1578 4.58592 26.0175 4.6819 26.017 4.82181L26 10.0002C26 14.7142 26 17.0722 27.464 18.5362C28.928 20.0002 31.286 20.0002 36 20.0002H42.8323C42.9819 20.0002 43.0779 19.8423 43.0024 19.713C42.252 18.4269 40.9689 17.2738 38.704 15.2342Z" fill="#AAAAAA"/>
          </svg>
        </FPlogo>
        <FPlusTitle>
          <span>New Folder</span>
        </FPlusTitle>
      </FolderPlus>
      <FpContainer>
        {folders.map((folder, index) => (
          <FolderItem 
            key={folder.id}
            ref={index === 0 ? firstFolderRef : null}
            onClick={() => handleFolderClick(folder.fpName)}>
            <FolderName>
              {folder.fpName}
              <DeleteFolder>X</DeleteFolder>
            </FolderName>
          </FolderItem>
        ))}
      </FpContainer>
    </SSWrapper>
  )
}
