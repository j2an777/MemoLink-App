import { useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { FilePlus, FolderTitle, FolderTop, NConfirm, NPopupBox, NTagInput, NTitleInput, NotePopupWrapper, TagBlock, TextContainer, Wrapper } from "./ScriptListStyles";
import { FpBack } from "../ScriptCompStyles";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ScriptItem from "./ScriptItem/ScriptItem";
import { FileData } from "../../../types/fileData";
import { Timestamp, arrayUnion, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import Overlay from "../../Overlay/Overlay";

function generateRandomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "list",

  "color",
  "background",

  "image",
  "blockquote",
  "code-block",
];

const modules = {
  toolbar: [
    [{ list: "ordered" }, { list: "bullet" }],
    [],
    ["italic", "underline", "strike"],
    [],
    [{ color: [] }, { background: [] }],
    [],
    ["image", "blockquote", "code-block"],
  ],
};

const ScriptList = () => {
  const [onNotePopup, setOnNotePopup] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteTags, setNoteTags] = useState<string[]>([]);
  const [textValue, setTextValue] = useState("");
  const [tempTagInput, setTempTagInput] = useState('');
  const [isTagActive, setIsTagActive] = useState(true);
  const [uploadLoading, setUploadLoading] = useState(false);

  const selectedFolderName = useAppSelector((state) => state.folder.selectedFolderName);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {name, value} } = e;
    if (name === "title") {
      setNoteTitle(value);
    } else if (name === "tags") {
      setTempTagInput(value);
    }
  };
  
  // On input blur, update the tags array
  const onBlurTagsInput = () => {
    if (tempTagInput.trim() !== '') {
      const newTagsArray = tempTagInput.split(' ').filter(tag => tag !== '');
      setNoteTags([...noteTags, ...newTagsArray]);
      setTempTagInput('');
    }
    
    if (noteTags.length > 0 || tempTagInput.trim() !== '') {
      setIsTagActive(false);
    }
  };

  const onFocusTagsInput = () => {
    setNoteTags([]);
    setIsTagActive(true);
  };

  // 태그 블록들 나오기 위한 함수
  const renderTagBlocks = () => {
    return noteTags.map((tag, index) => <TagBlock key={index}>{tag}</TagBlock>);
  };

  // 팝업창 띄우기 위한 + 버튼 함수
  const onPopupChange = () => {
    setOnNotePopup(!onNotePopup);
  };

  const togglePopup = () => {
    const ok = confirm("하던 작업을 멈추시겠습니까? 나가시면 해당 내용들은 삭제됩니다.");
    if (ok) {
      setOnNotePopup(!onNotePopup);
      setNoteTitle("");
      setTextValue("");
      setNoteTags([]);
      setIsTagActive(true);
    }
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 시작 전 로그인 확인
    const user = auth.currentUser;
    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }

    const fileData: FileData = {
      id: generateRandomId(),
      title: noteTitle,
      tags: noteTags,
      content: textValue,
      createdAt: Timestamp.now(),
    };
    setUploadLoading(true);
    
    try {
      // Firestore에서 선택된 폴더를 찾습니다.
      const foldersRef = collection(db, "folders");
      const q = query(foldersRef, where("fpName", "==", selectedFolderName), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        // 선택된 폴더의 문서 참조를 가져옵니다.
        const folderDocRef = querySnapshot.docs[0].ref;
        
        // files 배열에 새 파일 데이터를 추가합니다.
        await updateDoc(folderDocRef, {
          files: arrayUnion(fileData)
        });

        const ok = confirm("등록이 성공적으로 되었습니다!");
        if (ok) {
          // 업로드 성공 후 팝업을 닫고 폼의 상태를 초기화합니다.
          setOnNotePopup(false);
          setNoteTitle("");
          setTextValue("");
          setNoteTags([]);
          setIsTagActive(true);
          setUploadLoading(false);
        }

      } else {
        console.error('Selected folder does not exist or does not match fpName');
      }
    } catch(error) {
      console.error(error);
    }
  };
  

  return (
    <Wrapper>
      <FolderTop>
        <FolderTitle>
          {selectedFolderName}
        </FolderTitle>
        <FilePlus onClick={onPopupChange}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 25.996H26V35.996C26 36.5264 25.7893 37.0351 25.4142 37.4102C25.0391 37.7853 24.5304 37.996 24 37.996C23.4696 37.996 22.9609 37.7853 22.5858 37.4102C22.2107 37.0351 22 36.5264 22 35.996V25.996H12C11.4696 25.996 10.9609 25.7853 10.5858 25.4102C10.2107 25.0351 10 24.5264 10 23.996C10 23.4655 10.2107 22.9568 10.5858 22.5818C10.9609 22.2067 11.4696 21.996 12 21.996H22V11.996C22 11.4655 22.2107 10.9568 22.5858 10.5818C22.9609 10.2067 23.4696 9.99597 24 9.99597C24.5304 9.99597 25.0391 10.2067 25.4142 10.5818C25.7893 10.9568 26 11.4655 26 11.996V21.996H36C36.5304 21.996 37.0391 22.2067 37.4142 22.5818C37.7893 22.9568 38 23.4655 38 23.996C38 24.5264 37.7893 25.0351 37.4142 25.4102C37.0391 25.7853 36.5304 25.996 36 25.996Z" fill="#AAAAAA"/>
          </svg>
        </FilePlus>
      </FolderTop>
      <ScriptItem selectedFolderName = { selectedFolderName }/>
      {
        onNotePopup && (
          <>
            <Overlay />
            <NotePopupWrapper>
              <FpBack onClick={togglePopup}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.5621 36.4387C38.7015 36.5781 38.812 36.7435 38.8874 36.9256C38.9628 37.1077 39.0017 37.3029 39.0017 37.5C39.0017 37.6971 38.9628 37.8922 38.8874 38.0743C38.812 38.2564 38.7015 38.4219 38.5621 38.5612C38.4227 38.7006 38.2573 38.8111 38.0752 38.8866C37.8931 38.962 37.6979 39.0008 37.5008 39.0008C37.3037 39.0008 37.1086 38.962 36.9265 38.8866C36.7444 38.8111 36.579 38.7006 36.4396 38.5612L24.0008 26.1206L11.5621 38.5612C11.2806 38.8427 10.8989 39.0008 10.5008 39.0008C10.1028 39.0008 9.72105 38.8427 9.43958 38.5612C9.15812 38.2798 9 37.898 9 37.5C9 37.1019 9.15812 36.7202 9.43958 36.4387L21.8802 24L9.43958 11.5612C9.15812 11.2798 9 10.898 9 10.5C9 10.1019 9.15812 9.72019 9.43958 9.43873C9.72105 9.15727 10.1028 8.99915 10.5008 8.99915C10.8989 8.99915 11.2806 9.15727 11.5621 9.43873L24.0008 21.8794L36.4396 9.43873C36.721 9.15727 37.1028 8.99915 37.5008 8.99915C37.8989 8.99915 38.2806 9.15727 38.5621 9.43873C38.8435 9.72019 39.0017 10.1019 39.0017 10.5C39.0017 10.898 38.8435 11.2798 38.5621 11.5612L26.1215 24L38.5621 36.4387Z" fill="#ddd"/>
                </svg>
              </FpBack>
              <NPopupBox onSubmit={handleSubmit}>
                <NTitleInput 
                  required
                  type="text"
                  placeholder = "제목을 입력 하세요."
                  name="title"
                  value = {noteTitle}
                  onChange = {onChange}
                />
                {isTagActive ? (
                <NTagInput 
                  required
                  type="text"
                  placeholder="태그를 입력하세요."
                  name="tags"
                  value={tempTagInput}
                  onChange={onChange}
                  onBlur={onBlurTagsInput}
                  onFocus={onFocusTagsInput}
                />
                ) : (
                <div onClick={() => setIsTagActive(true)}>
                  {renderTagBlocks()}
                </div>
                )}
                <TextContainer>
                  <ReactQuill
                    formats={formats}
                    modules={modules}
                    theme="snow"
                    value={textValue}
                    onChange={setTextValue}/>
                </TextContainer>
                <NConfirm
                  type="submit"
                  value={uploadLoading ? "업로드 중..." : "확인"}/>
              </NPopupBox>
            </NotePopupWrapper>
          </>
        )
      }
    </Wrapper>
  )
}

export default ScriptList;
