import styled from "styled-components";
import ScriptComp from "../../components/ScriptComp/ScriptComp";

const ScriptWrapper = styled.div`
  width : 100vw;
  max-height : 100vh;
  margin : 0;
  padding : 0;
  overflow : hidden;

  @media (max-width : 1200px) {
    overflow-y : auto;
  }
`;

export default function Script() {
  return (
    <ScriptWrapper>
      <ScriptComp />
    </ScriptWrapper>
  )
}
