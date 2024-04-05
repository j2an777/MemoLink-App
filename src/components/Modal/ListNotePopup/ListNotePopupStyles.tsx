import styled from "styled-components";

export const LnpContainer = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    width : 100vw;
    height : 100vh;
    padding : 0;
    margin : 0;
    display : flex;
    justify-content : center;
    align-items : center;
    z-index : 503;
`;

export const LnpBack = styled.div`
    position : absolute;
    top : 30px;
    right : 50px;
    width : 50px;
    height : 50px;
    margin  :0;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;

    svg {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    &:hover {
        cursor : pointer;
    }

    @media (max-width : 920px) {
        width : 30px;
        height : 30px;
        top : 20px;
        right : 20px;
    }
`;

export const LnpBox = styled.div`
    width : 80vw;
    height : 90vh;
    padding : 0;
    margin : 0;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : white;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius : 20px;

    @media (max-width : 920px) {
        width : 60vw;
        height : 80vh;
        flex-direction : column;
        justify-content : space-between;
    }

    @media (max-width : 550px) {
        width : 80vw;
        height : 70vh;
    }
`;

export const LnpImg = styled.div`
    width : 60%;
    height : 100%;
    margin : 0;
    padding : 0;
    border-right : 1px solid #c9c9c9;

    img {
        width : 100%;
        height : 100%;
        border-radius : 30px 0 0 30px;
        object-fit : contain;
    }

    @media (max-width : 920px) {
        width : 100%;
        border : none;
    }
`;

export const LnpInfo = styled.div`
    position : relative;
    width : 40%;
    height : 100%;
    margin : 0;
    padding : 20px 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;

    @media (max-width : 920px) {
        width : 100%;
        height : 200px;
        border-top : 1px solid #c9c9c9;
    }
`;

export const LnpUserBox = styled.div`
    width : 100%;
    height : 50px;
    margin : 0;
    padding : 10px 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;
`;

export const LnpUserAvatar = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    object-fit : cover;
`;

export const LnpUserSubInfo = styled.div`
    width : calc(100% - 50px);
    height : 50px;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
`;

export const LnpUserName = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : black;

    @media (max-width : 550px) {
        font-size : 20px;
    }
`;

export const LnpCreatedAt = styled.p`
    font-size : 14px;
    font-weight : 400;
    font-family : 'pretendard';
    color : #777;

    @media (max-width : 550px) {
        font-size : 12px;
    }
`;

export const LnpContentBox = styled.div`
    width : 100%;
    min-height : 100px;
    margin : 0;
    padding : 20px 10px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap : 20px;
`;

export const LnpTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : black;

    @media (max-width : 550px) {
        font-size : 20px;
    }
`;

export const LnpContent = styled.p`
    font-size : 16px;
    font-weight : 500;
    font-family : 'pretendard';
    color : #606060;

    @media (max-width : 550px) {
        font-size : 12px;
    }
`;

export const LnpTags = styled.div`
    width : 100%;
    height : auto;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 10px;
`;

export const LnpTagItem = styled.p`
    font-size : 12px;
    font-weight : 400;
    font-family : 'pretendard';
    color : #999;

    @media (max-width : 550px) {
        font-size : 10px;
    }
`;

export const LnpComment = styled.div`
    width : 100%;
    height : 300px;
    margin : 0;
    padding : 10px 0;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    flex-grow : 1;
    gap : 10px;
    overflow-y : auto;
    border-top : 1px solid #c9c9c9;
    border-bottom : 1px solid #c9c9c9;

    @media (max-width : 920px) {
        display : none;
    }
`;

export const UserCommentBox = styled.div`
    width : 100%;
    height : 50px;
    margin : 10px 0 0 0;
    padding : 0;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 10px;
`;

export const CommentUserAvatar = styled.div`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;

    img {
        width : 100%;
        height : 100%;
        border-radius : 50%;
        object-fit : contain;
    }
`;

export const CommentRight = styled.div`
    width : 100%;
    height : 50px;
    display : flex;
    flex-direction : column;
    margin : 0;
    padding : 0;
`;

export const CommentUserSubInfo = styled.div`
    min-width : 50px;
    height : 50px;
    display : flex;
    justify-content : flex-start;
    align-items : center;
    margin : 0;
    padding : 0;
    gap : 10px;
`;

export const CommentUserName = styled.p`
    font-size : 16px;
    font-weight : 600;
    font-family : 'pretendard';
    color : black;
`;

export const CommentCreatedAt = styled.p`
    font-size : 12px;
    font-weight : 400;
    font-family : 'pretendard';
    color : #777;
`;

export const CommentContent = styled.p`
    font-size : 18px;
    font-weight : 500;
    font-family : 'pretendard';
    color : black;
`;

export const LnpCommentPlus = styled.div`
    position : absolute;
    bottom : 20px;
    width : 100%;
    height : 50px;
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;

    @media (max-width : 920px) {
        display : none;
    }
`;

export const LnpCommentUser = styled.img`
    width : 40px;
    height : 40px;
    border-radius : 50%;
    object-fit : contain;
`;

export const LnpCommentInput = styled.input`
    width : 60%;
    height : 40px;
    border : none;
    border-bottom : 1px solid #b9b9b9;
    outline : none;
    padding : 10px;
    box-sizing : border-box;
    font-size : 14px;
    font-weight : 500;
    font-family : 'pretendard';
    color : black;

    &::placeholder {
        color : #c9c9c9;
    }
`;

export const LnpCommentSend = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : white;
    box-shadow : 0px 0px 10px rgba(0, 0, 0, 0.1);

    img {
        width : 90%;
        height : 90%;
        object-fit : contain;
    }

    &:hover {
        cursor : pointer;
    }

    @media (max-width : 1200px) {
        display : none;
    }
`;

