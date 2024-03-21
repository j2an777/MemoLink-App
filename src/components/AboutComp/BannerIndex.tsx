import styled from "styled-components";
import Banner from "./Banner/Banner";
import Introduce from "./Introduce/Introduce";

const HCWrapper = styled.div`
    width : 100%;
    height : 100%;
    padding : 0;
    display : flex;
    align-items : center;
    flex-direction : column;
`;

export default function BannerIndex() {
  return (
    <HCWrapper>
        <Banner />
        <Introduce />
    </HCWrapper>
  )
}
