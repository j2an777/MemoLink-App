import Lottie from "lottie-react";
import { LottieContainer, Wrapper } from "./LsStyles";
import { lottie } from '../../assets/loaderJson';

export default function LoadingScreen() {
  return (
    <Wrapper>
        <LottieContainer>
          <Lottie animationData={ lottie } />
        </LottieContainer>
    </Wrapper>
  )
}
