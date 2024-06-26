import styled from "styled-components";

export const Wrapper = styled.div`
    width : 50vw;
    height : 200px;
    margin : 0;
    padding : 20px 0;
    box-sizing : border-box;
    display : flex;
    justify-content : center;
    align-items : center;
    border-bottom : 1px solid #ddd;
    

    @media (max-width: 850px) {
        width : 95vw;
        height : 100%;
    }
`;

export const ProFileAvatarContainer = styled.div`
    position : relative;
    width : 30%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const ProFileImg = styled.circle`
    width : 100px;
    height : 100px;
    border-radius : 50%;
    border : 0.5px solid #eee;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #eee;
    border : 1px solid #ccc;

    img {
        width : 100%;
        height : 100%;
        border-radius : 50%;
        object-fit : cover;
        object-position : bottom;
    }

    @media (max-width: 500px) {
        width : 80px;
        height : 80px;

        img {
            width : 100%;
            height : 100%;
            border-radius : 50%;
            object-fit : cover;
            object-position : bottom;
        }
    }
`;

export const ProFileUserEditLabel = styled.label`
    position : absolute;
    top : 20px;
    right : 10px;
    outline : none;
    width : 20px;
    height : 20px;
    border-radius : 50%;
    border : 0.5px solid #0de100;
    color : #0de100;
    display : flex;
    justify-content : center;
    align-items : center;

    &:hover {
        cursor : pointer;
    }

    @media (max-width: 850px) {
        top : 0;
        right : 0;
    }
`;

export const ProFileUserEdit = styled.input`
    display : none;
`;

export const ProFilePreview = styled.div`
    width : 65%;
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
    margin-bottom : 10px;

    @media (max-width : 500px) {
        font-size : 20px;
    }
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
    width : 85%;
    height : 100%;
    font-size : 20px;
    font-family : 'pretendard';
    color : #888;
    font-weight : 500;
    margin : 0;
    padding : 0;

    @media (max-width : 500px) {
        font-size : 16px;
    }
`;

export const ProFileEditMessage = styled.input`
    width : 85%;
    height : auto;
    font-size : 20px;
    font-family : 'pretendard';
    color : #555;
    font-weight : 500;
    border : none;
    margin : 0;
    outline : none;

    &::placeholder {
        color : #ccc;
    }

    @media (max-width : 500px) {
        font-size : 16px;
    }
`;

export const ProFileEdit = styled.div`
    width : 80px;
    height : 100%;
    padding : 10px 0;
    outline : none;
    background-color : #03d100;
    border : none;
    border-radius : 15px;
    color : white;
    font-size : 16px;
    display : flex;
    justify-content : center;
    align-items : center;

    &:hover {
        cursor : pointer;
        background-color : #00B327;
    }

    @media (max-width : 500px) {
        width : 60px;
        font-size : 14px;
    }
`;