import { useEffect, useState } from "react"
import { LinxFileData } from "../../../types/fileData"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { LinxBox, LinxContent, LinxListContainer, LinxNoteInfo, LinxTitle, LinxUserInfo, UserAvatar, UserCreatedAt, UserMetaInfo, UserName, Wrapper } from "./HomeListStyles";
import { UserData } from "../../../types/userData";

export default function HomeList() {
  const [linxFiles, setLinxFiles] = useState<LinxFileData[]>([]);

  useEffect(() => {
    const fetchLinxFiles = async () => {
      const foldersSnapshot = await getDocs(collection(db, "folders"));
      const usersSnapshot = await getDocs(collection(db, "users"));

      const tempUsers: UserData[] = usersSnapshot.docs.map((userDoc) => ({
        ...userDoc.data() as UserData
      }));

      const tempLinxFiles: LinxFileData[] = [];
      foldersSnapshot.forEach((folderDoc) => {
        const folderData = folderDoc.data();
        // files 필드 안에 있는 각 파일 검사
        folderData.files.forEach((file: LinxFileData) => {
          if (file.linx === true) {
            const userData = tempUsers.find((user) => user.username === folderData.username);
            if (userData) {
              tempLinxFiles.push({
                ...file,
                username: userData.username,
                avatarUrl: userData.avatarUrl
              });
            }
          }
        });
      });

      setLinxFiles(tempLinxFiles);
    };
    fetchLinxFiles();
  }, []);

  const stripHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  
  return (
    <Wrapper>
      {linxFiles.length > 0 ? (
        <LinxListContainer>
          {[...linxFiles].reverse().map((file, index) => (
            <LinxBox key={index}>
              <LinxUserInfo>
                <UserAvatar src={file.avatarUrl || "/user.svg"} />
                <UserMetaInfo>
                  <UserName>{file.username || "Unknown"}</UserName>
                  <UserCreatedAt>{file.createdAt}</UserCreatedAt>
                </UserMetaInfo>
              </LinxUserInfo>
              <LinxNoteInfo>
                <LinxTitle>{file.title}</LinxTitle>
                <LinxContent>{truncate(stripHtml(file.content), 100)}</LinxContent>
              </LinxNoteInfo>
            </LinxBox>
          ))}
        </LinxListContainer>
      ) : (
        <p>No linx files found.</p>
      )}
    </Wrapper>
  );
}
