import { useEffect, useState } from "react";
import { FileData } from "../../../types/fileData";
import { LinxFileBox, LinxFileContainer, LinxFileContent, LinxFileImg, LinxFileTagItem, LinxFileTags, LinxFileTitle, LinxTitle, NoImport, Wrapper } from "./ProfileBottomStyles";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import LoadingScreen from "../../Loader/LoadingScreen";

interface UserIdProps {
  userId: string;
}

const ProfileBottom: React.FC<UserIdProps> = ({ userId }) => {

  const [userLinxFiles, setUserLinxFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserLinxFiles = async () => {
      try {
        if (!userId) return;
        const folderSnapshot = await getDocs(collection(db, "folders"));

        const userLinxFiles: FileData[] = [];

        folderSnapshot.forEach((folderDoc) => {
          const folderData = folderDoc.data();
          if (folderData.userId === userId) {
            const files = folderData.files || [];

            files.forEach((file: FileData) => {
              if (file.linx) {
                const fileWithDate = {
                  ...file,
                  createdAt: file.createdAt,
                };
  
                userLinxFiles.push(fileWithDate);
              }
            });
          }
        });

        setUserLinxFiles(userLinxFiles);
      } catch (error) {
        console.error("Error fetching user linx files:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUserLinxFiles();
  }, [userId]);

  const stripHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <Wrapper>
      {loading ? (
        <LoadingScreen />
      ) : userLinxFiles.length === 0 ? (
        <NoImport>업로드한 노트가 없습니다.</NoImport>
      ) : (
        <>
          <LinxTitle>업로드 노트</LinxTitle>
          <LinxFileContainer>
            {userLinxFiles.map((file, index) => {
              const cleanContent = stripHtml(file.content);

              const truncate = (str: string, n: number) => {
                return str?.length > n ? str.substr(0, n - 1) + "..." : str;
              };

              return (
                <LinxFileBox noteColor={file.noteColor} key={index}>
                  <LinxFileTitle textColor={file.textColor}>{file.title}</LinxFileTitle>
                  <LinxFileTags>
                    {file.tags.map((tag, index) => (
                      <LinxFileTagItem key={index}>#{tag}</LinxFileTagItem>
                    ))}
                  </LinxFileTags>
                  <LinxFileImg>
                    <img src={file.imageUrl ? file.imageUrl : '/noImage.svg'} />
                  </LinxFileImg>
                  <LinxFileContent textColor={file.textColor} >{truncate(cleanContent, 70)}</LinxFileContent>
                </LinxFileBox>
              )
            })}
          </LinxFileContainer>
        </>
      )}
    </Wrapper>
  )
};

export default ProfileBottom;
