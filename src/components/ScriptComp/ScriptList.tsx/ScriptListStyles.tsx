import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    background-color : #EBFFEF;
    border-radius : 30px 0 0 30px;
    margin-top : 20px;
    padding : 30px 50px;
    box-sizing : border-box;
`;

export const FolderTop = styled.div`
    width : 100%;
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : space-between;
`;

export const FolderTitle = styled.h1`
    font-size : 2.5rem;
    font-family : 'Poppins';
    font-weight : 700;
    color : #444;
    margin : 0;
`;

const plusAnime = keyframes`
    from {
        transform : rotate(0deg);
    }
    to {
        transform : rotate(360deg);
    }
`;

const colorChange = keyframes`
    0% {
        fill : #aaa;
    }

    100% {
        fill: #00B327;
    }
`;

export const FilePlus = styled.div`
    width : 50px;
    height : 50px;
    margin : 0;
    padding : 0;
    background-color : transparent;
    display : flex;
    align-items : center;
    justify-content : center;

    svg {
        fill: #aaa;
    }

    &:hover {
        cursor : pointer;
        svg {
            animation: ${plusAnime} 0.3s ease-in-out,
            ${colorChange} 0.3s ease-in-out forwards;
        }
    }
`;