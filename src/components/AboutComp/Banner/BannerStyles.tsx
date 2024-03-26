import styled from "styled-components";

export const Wrapper = styled.div`
    position : relative;
    width : 100%;
    height : 550px;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const BannerImg = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
`;

export const BannerContents = styled.div`
    position : absolute;
    top : 30%;
    left : 7%;
    z-index : 30;
    display : flex;
    flex-direction : column;
    justify-content : center;
    margin : 0;
    padding : 0;

    @media (max-width: 768px) {
        top : 50%;
        left : 50%;
        transform : translate(-50%, 0);
        display : flex;
        flex-direction : row;
        justify-content : center;
        align-items : center;
    }
`;

export const BannerTitle = styled.h1`
    font-size : 3rem;
    font-weight : 800;
    line-height : 60px;

    @media (max-width: 768px) {
        display : none;
    }
`;

export const BannersubTitle = styled.p`
    margin : 20px 0 0 20px;
    font-size : 16px;
    font-weight : 600;
    line-height : 20px;
    color : #444;

    @media (max-width: 768px) {
        display : none;
    }
`;

export const BannerBtn = styled.button`
    width : 250px;
    height : 100px;
    background-color : #69F266;
    border-radius : 20px;
    border : none;
    color : white;
    font-size : 36px;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
    margin-top : 40px;
    transition : all 0.3s ease;

    &:hover {
        cursor : pointer;
        background-color : #67DF65;
    }

    @media (max-width: 1024px) {
        width : 160px;
        height : 60px;
        font-size : 24px;
        margin-top : 20px;
    }
`;