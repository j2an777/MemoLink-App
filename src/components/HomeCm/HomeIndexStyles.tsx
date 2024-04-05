import styled from "styled-components";


export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    padding : 0;
    box-sizing : border-box;
    margin : 15vh 0 0 0;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const HomeLeftContainer = styled.div`
    width : auto;
    height : 100%;
    flex-grow : 1;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : center;
`;

export const HomeMiddleContainer = styled.div`
    width : auto;
    height : 100%;
    flex-grow : 1;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : center;
`;

export const HomeRightContainer = styled.div`
    width : auto;
    height : 100%;
    flex-grow : 1;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
`;

export const SurveyBox = styled.div`
    width : 36px;
    height : 36px;
    margin : 0;
    padding : 0;
    position : fixed;
    bottom : 50px;
    right : 30px;
    border-radius : 50%;
    background : #fff;
    box-shadow : 0 0 10px rgba(0, 0, 0, 0.1);
    display : none;
    z-index: 900;

    &:hover {
        cursor : pointer;
    }

    @media (max-width : 855px) {
        display : flex;
        align-items : center;
        justify-content : center;
    }
`;

export const ToSurvey = styled.img`
    width : 24px;
    height : 24px;
    object-fit : contain;    
`;