import { useNavigate } from "react-router-dom";
import HomeExtra from "./HomeExtra/HomeExtra";
import { HomeLeftContainer, HomeMiddleContainer, HomeRightContainer, SurveyBox, ToSurvey, Wrapper } from "./HomeIndexStyles";
import HomeState from "./HomeState/HomeState";
import React, { Suspense } from "react";

export default function HomeIndex() {

  const navigate = useNavigate();

  const ListComponent = React.lazy(() => import("./HomeList.tsx/HomeList"));

  const toSurvey = () => {
    navigate("/review");
  };

  return (
    <Wrapper>
        <HomeLeftContainer>
            <HomeExtra />
        </HomeLeftContainer>
        <HomeMiddleContainer>
            <Suspense fallback={<div>loading...</div>}>
              <ListComponent />
            </Suspense>
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
