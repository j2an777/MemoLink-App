import styled from "styled-components";

export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const LinxListContainer = styled.div`
    width : 100%;
    height : 100%;
    margin : 0 0 30px 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
`;

export const LinxBox = styled.div`
    width : 100%;
    height : 200px;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : center;
    border-radius : 20px;
    border : 1px solid #eee;
`;

export const LinxUserInfo = styled.div`
    width : 100%;
    height : 30%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;
`;

export const UserAvatar = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    object-fit : cover;
    border : 0.5px solid #c9c9c9;
`;

export const UserMetaInfo = styled.div`
    width : calc(100% - 50px);
    height : 50px;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
`;

export const UserName = styled.p`
    font-size : 16px;
    font-weight : bold;
    font-family : 'pretendard';
    color : black;
`;

export const UserCreatedAt = styled.p`
    font-size: 12px;
    font-weight: 400;
    font-family: 'pretendard';
    color: #ccc;
`;

export const LinxNoteInfo = styled.div`
    width : 100%;
    height : 70%;
    margin : 20px 0 0 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    gap : 20px;
    justify-content : flex-start;
`;

export const LinxTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : black;
`;

export const LinxContent = styled.p`
    font-size : 16px;
    font-family : 'pretendard'
    font-weight : medium;
    color : black;
`;