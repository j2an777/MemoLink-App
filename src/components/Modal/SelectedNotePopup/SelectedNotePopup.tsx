import { collection, doc, getDocs, increment, query, updateDoc, where } from 'firebase/firestore';
import { FileData } from '../../../types/fileData';
import { FpBack } from '../../ScriptComp/ScriptCompStyles';
import { PcContentBox, PcTagBox, PcTagContainer, PcTitleBox, PopupContent, SaveBtn, Wrapper } from './SelectedNpStyles';
import { auth, db } from '../../../firebase';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchFiles } from '../../../Store/FileStore/fileSlice';

interface SelectedNotePopupProps {
  note: FileData;
  onClose: () => void;
}

const SelectedNotePopup: React.FC<SelectedNotePopupProps> = ({ note, onClose }) => {

  const dispatch = useAppDispatch();

  const stripHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const selectedFolderName = useAppSelector((state) => state?.folder.selectedFolderName);

  const onHandleLinx = async (noteId: string, currentLinxValue: boolean, e: React.MouseEvent) => {
    e.preventDefault();

    const user = auth.currentUser;

    if (!user) return;

    const foldersQuery = query(
      collection(db, "folders"),
      where("userId", "==", auth.currentUser?.uid),
      where("fpName", "==", selectedFolderName)
    );

    try {
      const querySnapshot = await getDocs(foldersQuery);

      if(!querySnapshot.empty) {

        const folderDocRef = querySnapshot.docs[0].ref;

        const updatedFiles = querySnapshot.docs[0].data().files.map((file: FileData) => {
          if (file.id === noteId) {
            return { ...file, linx: !currentLinxValue };
          }
          return file;
        });

        await updateDoc(folderDocRef, { files: updatedFiles });

        if (!currentLinxValue) {
          const userRef = doc(db, "users", user.uid);
          await updateDoc(userRef, {
            count: increment(1)
          });
        }

        dispatch(fetchFiles(selectedFolderName));

        onClose();
      } else {
        console.log("No such folder!");
      }
    } catch (error) {
      console.error("Error updating stars: ", error);
    }
  }

  return (
    <Wrapper>
        <FpBack onClick={onClose}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.5621 36.4387C38.7015 36.5781 38.812 36.7435 38.8874 36.9256C38.9628 37.1077 39.0017 37.3029 39.0017 37.5C39.0017 37.6971 38.9628 37.8922 38.8874 38.0743C38.812 38.2564 38.7015 38.4219 38.5621 38.5612C38.4227 38.7006 38.2573 38.8111 38.0752 38.8866C37.8931 38.962 37.6979 39.0008 37.5008 39.0008C37.3037 39.0008 37.1086 38.962 36.9265 38.8866C36.7444 38.8111 36.579 38.7006 36.4396 38.5612L24.0008 26.1206L11.5621 38.5612C11.2806 38.8427 10.8989 39.0008 10.5008 39.0008C10.1028 39.0008 9.72105 38.8427 9.43958 38.5612C9.15812 38.2798 9 37.898 9 37.5C9 37.1019 9.15812 36.7202 9.43958 36.4387L21.8802 24L9.43958 11.5612C9.15812 11.2798 9 10.898 9 10.5C9 10.1019 9.15812 9.72019 9.43958 9.43873C9.72105 9.15727 10.1028 8.99915 10.5008 8.99915C10.8989 8.99915 11.2806 9.15727 11.5621 9.43873L24.0008 21.8794L36.4396 9.43873C36.721 9.15727 37.1028 8.99915 37.5008 8.99915C37.8989 8.99915 38.2806 9.15727 38.5621 9.43873C38.8435 9.72019 39.0017 10.1019 39.0017 10.5C39.0017 10.898 38.8435 11.2798 38.5621 11.5612L26.1215 24L38.5621 36.4387Z" fill="#ddd"/>
          </svg>
        </FpBack>
        <PopupContent>
            <PcTitleBox>{ note.title }</PcTitleBox>
            <PcTagContainer>
              {note.tags.map((tag, index) => (
                <PcTagBox key={index}>{tag}</PcTagBox>
              ))}
            </PcTagContainer>
            <PcContentBox>{stripHtml(note.content)}</PcContentBox>
            <SaveBtn linx={ note.linx } onClick={(e) => onHandleLinx(note.id, note.linx, e)}>
              {note.linx ? "업로드 완료" : "업로드"}
            </SaveBtn>
        </PopupContent>
    </Wrapper>
  )
};

export default SelectedNotePopup;
