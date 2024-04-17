import styled from "styled-components"
import ProfileTop from "../../components/MyPageForm/ProfileTop/ProfileTop";
import ProfileBottom from "../../components/MyPageForm/ProfileBottom/ProfileBottom";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import LoadingScreen from "../../components/Loader/LoadingScreen";


const Wrapper = styled.div`
  width : 90vw;
  height : auto;
  margin : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  padding : 100px 0 0 0;
  box-sizing : border-box;
`;

export default function MyPage() {

  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      if (!userId) {
        navigate("/error");
        return;
      }
      const userDocRef = doc(db, "users", userId);
      const docSnap = await getDoc(userDocRef);

      if (!docSnap.exists()) {
        navigate("/error");
        return;
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, [userId, navigate]);

  if (loading) {
    return (
      <LoadingScreen />
    );
  }

  if (!userId) {
    return <div>User not found.</div>;
  }

  return (
    <Wrapper>
      <ProfileTop userId = {userId}/>
      <ProfileBottom userId = {userId}/>
    </Wrapper>
  )
}
