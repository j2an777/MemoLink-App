import styled from "styled-components";
import ProfileTop from "./ProfileTop/ProfileTop";
import ProfileBottom from "./ProfileBottom/ProfileBottom";


const Wrapper = styled.div`
    width : 60%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

export default function PageForm() {
  return (
    <Wrapper>
        <ProfileTop />
        <ProfileBottom />
    </Wrapper>
  )
}
