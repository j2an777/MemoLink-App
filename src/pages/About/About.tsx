import styled from "styled-components";
import BannerIndex from "../../components/AboutComp/BannerIndex";


const Wrapper = styled.div`
  width : 100%;
  margin : 0;
  padding : 0;
  display : flex;
  justify-content : center;
`;

export default function About() {
  return (
    <Wrapper>
      <BannerIndex />
    </Wrapper>
  )
}
