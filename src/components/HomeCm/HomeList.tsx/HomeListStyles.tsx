import styled from "styled-components";

export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;

    @media (max-width : 855px) {
        min-height : 60vh;
    }

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
    width : 450px;
    min-height : 200px;
    margin : 0 0 20px 0;
    padding : 10px 0;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    border-bottom : 1px solid #e9e9e9;

    @media (max-width : 855px) {
        width : 90%;
        min-height : 150px;
    }
`;

export const LinxTopWrap = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

export const LinxUserInfo = styled.div`
    width : 100%;
    height : 50px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;
`;

export const LinxMore = styled.div`
    width : auto;
    height : auto;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : center;

    img {
        width : 20px;
        height : 20px;
        object-fit = contain;
    }

    &:hover {
        cursor : pointer;
    }
`;

export const UserAvatar = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    object-fit : cover;
    border : 0.5px solid #c9c9c9;

    &:hover {
        cursor : pointer;
    }
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

    &:hover {
        cursor : pointer;
    }
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
    justify-content : flex-start;
`;

interface TextColorProps {
    textColor : string;
}

export const LinxTitle = styled.p<TextColorProps>`
    width : 100%;
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : ${props => props.textColor || 'black'};
`;

export const LinxNoteTag = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    gap : 10px;
    padding : 0;
    margin : 5px 0 0 0;
`;

export const LinxNoteTagItem = styled.p`
    font-size : 14px;
    font-weight : 400;
    font-family : 'pretendard';
    color : #999;
`;

export const LinxImg = styled.img`
    width : 100%;
    height : 400px;
    object-fit : contain;
`;

export const LinxContent = styled.p<TextColorProps>`
    width : 100%;
    min-height : 50px;
    font-size : 16px;
    font-family : 'pretendard'
    font-weight : medium;
    color : ${props => props.textColor || 'black'};
    word-break : break-word;
    overflow-wrap : break-word;
    margin : 20px 0 0 0;
`;

export const EmptyDialog = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin : 0;
    padding : 0;

    img {
        width : 100px;
        height : 100px;
        object-fit : contain;
    }

    span {
        margin-top : 10px;
        text-align : center;
        color : #aaa;
        font-family : 'pretendard';
    }
`;