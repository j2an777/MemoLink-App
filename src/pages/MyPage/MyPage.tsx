import styled from "styled-components"
import PageForm from "../../components/MyPageForm/PageForm";


const Wrapper = styled.div`;;
  width : 100vw;
  height : 100vh;
  margin : 0;
  display : flex;
  justify-content : center;
  align-items : center;
  padding : 100px 200px;
  box-sizing : border-box;
`;

export default function MyPage() {
  return (
    <Wrapper>
      <PageForm />
    </Wrapper>
  )
}
