import styled, { keyframes } from "styled-components"

export const SCompWrapper = styled.div`
    z-index : 300;
    width : 100%;
    height : 100vh;
    padding : 0;
    margin : 15px 0 0 0;
    display : flex;
    flex-direction : column;

`;

export const TopContainer = styled.div`
    width : 100%;
    height : 8vh;
    margin : 0;
    padding : 0;

    @media (max-width : 1200px) {
        display : none;
    }
`;

export const BottomContainer = styled.div`
    width : 100%;
    height : 87vh;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : rows;
    
    @media (max-width : 1200px) {
        min-height : 100vh;
        flex-direction : column;
    }
`;

export const downAnime = keyframes`
    0% {
        opacity : 0;
    }
    100% {
        opacity : 1;
    }
`;

export const FpPopupWrapper = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    animation: ${downAnime} 0.5s ease forwards;
    margin : 0;
    padding : 10px 20px;
    box-sizing : border-box;
    background-color : transparent;
    display : flex;
    flex-direction : column;
    z-index : 502;
`;

export const FpPopupBox = styled.form`
    background-color : white;
    border-radius : 20px;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
    margin : 15px 0 0 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    z-index : 510;
`;

export const FpBack = styled.div`
    width : 100%;
    height : 30px;
    background-color : transparent;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-end;

    svg {
        width : 30px;
        height : 30px;
    }

    &:hover {
        cursor : pointer;
        svg {
            fill : #fff;
        }
    }

    @media (max-width : 900px) {
        justify-content : center;
    }
`;

export const FpInput = styled.input`
    width : 100%;
    height : 40px;
    margin : 0 0 20px 0;
    padding : 10px 20px;
    box-sizing : border-box;
    outline : none;
    border : 1px solid #ccc;
    border-radius : 15px;
`;

export const FpConfirm = styled.input`
    width : 100%;
    height : 40px;
    margin : 0;
    padding : 0;
    font-size : 20px;
    outline : none;
    border-radius : 15px;
    border : none;
    background-color : #03D100;
    color : #fff;
    cursor : pointer;
    transition : all 0.3s ease;

    &:hover {
        background-color : #00B327;
    }

    &:active {
        transform : scale(0.9);
    }
`;