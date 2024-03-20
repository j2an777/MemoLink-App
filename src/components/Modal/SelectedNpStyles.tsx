import styled from "styled-components";
import { downAnime } from "../ScriptComp/ScriptCompStyles";


export const Wrapper = styled.div`
    position : fixed;
    top : 10%;
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

export const PopupContent = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : ceneter;
    background-color: white;
    border-radius : 20px;
`;

export const PcTitleBox = styled.div`
    width : 100%;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    box-sizing : border-box;
    background-color : white;
    border-radius : 20px;
    border : 1px solid #d9d9d9;
    font-size : 24px;
    font-family : 'pretendard';
    font-weight : bold;
`;

export const PcTagContainer = styled.div`
    width : 100%;
    margin : 0;
    padding : 5px 5px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : flex-start;
`;

export const PcTagBox = styled.div`
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

export const PcContentBox = styled.div`
    width : 100%;
    flex-grow : 1;
    margin : 10px 0 0 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    overflow : auto;
    border-radius : 20px;
    border : 1px solid #d9d9d9;
    font-size : 16px;
    font-family : 'pretendard';
    font-weight : medium;
`;

export const SaveOrEdit = styled.div`
    width : 100%;
    margin : 10px 0 0 0;
    padding : 10px 0;
    gap : 20px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : flex-end;
`;

export const SaveBtn = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : #03D100;
    border-radius : 15px;
    color : white;
    transition : all 0.3s ease;

    &:hover {
        cursor : pointer;
        background-color : #67DF65;
    }
`;

export const EditBtn = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    border : 1px solid #ccc;
    border-radius : 15px;
    color : #aaa;
    transition : all 0.3s ease;

    &:hover {
        cursor : pointer;
        border : 1px solid #aaa;
        color : #555;
    }
`;


