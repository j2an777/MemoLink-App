import styled from "styled-components";



export const Wrapper = styled.div`
    width : 60%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    border-bottom : 1px solid #ddd;
`;

export const ProFileTop = styled.div`
    width : 100%;
    height : auto;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const ProFileImg = styled.div`
    width : 100px;
    height : 100px;
    border-radius : 50%;
    border : 0.5px solid #eee;

    img {
        width : 100%;
        height : 100%;
        border-radius : 50%;
        object-fit : contain;
    }
`;

export const ProFilePreview = styled.div`
    width : 70%;
    height : auto;
    margin : 0;
    padding : 10px 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
`;

export const ProFileName = styled.h2`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : black;
`;

export const ProFileEditContainer = styled.div`
    width : 100%;
    height : auto;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

export const ProFileMessage = styled.p`
    width : 50%;
    height : auto;
    font-size : 20px;
    font-family : 'pretendard';
    color : #555;
    font-weight : 500;
    margin : 0;
`;

export const ProFileEdit = styled.button`
    padding : 10px 20px;
    outline : none;
    background-color : #03d100;
    border : none;
    border-radius : 15px;
    color : white;

    &:hover {
        cursor : pointer;
    }
`;