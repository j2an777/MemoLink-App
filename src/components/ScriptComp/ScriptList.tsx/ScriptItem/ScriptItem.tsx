import { useEffect, useState } from "react";
import { ItemBottom, ItemDate, ItemMiddle, ItemScript, ItemStar, ItemTagsContainer, ItemTitle, ItemTop, ScriptItemContainer, Wrapper } from "./ScriptItemStyles";
import { auth, db } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NoteData } from "../../../../types/fileData";

interface sfName {
  selectedFolderName: string;
}

export default function ScriptItem({ selectedFolderName }: sfName) {

  const [notes, setNotes] = useState<NoteData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user || !selectedFolderName) return;

      const q = query(collection(db, "folders"),
                      where("userId", "==", user.uid),
                      where("fpName", "==", selectedFolderName));
      try {
        const querySnapshot = await getDocs(q);
        let files: NoteData[] = [];
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
                <ItemStar src="/star.svg" />
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
              </ItemBottom>
            </ScriptItemContainer>
          );
        })}
    </Wrapper>
  );
}
