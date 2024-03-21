import { useEffect, useState } from "react";
import { ProFileAvatarContainer, ProFileEdit, ProFileEditContainer, ProFileEditMessage, ProFileImg, ProFileMessage, ProFileName, ProFilePreview, ProFileUserEdit, ProFileUserEditLabel, Wrapper } from "./ProfileTopStyles";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function ProfileTop() {

    const [isEditing, setIsEditing] = useState(false);
    const [introduceValue, setIntroduceValue] = useState("");
    const [profileImgUrl, setProfileImgUrl] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const user = auth.currentUser;
        if (!user) return;
        // Firebase Firestore에서 사용자 데이터 가져오기
        const fetchUserData = async () => {
          const userDocRef = doc(db, "users", user.uid); // 'your-user-id'를 현재 사용자의 ID로 교체해야 함
          const docSnap = await getDoc(userDocRef);
    
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setProfileImgUrl(userData.avatarUrl || "/user.svg");
            setIntroduceValue(userData.introduce || "");
            setUserName(userData.username || "익명의 사용자");
          }
        };
    
        fetchUserData();
      }, []);

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntroduceValue(e.target.value);
    };

    // 업로드한 이미지에 대한 url를 string으로 보관
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const user = auth.currentUser;

        if (user && e.target.files && e.target.files[0]) {

            const file = e.target.files[0];
            
            const storageRef = ref(storage, `avatars/${user.uid}/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // 상태 변화 시 처리, 예를 들어 프로그레스 바 업데이트
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                  },
                (error) => {
                  // 업로드 중 에러 처리
                  console.error("Upload failed", error);
                },
                () => {
                  // 성공적으로 업로드한 후 파일 URL을 가져옴
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setProfileImgUrl(downloadURL);
                    // Firestore에 이미지 URL 저장
                    const userDocRef = doc(db, "users", user.uid);
                    setDoc(userDocRef, { avatarUrl: downloadURL }, { merge: true });
                  });
                }
              );
        }
    };

    const saveIntroduce = async () => {
        const user = auth.currentUser;
        if (!user) return;
        try {
          // Firestore에 자기소개 저장
          const userDocRef = doc(db, "users", user.uid);
          await setDoc(userDocRef, { introduce: introduceValue }, { merge: true });
          console.log("Introduce updated successfully");
        } catch (error) {
          console.error("Error saving introduce:", error);
        }
    };
      

    const toggleEdit = () => {
        if (isEditing) {
            saveIntroduce();
        }
        setIsEditing(!isEditing);
    };

    return (
        <Wrapper>
            <ProFileAvatarContainer>
                <ProFileImg>
                    <img src={profileImgUrl} />
                </ProFileImg>
                <ProFileUserEditLabel htmlFor="avatar-upload">
                    +
                    <ProFileUserEdit 
                        type="file" 
                        id="avatar-upload"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </ProFileUserEditLabel>
            </ProFileAvatarContainer>
            <ProFilePreview>
                <ProFileName>{userName}</ProFileName>
                <ProFileEditContainer>
                    {isEditing ? (
                        <ProFileEditMessage
                            type="text" 
                            placeholder="자기소개 글 입력하세요."
                            value={introduceValue}
                            onChange={handleMessageChange}
                        />
                    ) : (
                        <ProFileMessage>{introduceValue ? introduceValue : "자기소개 글 넣어주세요."}</ProFileMessage>
                    )}
                    <ProFileEdit onClick={toggleEdit}>{isEditing ? "확인" : "편집"}</ProFileEdit>
                </ProFileEditContainer>
            </ProFilePreview>
        </Wrapper>
    )
}