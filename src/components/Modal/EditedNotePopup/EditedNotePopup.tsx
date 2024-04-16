import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Overlay from "../../Overlay/Overlay";
import { FpBack } from "../../ScriptComp/ScriptCompStyles";
import { ColorBox, ColorLine, NConfirm, NPopupBox, NTagInput, NTitleInput, NotePopupWrapper, RightSettingBox, RightSettingImg, SetColorNote, SetColorPen, SetImgBox, SetImgButton, SetImgFileInput, SettingPopupWrapper, TagBlock, TextContainer, Wrap } from "../../ScriptComp/ScriptList.tsx/ScriptListStyles";
import { CSSProperties, useEffect, useState } from "react";
import { FileData } from "../../../types/fileData";
import { auth, db, storage } from "../../../firebase";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { fetchFiles } from "../../../Store/FileStore/fileSlice";
import { HexColorPicker } from "react-colorful";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface EditedNotePopupProps {
    editNote: FileData;
    setEditOpen: (open: boolean) => void;
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

  export default function EditedNotePopup({ editNote, setEditOpen }: EditedNotePopupProps) {
    
    const [noteTitle, setNoteTitle] = useState<string>('');
    const [noteTags, setNoteTags] = useState<string[]>([]);
    const [noteContent, setNoteContent] = useState<string>('');
    const [textColor, setTextColor] = useState('');
    const [noteColor, setNoteColor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isTagActive, setIsTagActive] = useState<boolean>(false);
    const [uploadLoading, setUploadLoading] = useState<boolean>(false);
    const [isSettingPopup, setIsSettingPopup] = useState(false);
    const [ncPopup, setNcPopup] = useState(false);
    const [pcPopup, setPcPopup] = useState(false);

    const selectedFolderName = useAppSelector((state) => state?.folder.selectedFolderName);
    const dispatch = useAppDispatch();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    // On component mount and whenever editingNote changes, update local state
    useEffect(() => {
        setNoteTitle(editNote.title);
        setNoteTags(editNote.tags);
        setNoteContent(editNote.content);
        setTextColor(editNote.textColor);
        setNoteColor(editNote.noteColor);
        setImageUrl(editNote.imageUrl);
    }, [editNote]);
  
    const togglePopup = () => {
      const ok = confirm('정말로 나가시겠습니까? 수정하신 내용들은 다 초기화됩니다.');
      
      if (ok) {
        setEditOpen(false);
      }
    };
  
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNoteTitle(e.target.value);
    };
  
    const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNoteTags(e.target.value.split(' '));
    };
  
    const handleContentChange = (value: string) => {
      setNoteContent(value);
    };
  
    const renderTagBlocks = () => {
      return noteTags.map((tag, index) => <TagBlock key={index}>{tag}</TagBlock>);
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setUploadLoading(true);
  
      try {
        const user = auth.currentUser;
        if (!user) {
          alert("로그인이 필요합니다.");
          return;
        }

        const folderRef = collection(db, "folders");
        const q = query(folderRef, where("fpName", "==", selectedFolderName), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const folderDocRef = querySnapshot.docs[0].ref;
            const updatedFiles = querySnapshot.docs[0].data().files.map((file: FileData) => {
                if (file.id === editNote.id) {
                    return {
                       ...file,
                        title: noteTitle,
                        tags: noteTags,
                        content: noteContent,
                        textColor: textColor,
                        noteColor : noteColor,
                        imageUrl: imageUrl,
                        createdAt: new Date().toISOString().split('T')[0],
                    };
                }
                return file;
            });

            await updateDoc(folderDocRef, { files: updatedFiles });

            dispatch(fetchFiles(selectedFolderName));
        } else {
            console.log('selected folder does not exist.');
        }
      } catch (error) {
        console.log(error);
      }
  
      setUploadLoading(false);
      togglePopup();
    };

    const toggleNoteColor = () => {
      setNcPopup(!ncPopup);
    };
  
    const togglePenColor = () => {
      setPcPopup(!pcPopup);
    };

    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const {files} = e.target;
      if (files && files.length > 0) {
          const file = files[0];
          const fileName = `${editNote.id}_${file.name}`;
          const storageRef = ref(storage, `images/${fileName}`);

          if (imageUrl) {
            const existingFileRef = ref(storage, imageUrl);
            await deleteObject(existingFileRef);
          }

          try {
            const uploadTask = await uploadBytes(storageRef, file);
            const imageUrl = await getDownloadURL(uploadTask.ref);
            setImageUrl(imageUrl);
          } catch (error) {
            console.error(error);
          }
      } else {
        setImageUrl('');
      }
    };

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);

    const colorPickerStyle: CSSProperties = {
      position: 'absolute',
      top: '50%',
      right: windowWidth > 768 ? '1%' : '35%',
      transform: windowWidth > 768 ? 'translate(-50%, -50%)' : 'translate(-20%, -50%)',
      width: '200px',
      height : '200px',
    };
  
    const colorPickerStyle2: CSSProperties = {
      position: 'absolute',
      top: windowWidth > 768 ? '90%' : '50%',
      right: '1%',
      transform: windowWidth > 768 ? 'translate(-50%, -50%)' : 'translate(-10%, -50%)',
      width: '200px',
      height : '200px',
    };

    const onHandleSetting = () => {
      setIsSettingPopup(!isSettingPopup);
    };
  
    return (
        <>
          <Overlay />
          <NotePopupWrapper isSettingPopup={isSettingPopup}>
            <FpBack onClick={togglePopup}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.5621 36.4387C38.7015 36.5781 38.812 36.7435 38.8874 36.9256C38.9628 37.1077 39.0017 37.3029 39.0017 37.5C39.0017 37.6971 38.9628 37.8922 38.8874 38.0743C38.812 38.2564 38.7015 38.4219 38.5621 38.5612C38.4227 38.7006 38.2573 38.8111 38.0752 38.8866C37.8931 38.962 37.6979 39.0008 37.5008 39.0008C37.3037 39.0008 37.1086 38.962 36.9265 38.8866C36.7444 38.8111 36.579 38.7006 36.4396 38.5612L24.0008 26.1206L11.5621 38.5612C11.2806 38.8427 10.8989 39.0008 10.5008 39.0008C10.1028 39.0008 9.72105 38.8427 9.43958 38.5612C9.15812 38.2798 9 37.898 9 37.5C9 37.1019 9.15812 36.7202 9.43958 36.4387L21.8802 24L9.43958 11.5612C9.15812 11.2798 9 10.898 9 10.5C9 10.1019 9.15812 9.72019 9.43958 9.43873C9.72105 9.15727 10.1028 8.99915 10.5008 8.99915C10.8989 8.99915 11.2806 9.15727 11.5621 9.43873L24.0008 21.8794L36.4396 9.43873C36.721 9.15727 37.1028 8.99915 37.5008 8.99915C37.8989 8.99915 38.2806 9.15727 38.5621 9.43873C38.8435 9.72019 39.0017 10.1019 39.0017 10.5C39.0017 10.898 38.8435 11.2798 38.5621 11.5612L26.1215 24L38.5621 36.4387Z" fill="#ddd"/>
                </svg>
            </FpBack>
            <Wrap>
              <NPopupBox onSubmit={handleSubmit}>
                <RightSettingBox>
                  <RightSettingImg src={isSettingPopup ? "/rightSetting.svg" : "/leftSetting.svg"} onClick={ onHandleSetting }/>
                </RightSettingBox>
                <NTitleInput
                  required
                  type="text"
                  placeholder="(필수)제목을 입력 하세요."
                  name="title"
                  value={noteTitle}
                  onChange={handleTitleChange}
                />
                <div onClick={() => setIsTagActive(true)}>
                  {noteTags.length > 0 && !isTagActive ? renderTagBlocks() : null}
                </div>
                {isTagActive || noteTags.length === 0 ? (
                  <NTagInput
                    type="text"
                    placeholder="(선택)태그를 입력하세요."
                    name="tags"
                    value={noteTags.join(' ')}
                    onChange={handleTagInputChange}
                    onBlur={() => setIsTagActive(false)}
                  />
                ) : null}
                <TextContainer>
                  <ReactQuill
                    formats={formats}
                    modules={modules}
                    theme="snow"
                    value={noteContent}
                    onChange={handleContentChange}
                  />
                </TextContainer>
                <NConfirm
                  type="submit"
                  value={uploadLoading ? "저장 중..." : "저장"}
                />
              </NPopupBox>
              <SettingPopupWrapper className={isSettingPopup ? 'active' : ''}>
                  <SetImgBox src={imageUrl || "/Logo2.svg"}/>
                  <SetImgButton htmlFor="file"></SetImgButton>
                  <SetImgFileInput
                    onChange={onFileChange}
                    type="file" 
                    id="file" 
                    accept="image/*"/>
                  <ColorLine></ColorLine>
                  <div className="colorWrap">
                    <SetColorNote stroke={noteColor}/>
                  </div>
                  <ColorBox src="/colorWheel.png" onClick={toggleNoteColor}/>
                  {ncPopup && <HexColorPicker 
                    color={noteColor} 
                    style={colorPickerStyle} 
                    onChange={setNoteColor}/>}
                  <ColorLine></ColorLine>
                  <div className="colorWrap">
                    <SetColorPen stroke={textColor} />
                  </div>
                  <ColorBox src="/colorWheel.png" onClick={togglePenColor}/>
                  {pcPopup && <HexColorPicker color={textColor} style={colorPickerStyle2} onChange={setTextColor}/>}
                </SettingPopupWrapper>
            </Wrap>
          </NotePopupWrapper>
        </>
    );
}
