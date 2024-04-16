import { useEffect, useRef, useState } from "react";
import Overlay from "../../Overlay/Overlay";
import { SpContainer, SpDelete, SpItem, SpWrapper } from "./SettingPopupStyles";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { LinxFileData } from "../../../types/fileData";

interface SettingPopupProps {
    shareFile: LinxFileData;
    setSettingPopup: (value: boolean) => void;
}

const SettingPopup: React.FC<SettingPopupProps> = ({ shareFile, setSettingPopup }) => {

    const boxRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [client, setClient] = useState('');

    useEffect(() => {
        const user = auth.currentUser;
        if (!user) return;

        setClient(user.uid);
    }, []);

    useEffect(() => {
        // handleClickOutside 함수 정의
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
          if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
            onToggleSP();
          }
        };
      
        // 이벤트 리스너 등록
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
      
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          document.removeEventListener("touchstart", handleClickOutside);
        };
      }, []);

    const onToggleSP = () => {
        setSettingPopup(false);
    };

    const toHandlePage = () => {
        navigate(`/mp/${shareFile.userId}`);
    };

    const sharePost = async () => {
        try {
            await navigator.share({
                title: shareFile.title,
                text: shareFile.content,
                url: `https://react-note-a4e85.web.app/script/${shareFile.id}`,
            });
        } catch (error) {
            console.error(error);
        }
    };

    // 업로드한 글 삭제 시 좋아요와 댓글에 대한 데이터도 다 삭제
    const onDeletePost = async () => {
        const ok = window.confirm('정말로 삭제하시겠습니까? 노트 내용과 좋아요, 댓글 모두 삭제가 됩니다.');
        if (ok) {
            try {
                const folderDocRef = doc(db, "folders", shareFile.folderId);
                const likesDocRef = doc(db, "likes", shareFile.id);
                const commentsDocRef = doc(db, "comments", shareFile.id);

                const fileToRemove = { 
                    content: shareFile.content,
                    createdAt: shareFile.createdAt,
                    id: shareFile.id,
                    imageUrl: shareFile.imageUrl,
                    linx: shareFile.linx,
                    noteColor: shareFile.noteColor,
                    stars: shareFile.stars,
                    tags: shareFile.tags,
                    textColor: shareFile.textColor,
                    title: shareFile.title
                };

                await updateDoc(folderDocRef, {
                    files: arrayRemove(fileToRemove)
                });
                await deleteDoc(likesDocRef);

                if (commentsDocRef) {
                    await deleteDoc(commentsDocRef);
                }

                onToggleSP();
            } catch (error) {
                console.error('게시글 삭제 중 오류 발생:', error);
            }
        }
    };

    return (
        <>
            <Overlay />
            <SpWrapper>
                <SpContainer ref={boxRef}>
                  {(shareFile.userId === client) ? <SpDelete onClick={() => onDeletePost()}>게시글 삭제</SpDelete> : null}
                  <SpItem onClick={toHandlePage}>계정 페이지 이동</SpItem>
                  <SpItem onClick={sharePost}>게시글 공유</SpItem>
                  <SpItem onClick={onToggleSP}>취소</SpItem>
                </SpContainer>
            </SpWrapper>
        </>
    )
}

export default SettingPopup;
