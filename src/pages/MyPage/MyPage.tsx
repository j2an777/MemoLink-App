import styled from "styled-components"
import ProfileTop from "../../components/MyPageForm/ProfileTop/ProfileTop";
import ProfileBottom from "../../components/MyPageForm/ProfileBottom/ProfileBottom";


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
  return (
    <Wrapper>
      <ProfileTop />
      <ProfileBottom />
    </Wrapper>
  )
}
