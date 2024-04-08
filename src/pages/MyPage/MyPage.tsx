import styled from "styled-components"
import ProfileTop from "../../components/MyPageForm/ProfileTop/ProfileTop";
import ProfileBottom from "../../components/MyPageForm/ProfileBottom/ProfileBottom";
import { useParams } from "react-router-dom";


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

  if (!userId) {
    return <div>Loading or not found...</div>;
  }

  return (
    <Wrapper>
      <ProfileTop userId = {userId}/>
      <ProfileBottom userId = {userId}/>
    </Wrapper>
  )
}
