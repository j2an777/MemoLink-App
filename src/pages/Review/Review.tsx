import styled from "styled-components"


const Wrapper = styled.div`
    width : 100vw;
    min-height : 100vh;
    padding : 0;
    margin : 0;
    display : flex;
    align-items : center;
    justify-content : center;

    iframe {
        width : 100%;
        height : 100%;
    }
`;
export default function Review() {
  return (
    <Wrapper>
        <iframe src = "https://u3dnq4o2ti3.typeform.com/to/IumM8mwC"></iframe>
    </Wrapper>
  )
}
