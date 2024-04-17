import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { BottomContainer, FpBack, FpConfirm, FpInput, FpPopupBox, FpPopupWrapper, SCompWrapper, TopContainer } from "./ScriptCompStyles";
import ScriptList from "./ScriptList.tsx/ScriptList";
import ScriptSidebar from "./ScriptSidebar/ScriptSidebar";
import ScriptTop from "./ScriptTop/ScriptTop";
import { auth, db } from "../../firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import Overlay from "../Overlay/Overlay";
import { useAppDispatch } from "../../hooks/redux";
import { setSelectedFolderName } from "../../Store/FolderStore/folderSlice";

export default function ScriptComp() {

  const [fpPopup, setFpPopup] = useState(false);
  const [fpName, setFpName] = useState("");
  const [folderMaking, setFolderMaking] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const dispatch = useAppDispatch();
  const boxRef = useRef<HTMLDivElement>(null);

  const resetDuplicate = () => {
    setIsDuplicate(false);
  };

  useEffect(() => {
    // handleClickOutside 함수 정의
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setFpPopup(prev => !prev);
        resetDuplicate();
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
  }, [fpPopup]);

  const onFpChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFpName(e.target.value);
  };

  const togglePopup = () => {
    setFpPopup(!fpPopup);
    setFpName("");
  };

  const onFolderMaking = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user || folderMaking || fpName === "") return;

    resetDuplicate();

    const q = query(
      collection(db, "folders"),
      where("userId", "==", user.uid),
      where("fpName", "==", fpName)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      try {
        setFolderMaking(true);
        await addDoc(collection(db, "folders"), {
          fpName: fpName,
          userId: user.uid,
          username: user.displayName || "Anonymous",
          files: [],
        });
  
        dispatch(setSelectedFolderName(fpName));
        togglePopup();
  
      } catch (error) {
        console.error(error);
        setFolderMaking(false);
      } finally {
        setFolderMaking(false);
        setFpName("");
      }
    } else {
      setIsDuplicate(true);
    }
  };

  return (
    <SCompWrapper>
      <TopContainer>
          <ScriptTop />
      </TopContainer>
      <BottomContainer>
          <ScriptSidebar openPopup = {togglePopup}/>
          <ScriptList />
      </BottomContainer>
      {fpPopup ? (
        <>
          <Overlay />
          <FpPopupWrapper ref={boxRef}>
            <FpBack onClick={togglePopup}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.5621 36.4387C38.7015 36.5781 38.812 36.7435 38.8874 36.9256C38.9628 37.1077 39.0017 37.3029 39.0017 37.5C39.0017 37.6971 38.9628 37.8922 38.8874 38.0743C38.812 38.2564 38.7015 38.4219 38.5621 38.5612C38.4227 38.7006 38.2573 38.8111 38.0752 38.8866C37.8931 38.962 37.6979 39.0008 37.5008 39.0008C37.3037 39.0008 37.1086 38.962 36.9265 38.8866C36.7444 38.8111 36.579 38.7006 36.4396 38.5612L24.0008 26.1206L11.5621 38.5612C11.2806 38.8427 10.8989 39.0008 10.5008 39.0008C10.1028 39.0008 9.72105 38.8427 9.43958 38.5612C9.15812 38.2798 9 37.898 9 37.5C9 37.1019 9.15812 36.7202 9.43958 36.4387L21.8802 24L9.43958 11.5612C9.15812 11.2798 9 10.898 9 10.5C9 10.1019 9.15812 9.72019 9.43958 9.43873C9.72105 9.15727 10.1028 8.99915 10.5008 8.99915C10.8989 8.99915 11.2806 9.15727 11.5621 9.43873L24.0008 21.8794L36.4396 9.43873C36.721 9.15727 37.1028 8.99915 37.5008 8.99915C37.8989 8.99915 38.2806 9.15727 38.5621 9.43873C38.8435 9.72019 39.0017 10.1019 39.0017 10.5C39.0017 10.898 38.8435 11.2798 38.5621 11.5612L26.1215 24L38.5621 36.4387Z" fill="#ddd"/>
              </svg>
            </FpBack>
            <FpPopupBox onSubmit={onFolderMaking}>
              <FpInput
                required
                type="text"
                placeholder = "폴더 이름 입력"
                value = {fpName}
                onChange = {onFpChange}
              />
              {isDuplicate ? <p>동일한 이름의 폴더가 있습니다.</p> : null}
              <FpConfirm
                type="submit"
                value={folderMaking ? "생성 중..." : "확인"}/>
            </FpPopupBox>
          </FpPopupWrapper>
        </>
      ) : null}
    </SCompWrapper>
  )
}