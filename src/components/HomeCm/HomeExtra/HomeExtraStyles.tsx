import styled from "styled-components";


export const Wrapper = styled.div`
    position : sticky;
    top : 10%;
    left : 0;
    width : 200px;
    height : 300px;
    display : flex;
    justify-content : center;
    margin : 0;
    padding : 0;
`;

export const ExtraContainer = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    margin : 0;
    padding : 0;

    &:hover {
        cursor : pointer;
    }
`;

export const SurveyText = styled.p`
    font-size : 17px;
    font-family : 'pretendard';
    font-weight : bold;
    color : black;
    text-align : center;

    span {
        font-size : 14px;
        color : #999;
    }
`;