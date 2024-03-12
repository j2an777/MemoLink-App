import styled, { keyframes } from "styled-components"

export const SCompWrapper = styled.div`
    z-index : 300;
    width : 100%;
    height : 100%;
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
`;

export const BottomContainer = styled.div`
    width : 100%;
    height : 92vh;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : rows;
`;

const downAnime = keyframes`
    0% {
        opacity : 0;
        transform : translateY(-20px);
    }
    100% {
        opacity : 1;
        transform : translateY(0);
    }
`;

export const FpPopupWrapper = styled.div`
    position : absolute;
    top : 33%;
    left : 41%;
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
    width : 20px;
    height : 20px;
    background-color : transparent;
    margin : 0;
    padding : 0;
    svg {
        width : 100%;
        height : 100%;
    }

    &:hover {
        cursor : pointer;
        svg {
            fill : #fff;
        }
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
    border-radius : 20px;
`;

export const FpConfirm = styled.input`
    width : 100%;
    height : 40px;
    margin : 0;
    padding : 0;
    font-size : 20px;
    outline : none;
    border-radius : 20px;
    border : none;
    background-color : #03D100;
    color : #fff;
    cursor : pointer;
    transition : all 0.3s ease;
    &:hover {
        background-color : #00B327;
    }
`;