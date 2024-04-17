import { useNavigate } from "react-router-dom";
import Overlay from "../../Overlay/Overlay";
import { CommentContent, CommentCreatedAt, CommentRight, CommentUserAvatar, CommentUserName, CommentUserSubInfo, LnpBack, LnpBox, LnpComment, LnpCommentInput, LnpCommentPlus, LnpCommentSend, LnpCommentUser, LnpContainer, LnpContent, LnpContentBox, LnpCreatedAt, LnpImg, LnpInfo, LnpTagItem, LnpTags, LnpTitle, LnpUserAvatar, LnpUserBox, LnpUserName, LnpUserSubInfo, UserCommentBox } from "./ListNotePopupStyles";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { clearDetail } from "../../../Store/DetailStore/detailSlice";
import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../../../firebase";
import { arrayUnion, doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { commentData } from "../../../types/commentData";
import { UserData } from "../../../types/userData";

const ListNotePopup = () => {
  const navigate = useNavigate();
  const file = useAppSelector(state => state.detail.selectedFile);
  const dispatch = useAppDispatch();
  const [userAvartarUrl, setUserAvartarUrl] = useState('');
  const [userInfo, setUserInfo] = useState<UserData | null>(null);

  const fileId = file?.id;

  const [comments, setComments] = useState<commentData[]>([]);
  const [commentValue, setCommentValue] = useState('');

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const fetchCurrentUserInfo = async () => {
      const user = auth.currentUser;
      if (!user || userInfo) return ;
  
      try {
        const userRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userRef);
  
        if (docSnap.exists()) {
          const userData = docSnap.data() as UserData;
          setUserInfo(userData);
          setUserAvartarUrl(userData.avatarUrl || "/user.svg");
        } else {
          console.log('No such user!');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCurrentUserInfo();
    
  }, []);

  useEffect(() => {    
    if (fileId) {
      const unsubscribe = onSnapshot(doc(db, "comments", fileId), (doc) => {
        if (doc.exists()) {
          setComments(doc.data().comments || []);
        }
      });

      return () => unsubscribe(); // 컴포넌트 언마운트 시 구독 해제
    }
  }, [fileId]);

  const handleBackClick = (e: React.MouseEvent | TouchEvent) => {
    e.stopPropagation();
    dispatch(clearDetail());
    navigate(-1);
  };

  // 코멘트 db에 저장
  const addComment = async (fileId: string, comment: string) => {
    if (!userInfo) return;

    const commentsRef = doc(db, 'comments', fileId);
    const currentDate = new Date();
    const createdAt = currentDate.toISOString().split('T')[0];

    await setDoc(commentsRef, {
      comments: arrayUnion({
        username: userInfo.username,
        avatarUrl: userInfo.avatarUrl,
        comment: comment,
        createdAt: createdAt,
        id: file?.id,
      })
    }, { merge: true });
  };

  // 댓글 입력 핸들러
  const handleAddComment = () => {
    if (commentValue.trim() && file?.id) {
      addComment(file.id, commentValue.trim());
      setCommentValue(""); // 입력 필드 초기화
    }
  };

  const onHandleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const stripHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  useEffect(() => {
    // handleClickOutside 함수 정의
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        navigate(-1);
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
  }, [handleBackClick]);

  return (
    <>
      <Overlay />
      <LnpContainer>
        <LnpBack onClick={(e) => handleBackClick(e)}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.5621 36.4387C38.7015 36.5781 38.812 36.7435 38.8874 36.9256C38.9628 37.1077 39.0017 37.3029 39.0017 37.5C39.0017 37.6971 38.9628 37.8922 38.8874 38.0743C38.812 38.2564 38.7015 38.4219 38.5621 38.5612C38.4227 38.7006 38.2573 38.8111 38.0752 38.8866C37.8931 38.962 37.6979 39.0008 37.5008 39.0008C37.3037 39.0008 37.1086 38.962 36.9265 38.8866C36.7444 38.8111 36.579 38.7006 36.4396 38.5612L24.0008 26.1206L11.5621 38.5612C11.2806 38.8427 10.8989 39.0008 10.5008 39.0008C10.1028 39.0008 9.72105 38.8427 9.43958 38.5612C9.15812 38.2798 9 37.898 9 37.5C9 37.1019 9.15812 36.7202 9.43958 36.4387L21.8802 24L9.43958 11.5612C9.15812 11.2798 9 10.898 9 10.5C9 10.1019 9.15812 9.72019 9.43958 9.43873C9.72105 9.15727 10.1028 8.99915 10.5008 8.99915C10.8989 8.99915 11.2806 9.15727 11.5621 9.43873L24.0008 21.8794L36.4396 9.43873C36.721 9.15727 37.1028 8.99915 37.5008 8.99915C37.8989 8.99915 38.2806 9.15727 38.5621 9.43873C38.8435 9.72019 39.0017 10.1019 39.0017 10.5C39.0017 10.898 38.8435 11.2798 38.5621 11.5612L26.1215 24L38.5621 36.4387Z" fill="#ddd"/>
          </svg>
        </LnpBack>
        <LnpBox ref={boxRef}>
          <LnpImg>
            <img src={file?.imageUrl} />
          </LnpImg>
          <LnpInfo>
            <LnpUserBox>
              <LnpUserAvatar src={file?.avatarUrl} />
              <LnpUserSubInfo>
                <LnpUserName>{file?.username}</LnpUserName>
                <LnpCreatedAt>{file?.createdAt}</LnpCreatedAt>
              </LnpUserSubInfo>
            </LnpUserBox>
            <LnpContentBox>
              <LnpTitle>{file?.title}</LnpTitle>
              <LnpTags>
                {file?.tags.map((tag, index) => (
                    <LnpTagItem key={index}>#{tag}</LnpTagItem>
                ))}
              </LnpTags>
              <LnpContent>{file?.content ? stripHtml(file.content) : ''}</LnpContent>
              <LnpComment>
              {comments.map((comment, index) => (
                <UserCommentBox key={index}>
                  <CommentUserAvatar>
                    <img src={comment.avatarUrl} />
                  </CommentUserAvatar>
                  <CommentRight>
                    <CommentUserSubInfo>
                      <CommentUserName>{comment.username}</CommentUserName>
                      <CommentCreatedAt>{comment.createdAt}</CommentCreatedAt>
                    </CommentUserSubInfo>
                    <CommentContent>{comment.comment}</CommentContent>
                  </CommentRight>
                </UserCommentBox>
              ))}
              </LnpComment>
              <LnpCommentPlus>
                <LnpCommentUser src={userAvartarUrl} />
                <LnpCommentInput
                  type="text"
                  placeholder="댓글 입력"
                  value={commentValue}
                  onChange={onHandleComment}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}/>
                <LnpCommentSend onClick={handleAddComment}>
                  <img src="/send.svg" />
                </LnpCommentSend>
              </LnpCommentPlus>
            </LnpContentBox>
          </LnpInfo>
        </LnpBox>
      </LnpContainer>
    </>
  )
}

export default ListNotePopup;
