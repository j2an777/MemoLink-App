import HomeExtra from "./HomeExtra/HomeExtra";
import { HomeLeftContainer, HomeMiddleContainer, HomeRightContainer, Wrapper } from "./HomeIndexStyles";
import HomeList from "./HomeList.tsx/HomeList";
import HomeState from "./HomeState/HomeState";

export default function HomeIndex() {
  return (
    <Wrapper>
        <HomeLeftContainer>
            <HomeExtra />
        </HomeLeftContainer>
        <HomeMiddleContainer>
            <HomeList />
        </HomeMiddleContainer>
        <HomeRightContainer>
            <HomeState />
        </HomeRightContainer>
    </Wrapper>
  )
}
