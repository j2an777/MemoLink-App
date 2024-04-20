import { useEffect, useState } from "react"
import { LinxFileData } from "../../../types/fileData"
import { arrayRemove, arrayUnion, collection, doc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { EmptyDialog, LinxBox, LinxContent, LinxImg, LinxListContainer, LinxMore, LinxNoteInfo, LinxNoteTag, LinxNoteTagItem, LinxShow, LinxShowBox, LinxTitle, LinxTopWrap, LinxUserInfo, UserAvatar, UserCreatedAt, UserMetaInfo, UserName, Wrapper } from "./HomeListStyles";
import { UserData } from "../../../types/userData";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { setDetail } from "../../../Store/DetailStore/detailSlice";
import SettingPopup from "../../Modal/SettingPopup/SettingPopup";

export default function HomeList() {
  const [linxFiles, setLinxFiles] = useState<LinxFileData[]>([]);
  const [linxMorePopup, setLinxMorePopup] = useState(false);
  const [commentCounts, setCommentCounts] = useState<{ [key: string]: number}>({});
  const [likeToggle, setLikeToggle] = useState<{ [key: string]: boolean }>({});
  const [jellyAnimation, setJellyAnimation] = useState<{ [key: string]: boolean }>({});
  const [likesCount, setLikesCount] = useState<{ [key: string]: number }>({});
  const [settingPopup, setSettingPopup] = useState(false);
  const [shareFile, setShareFile] = useState<LinxFileData>();

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
        const folderId = folderDoc.id;
        // files 필드 안에 있는 각 파일 검사
        folderData.files.forEach((file: LinxFileData) => {
          if (file.linx) {
            const userData = tempUsers.find((user) => user.username === folderData.username);
            
            if (userData) {
              tempLinxFiles.push({
                ...file,
                folderId,
                username: userData.username,
                avatarUrl: userData.avatarUrl,
                userId: userData.userId,
              });
            }
          }
        });
      });
      setLinxFiles(tempLinxFiles);
    }
    fetchLinxFiles();
  }, []);

  // 댓글 상태 변화에 대한 감지로 업데이트
  useEffect(() => {
    const unsubscribes: (() => void)[] = [];
    linxFiles.forEach((file) => {
      const unsubscribe = onSnapshot(doc(db, "comments", file.id), (doc) => {
        if (doc.exists()) {
          const newCount = doc.data().comments.length;
          setCommentCounts(prevCounts => ({ ...prevCounts, [file.id]: newCount }));
        }
      });

      unsubscribes.push(unsubscribe);
    });

    return () => {
      unsubscribes.forEach(unsubscribe => unsubscribe());
    };
  }, [linxFiles]);
  

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

  // 좋아요 변화 상태 감지에 대한 업데이트
  useEffect(() => {
    const unsubscribes: (() => void)[] = [];
    linxFiles.forEach((file) => {
      const unsubscribe = onSnapshot(doc(db, "likes", file.id), (doc) => {
        if (doc.exists()) {
          const likesUsers = doc.data().likesUser;
          setLikesCount(prevLikesCount => ({
            ...prevLikesCount,
            [file.id]: likesUsers.length
          }));
        }
      });
      unsubscribes.push(unsubscribe);
    });
  
    // cleanup function에 각 unsubscribe 함수 호출
    return () => {
      unsubscribes.forEach(unsub => unsub());
    };
  }, [linxFiles]);

  const onHandleLike = async (fileId: string) => {
    
    const user = auth.currentUser;
    if (!user) return;

    setLikeToggle(prevLikeToggle => ({
      ...prevLikeToggle,
      [fileId]: !prevLikeToggle[fileId]
    }));
    setJellyAnimation(prevJellyAnimation => ({
      ...prevJellyAnimation,
      [fileId]: true
    }));
    setTimeout(() => {
      setJellyAnimation(prevJellyAnimation => ({
        ...prevJellyAnimation,
        [fileId]: false
      }));
    }, 300);

    // likes 컬렉션 내 해당 id값 가진 문서 찾기
    const likesDocRef = doc(db,"likes", fileId);

    try {
      // 이미 좋아요가 되어있는 상태면 클릭시 해당 id값 삭제
      if (likeToggle[fileId]) {
        await updateDoc(likesDocRef, {
          likesUser: arrayRemove(user.uid)
        });
      // 좋아요가 안되어있는 상태면 클릭 시 id값 입력
      } else {
        await updateDoc(likesDocRef, {
          likesUser: arrayUnion(user.uid)
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onHandleSetting = (file: LinxFileData) => {
    if (file) {
      setShareFile(file);
      setSettingPopup(true);
    }
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
                <LinxMore onClick={() => onHandleSetting(file)}>
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
                <LinxShow>
                  <LinxShowBox>
                    <img
                      src={likeToggle[file.id] ? '/yeslike.svg' : '/nolike.svg'} 
                      onClick={() => onHandleLike(file.id)}
                      className={jellyAnimation[file.id] ? 'jelly' : ''}/>
                    <p>{likesCount[file.id] || 0}</p>
                  </LinxShowBox>
                  <LinxShowBox>
                    <img src="/comment.svg" onClick={() => onToggleMore(file, file.id)}/>
                    <p>{commentCounts[file.id] || 0}</p>
                  </LinxShowBox>
                </LinxShow>
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
      { settingPopup && shareFile && ( 
        <SettingPopup
          shareFile={shareFile}
          setSettingPopup={setSettingPopup}>
        </SettingPopup> 
      )}
    </Wrapper>
  );
}
