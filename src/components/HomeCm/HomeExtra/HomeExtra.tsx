import Lottie from "lottie-react";
import { lottie } from '../../../assets/surveyJson'
import { ExtraContainer, SurveyText, Wrapper } from "./HomeExtraStyles";
import { useNavigate } from "react-router-dom";

export default function HomeExtra() {

  const navigate = useNavigate();
  
  const toReview = () => {
    navigate("/review");
  };
  
  return (
    <Wrapper>
      <ExtraContainer onClick={ toReview }>
        <Lottie animationData={ lottie } style={{ width: '100%', height: '100%' }}/>
        <SurveyText>앱에 대한 후기를 남겨주세요! <br/> <span>클릭 시 이동합니다.</span></SurveyText>
      </ExtraContainer>
    </Wrapper>
  )
}
