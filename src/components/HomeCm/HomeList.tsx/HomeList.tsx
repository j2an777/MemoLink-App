import { useEffect, useState } from "react"
import { LinxFileData } from "../../../types/fileData"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { EmptyDialog, LinxBox, LinxContent, LinxImg, LinxListContainer, LinxMore, LinxNoteInfo, LinxNoteTag, LinxNoteTagItem, LinxTitle, LinxTopWrap, LinxUserInfo, UserAvatar, UserCreatedAt, UserMetaInfo, UserName, Wrapper } from "./HomeListStyles";
import { UserData } from "../../../types/userData";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { setDetail } from "../../../Store/DetailStore/detailSlice";

export default function HomeList() {
  const [linxFiles, setLinxFiles] = useState<LinxFileData[]>([]);
  const [linxMorePopup, setLinxMorePopup] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchLinxFiles = async () => {
      const foldersSnapshot = await getDocs(collection(db, "folders"));
      const usersSnapshot = await getDocs(collection(db, "users"));

      const tempUsers: UserData[] = usersSnapshot.docs.map((userDoc) => ({
        ...userDoc.data() as UserData,
        userId: userDoc.id
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
                avatarUrl: userData.avatarUrl,
                userId: userData.userId
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

  const onToggleMore = (file: LinxFileData, fileId: string) => {
    setLinxMorePopup(!linxMorePopup);
    dispatch(setDetail(file));
    navigate(`/script/${fileId}`);
  };

  const onHandleUser = (userId: string) => {
    navigate(`/mp/${userId}`);
  };
  
  return (
    <Wrapper>
      {linxFiles.length > 0 ? (
        <LinxListContainer>
          {[...linxFiles].reverse().map((file, index) => (
            <LinxBox key={index}>
              <LinxTopWrap>
                <LinxUserInfo>
                  <UserAvatar src={file.avatarUrl || "/user.svg"} onClick={() => onHandleUser(file.userId)}/>
                  <UserMetaInfo>
                    <UserName onClick={() => onHandleUser(file.userId)}>{file.username || "Unknown"}</UserName>
                    <UserCreatedAt>{file.createdAt}</UserCreatedAt>
                  </UserMetaInfo>
                </LinxUserInfo>
                <LinxMore onClick={() => onToggleMore(file, file.id)}>
                  <img src="/more.svg" />
                </LinxMore>
              </LinxTopWrap>
              <LinxNoteInfo>
                <LinxTitle textColor={file.textColor}>{file.title}</LinxTitle>
                <LinxNoteTag>
                  {file.tags.map((tag, index) => (
                    <LinxNoteTagItem key={index}>#{tag}</LinxNoteTagItem>
                  ))}
                </LinxNoteTag>
                {file.imageUrl ? <LinxImg src={file.imageUrl} />: null}
                <LinxContent textColor={file.textColor}>{truncate(stripHtml(file.content), 100)}</LinxContent>
              </LinxNoteInfo>
            </LinxBox>
          ))}
        </LinxListContainer>
      ) : (
        <EmptyDialog>
          <img src="/face.svg" />
          <span>로그인 후 이용바랍니다.</span>
        </EmptyDialog>
      )}
    </Wrapper>
  );
}
