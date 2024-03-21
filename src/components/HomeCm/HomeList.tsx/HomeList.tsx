import { useEffect, useState } from "react"
import { FileData } from "../../../types/fileData"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { LinxBox, LinxContent, LinxListContainer, LinxNoteInfo, LinxTitle, LinxUserInfo, UserAvatar, UserCreatedAt, UserMetaInfo, UserName, Wrapper } from "./HomeListStyles";

export default function HomeList() {
  const [linxFiles, setLinxFiles] = useState<FileData[]>([]);

  useEffect(() => {
    const fetchLinxFiles = async () => {
      // folders 컬렉션에서 모든 문서 가져오기
      const querySnapshot = await getDocs(collection(db, "folders"));
      const tempLinxFiles: FileData[] = [];
      
      querySnapshot.forEach((doc) => {
        const folderData = doc.data();
        // files 필드 안에 있는 각 파일 검사
        folderData.files.forEach((file: FileData) => {
          if (file.linx === true) {
            tempLinxFiles.push(file);
          }
        });
      });

      setLinxFiles(tempLinxFiles);
    };

    fetchLinxFiles();
  }, []);
  
  return (
    <Wrapper>
      {linxFiles.length > 0 ? (
        <LinxListContainer>
          {[...linxFiles].reverse().map((file, index) => (
            <LinxBox key={index}>
              <LinxUserInfo>
                <UserAvatar src="/user.svg" />
                <UserMetaInfo>
                  <UserName>하승진</UserName>
                  <UserCreatedAt>{file.createdAt}</UserCreatedAt>
                </UserMetaInfo>
              </LinxUserInfo>
              <LinxNoteInfo>
                <LinxTitle>{file.title}</LinxTitle>
                <LinxContent>{file.content}</LinxContent>
              </LinxNoteInfo>
            </LinxBox>
          ))}
        </LinxListContainer>
      ) : (
        <p>No linx files found.</p>
      )}
    </Wrapper>
  )
}
