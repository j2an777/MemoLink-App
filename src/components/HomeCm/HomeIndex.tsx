import { useNavigate } from "react-router-dom";
import HomeExtra from "./HomeExtra/HomeExtra";
import { HomeLeftContainer, HomeMiddleContainer, HomeRightContainer, SurveyBox, ToSurvey, Wrapper } from "./HomeIndexStyles";
import HomeList from "./HomeList.tsx/HomeList";
import HomeState from "./HomeState/HomeState";

export default function HomeIndex() {

  const navigate = useNavigate();

  const toSurvey = () => {
    navigate("/review");
  };

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
        <SurveyBox>
          <ToSurvey src="/Logo.svg" onClick={toSurvey} onTouchStart={toSurvey}/>
        </SurveyBox>
    </Wrapper>
  )
}
