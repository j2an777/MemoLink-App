import styled, { keyframes } from "styled-components";
import { downAnime } from "../ScriptCompStyles";

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

export const FolderInfo = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
    margin : 0;
    padding : 0;
`;

export const FolderTitle = styled.h1`
    font-size : 2.5rem;
    font-family : 'Poppins';
    font-weight : 700;
    color : #444;
    margin : 0;
`;

interface FolderStarsProps {
    $isActive: boolean;
}

export const FolderStars = styled.div<FolderStarsProps>`
    width : 100px;
    height : 40px;
    margin : 0 0 0 30px;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    border-radius : 15px;
    border : 1px solid ${props => props.$isActive ? '#03d100' : '#78EE76'};
    background-color : white;
    transition : all 0.3s ease;

    p {
        font-size : 20px;
        font-family : 'Poppins';
        font-weight : 500;
        color : ${props => props.$isActive ? '#03d100' : '#78EE76' };
        padding : 0;
        margin : 0;
    }

    img {
        width : 20px;
        height : 20px;
        object-fit : contain;
    }

    &:hover {
        cursor : pointer;
        transform : scale(1.1);
    }
    &:active {
        transform : scale(0.9);
    }
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

export const NotePopupWrapper = styled.div`
    position : fixed;
    top : 2%;
    left : 25%;
    width : 800px;
    height : 600px;
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    background-color : transparent;
    border-radius : 20px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    z-index : 502;
    animation : ${downAnime} 0.3s ease-in-out;
`;

export const NPopupBox = styled.form`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    box-sizing : border-box;
    background-color : white;
    border-radius : 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const NTitleInput = styled.input`
    width : 100%;
    margin : 0;
    padding : 20px 20px;
    outline : none;
    border : 1px solid #ccc;
    border-radius : 10px;
    box-sizing : border-box;
    font-size : 24px;
    &::placeholder {
        font-size : 24px;
    }
`;

export const NTagInput = styled.input`
    width : 100%;
    margin : 0;
    padding : 20px 20px;
    outline : none;
    border : none;
    box-sizing : border-box;
    font-size : 20px;

    &::placeholder {
        font-size : 20px;
    }
`;

export const NConfirm = styled.input`
    font-size : 16px;
    margin : 15px 0 0 0;
    padding : 10px 30px;
    box-sizing : border-box;
    background-color : #03D100;
    color : white;
    border : none;
    border-radius : 15px;
    box-sizing : border-box;
    font-size : 24px;
    transition : all 0.3s ease;

    &:hover {
        cursor : pointer;
        background-color : #00B327;
    }

    &:active {
        transform : scale(0.9);
    }
`;

export const TextContainer = styled.div`
    width : 100%;
    flex-grow : 1;
    margin : auto;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;
    overflow : auto;

    .quill {
        img {
            width : 300px;
            height : auto;
        }
        height : 100%;
        width : 100%;
    }
`;

export const TagBlock = styled.span`
    display: inline-block;
    margin: 14px;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
    color : #03D100;
    font-size : 16px;
    &::before {
        content: "#";
    }
`;
