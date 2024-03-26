import styled from "styled-components";

export const Wrapper = styled.div`
    position : sticky;
    top : 10%;
    right : 0;
    width : 100%;
    height : 400px;
    display : flex;
    flex-direction : column;
    gap : 30px;
    align-items : center;
    border-radius : 8px;
    padding : 30px 0;
    box-sizing : border-box;

    @media (max-width: 855px) {
        display : none;
    }
`;

interface ProgressProps {
    $progress: number;
}

export const CircularProgress = styled.div<ProgressProps>`
    position: relative;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: ${props => `conic-gradient(from 0deg, #03d100 ${props.$progress * 3.6}deg, #ededed 0deg)`};
    display : flex;
    justify-content : center;
    align-items : center;

    &::before {
        content : "";
        position : absolute;
        height : 140px;
        width : 140px;
        border-radius : 50%;
        background-color : #fff;
    }
`;

export const ProgressValue = styled.span`
    position : relative;
    font-size : 32px;
    font-weight : bold;
    color : #03d100;
`;

export const ProgressText = styled.span`
    font-size : 24px;
    font-weight : 500;
    font-family : 'pretendard';
    color : #606060;

    span {
        font-weight : 600;
        color : black;
    }
`;

export const ToScriptBtn = styled.div`
    width : 50%;
    height : 50px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #03d100;
    color : white;
    font-size : 24px;
    font-family : 'pretendard';
    font-weight : 500;
    border-radius : 20px;

    &:hover {
        cursor : pointer;
        background-color : #00B327;
    }

    &:active {
        transform : scale(0.9);
    }
`;