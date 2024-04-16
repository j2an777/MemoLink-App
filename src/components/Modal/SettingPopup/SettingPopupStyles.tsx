import styled, { keyframes } from "styled-components";

const showAnime = keyframes`
    0% {
        opacity : 0;
        transform : scale(1.2);
    }

    100%{
        opacity : 1;
        transform : scale(1);
    }
`;

export const SpWrapper = styled.div`
    position : fixed;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    width : 100vw;
    height : 100vh;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;
    z-index : 503;
`;


export const SpContainer = styled.div`
    z-index : 503;
    width : 250px;
    height : 270px;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    background-color : white;
    border-radius : 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

    animation : ${showAnime} 0.2s ease-in-out;
`;

export const SpDelete = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    margin : 0;
    padding : 0;
    border-bottom : 1px solid #c9c9c9;
    border-radius : 20px 20px 0 0;
    color : red;

    &:hover {
        cursor : pointer;
        text-decoration : underline 1px solid;
    }

    &:active {
        background-color : #dedede;
    }
`;

export const SpItem = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    margin : 0;
    padding : 0;
    border-bottom : 1px solid #c9c9c9;

    &:hover {
        cursor : pointer;
        text-decoration : underline 1px solid;
    }

    &:active {
        background-color : #dedede;
    }

    &:first-child {
        border-radius : 20px 20px 0 0;
    }

    &:last-child {
        border-radius : 0 0 20px 20px;
        border-bottom : none;
    }
`;