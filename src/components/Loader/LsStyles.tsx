import styled, { keyframes } from "styled-components";

const ringAnime = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    position : relatvie;
    display : inline-block;
    width : 80px;
    height : 80px;
    margin : 56px auto;
`;

export const RingBox = styled.div`
    position : absolute;
    display : block;
    width : 64px;
    height : 64px;
    margin : 8px;
    border : 8px solid #717482;
    border-color : #717482 transparent transparent;
    border-radius : 50%;
    animation : ${ringAnime} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;

export const FirstRing = styled(RingBox)`
    animation-delay : -0.45s;
`;

export const SecondRing = styled(RingBox)`
    animation-delay : -0.3s;
`;

export const ThirdRing = styled(RingBox)`
    animation-delay : -0.15s;
`;

