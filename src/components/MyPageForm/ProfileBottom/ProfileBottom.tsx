import { useEffect, useState } from "react";
import { FileData } from "../../../types/fileData";
import { LinxFileBox, LinxFileContainer, LinxFileContent, LinxFileTitle, LinxTitle, NoImport, Wrapper } from "./ProfileBottomStyles";
import { auth, db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function ProfileBottom() {

  const [userLinxFiles, setUserLinxFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserLinxFiles = async () => {
      try {
        const currentUserUid = auth.currentUser?.uid;
        const folderSnapshot = await getDocs(collection(db, "folders"));

        const allLinxFiles = [];
        const userLinxFiles: FileData[] = [];

        folderSnapshot.forEach((folderDoc) => {
          const folderData = folderDoc.data();
          const files = folderData.files || [];

          files.forEach((file: FileData) => {
            if (file.linx) {
              const fileWithDate = {
                ...file,
                createdAt: file.createdAt,
              };

              allLinxFiles.push(fileWithDate);

              if (folderData.userId === currentUserUid) {
                userLinxFiles.push(fileWithDate);
              }
            }
          });
        });

        setUserLinxFiles(userLinxFiles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user linx files:", error);
        setLoading(false);
      }
    };

    fetchUserLinxFiles();
  }, []);

  const stripHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <Wrapper>
      {loading ? (
        <div>Loading...</div>
      ) : userLinxFiles.length === 0 ? (
        <NoImport>업로드한 노트가 없습니다.</NoImport>
      ) : (
        <>
          <LinxTitle>업로드 노트</LinxTitle>
          <LinxFileContainer>
            {userLinxFiles.map((file, index) => (
              <LinxFileBox key={index}>
                <LinxFileTitle>{file.title}</LinxFileTitle>
                <LinxFileContent>{stripHtml(file.content)}</LinxFileContent>
              </LinxFileBox>
            ))}
          </LinxFileContainer>
        </>
      )}
    </Wrapper>
  )
}
