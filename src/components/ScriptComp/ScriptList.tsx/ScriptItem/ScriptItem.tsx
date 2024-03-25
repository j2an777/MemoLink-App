import { useEffect, useState } from "react";
import { ItemBottom, ItemDate, ItemDelete, ItemEdit, ItemMiddle, ItemScript, ItemStar, ItemTagsContainer, ItemTitle, ItemTop, ItemUpdateBox, ScriptItemContainer, Wrapper } from "./ScriptItemStyles";
import { auth, db } from "../../../../firebase";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { FileData } from "../../../../types/fileData";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { fetchFiles } from "../../../../Store/FileStore/fileSlice";
import SelectedNotePopup from "../../../Modal/SelectedNotePopup/SelectedNotePopup";
import Overlay from "../../../Overlay/Overlay";
import EditedNotePopup from "../../../Modal/EditedNotePopup/EditedNotePopup";

interface ScriptItemProps {
  selectedFolderName: string;
  isStarActive : boolean;
}

export default function ScriptItem({ selectedFolderName, isStarActive }: ScriptItemProps) {

  const { files } = useAppSelector(state => state.files);
  const searchFileName = useAppSelector(state => state.search.searchFileName);
  const dispatch = useAppDispatch();
  const [isNotePopup, setIsNotePopup] = useState(false);
  const [selectedNote, setSelectedNote] = useState<FileData | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [editNote, setEditNote] = useState<FileData | null>(null);

  useEffect(() => {
    if (selectedFolderName) {
      dispatch(fetchFiles(selectedFolderName));
    }
  }, [dispatch, selectedFolderName]);

  const stripHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const onHandleDoc = async (noteId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const user = auth.currentUser;
    if (!user) return;

    const ok = confirm("정말로 해당 파일을 삭제하시겠습니까?");
    if (ok) {
      const q = query(collection(db, "folders"),
                    where("userId", "==", user.uid),
                    where("fpName", "==", selectedFolderName));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const folderDocRef = querySnapshot.docs[0].ref;

        // 필터링으로 선택한 파일 제외 나머지만 새로운 배열에 생성
        const newFilesArray = files.filter(file => file.id !== noteId);
        
        // 새로 생성한 배열을 업데이트
        await updateDoc(folderDocRef, {
          files: newFilesArray
        });
        
        dispatch(fetchFiles(selectedFolderName));
      }
    }
  };

  const onHandleStar = async (noteId: string, currentStarValue: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    // 현재 사용자와 선택된 폴더 이름으로 쿼리를 생성합니다.
    const foldersQuery = query(
      collection(db, "folders"),
      where("userId", "==", auth.currentUser?.uid),
      where("fpName", "==", selectedFolderName)
    );
  
    try {
      // 쿼리를 실행하여 폴더의 문서 스냅샷을 얻습니다.
      const querySnapshot = await getDocs(foldersQuery);
  
      // 쿼리 결과가 비어있지 않다면 해당 폴더 문서에 대한 참조를 얻고 업데이트 합니다.
      if (!querySnapshot.empty) {
        // 폴더 문서에 대한 참조를 얻습니다.
        const folderDocRef = querySnapshot.docs[0].ref;
        
        // 폴더 데이터에서 현재 노트를 찾아 stars 값을 업데이트합니다.
        const updatedFiles = querySnapshot.docs[0].data().files.map((file: FileData) => {
          if (file.id === noteId) {
            // 현재 stars 값의 반대로 업데이트합니다.
            return { ...file, stars: !currentStarValue };
          }
          return file;
        });
  
        // 업데이트된 파일 배열로 폴더 문서를 업데이트합니다.
        await updateDoc(folderDocRef, { files: updatedFiles });

        dispatch(fetchFiles(selectedFolderName));
      } else {
        console.log("No such folder!");
      }
    } catch (error) {
      console.error("Error updating stars: ", error);
    }
  };

  const handleNoteClick = (note: FileData) => {
    setSelectedNote(note);
    setIsNotePopup(true);
  };

  const closePopup = () => {
    setIsNotePopup(false);
    setSelectedNote(null);
  };

  const filteredNotes = files
    .filter(note => !isStarActive || note.stars)
    .filter(note => note.title.toLowerCase().includes(searchFileName.toLowerCase()));

  const handleEditClick = (note: FileData, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setEditNote(note);
    setEditOpen(true);
  };
  
  return (
    <Wrapper>
        {filteredNotes.map((note, index) => {
          // 'createdAt'이 유효한 날짜인지 확인합니다.
          const cleanContent = stripHtml(note.content);

          const truncate = (str: string, n: number) => {
            return str?.length > n ? str.substr(0, n - 1) + "..." : str;
          };

          return (
            <ScriptItemContainer key={ index } onClick={() => handleNoteClick(note)}>
              <ItemTop>
                <ItemTitle>{ truncate(note.title, 10) }</ItemTitle>
                <ItemStar
                  src={ note.stars ? "/starFill.svg" : "/star.svg" }
                  onClick={(e) => onHandleStar(note.id, note.stars, e)} />
              </ItemTop>
              <ItemMiddle>
                <ItemScript>{ truncate(cleanContent, 100) }</ItemScript>
                <ItemTagsContainer>
                  { note.tags.map((tag, tagIndex) => (
                    <span key={ tagIndex }>{ tag }</span>
                  )) }
                </ItemTagsContainer>
              </ItemMiddle>
              <ItemBottom>
                <ItemDate>{ note.createdAt }</ItemDate>
                <ItemUpdateBox>
                  <ItemEdit onClick={(e) => handleEditClick(note, e)}>수정</ItemEdit>
                  <ItemDelete onClick={(e) => onHandleDoc(note.id, e)}>삭제</ItemDelete>
                </ItemUpdateBox>
              </ItemBottom>
            </ScriptItemContainer>
          );
        })}
        {isNotePopup && selectedNote && (
          <>
            <Overlay />
            <SelectedNotePopup note={selectedNote} onClose={closePopup} />
          </>
        )}
        {editOpen && editNote && (
          <EditedNotePopup 
            editNote={editNote} 
            setEditOpen={setEditOpen}
          />
        )}
    </Wrapper>
  );
}
