import { useEffect, useState } from "react";
import { ItemBottom, ItemDate, ItemDelete, ItemMiddle, ItemScript, ItemStar, ItemTagsContainer, ItemTitle, ItemTop, ScriptItemContainer, Wrapper } from "./ScriptItemStyles";
import { auth, db } from "../../../../firebase";
import { arrayRemove, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { FileData } from "../../../../types/fileData";

interface sfName {
  selectedFolderName: string;
}

export default function ScriptItem({ selectedFolderName }: sfName) {

  const [notes, setNotes] = useState<FileData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user || !selectedFolderName) return;

      const q = query(collection(db, "folders"),
                      where("userId", "==", user.uid),
                      where("fpName", "==", selectedFolderName));
      try {
        const querySnapshot = await getDocs(q);
        let files: FileData[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if(Array.isArray(data.files)) {
            files = [...files, ...data.files];
          }
        });
        setNotes(files);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedFolderName]);

  const stripHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const onHandleDoc = async (noteId: string, e: React.MouseEvent) => {
    e.preventDefault();

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
        const noteToDelete = notes.find(note => note.id === noteId);

          if (noteToDelete) {
            await updateDoc(folderDocRef, {
              files: arrayRemove(noteToDelete)
          });

          setNotes(notes.filter(note => note.id !== noteId));
        }
      }
    }
  };

  const onHandleStar = async (noteId: string, currentStarValue: boolean) => {
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
  
        // 로컬 상태 업데이트
        setNotes(prevNotes =>
          prevNotes.map(note =>
            note.id === noteId ? { ...note, stars: !currentStarValue } : note
          )
        );
      } else {
        console.log("No such folder!");
      }
    } catch (error) {
      console.error("Error updating stars: ", error);
    }
  };
  

  return (
    <Wrapper>
        {notes.map((note, index) => {
          // 'createdAt'이 유효한 날짜인지 확인합니다.
          const cleanContent = stripHtml(note.content);
          const date = note.createdAt.toDate();
          const dateStr = date.toLocaleDateString();

          return (
            <ScriptItemContainer key={ index }>
              <ItemTop>
                <ItemTitle>{ note.title }</ItemTitle>
                <ItemStar
                  src={ note.stars ? "/starFill.svg" : "/star.svg" }
                  onClick={() => onHandleStar(note.id, note.stars)} />
              </ItemTop>
              <ItemMiddle>
                <ItemScript>{ cleanContent }</ItemScript>
                <ItemTagsContainer>
                  { note.tags.map((tag, tagIndex) => (
                    <span key={ tagIndex }>{ tag }</span>
                  )) }
                </ItemTagsContainer>
              </ItemMiddle>
              <ItemBottom>
                <ItemDate>{ dateStr }</ItemDate>
                <ItemDelete onClick={(e) => onHandleDoc(note.id, e)}>삭제</ItemDelete>
              </ItemBottom>
            </ScriptItemContainer>
          );
        })}
    </Wrapper>
  );
}
