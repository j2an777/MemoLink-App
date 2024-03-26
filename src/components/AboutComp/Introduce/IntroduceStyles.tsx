import styled from "styled-components";

export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    padding : 30px 100px;
    box-sizing : border-box;
    margin : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
`;

export const Inbox = styled.div`
    width : 100%;
    height : 100%;
    margin : 0 0 50px 0;
    padding : 20px 50px;
    background-color : white;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    border-radius : 30px;
`;

export const InTitle = styled.h1`
    font-size : 2rem;
    font-family : 'Poppins';
    font-weight : 700;
    color : #444;
    margin-bottom : 20px;

    @media (max-width: 768px) {
        width : 500px;
        text-align : center;
        font-size : 1.5rem;
    }
`;

export const InsubTitle = styled.h3`
    font-size : 1.2rem;
    color : #666;
    font-weight : 600;
    margin-bottom : 50px;

    @media (max-width: 768px) {
        width : 200px;
        font-size : 1rem;
        text-align : center;
    }
`;

export const InComponents = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : space-evenly;
    align-items : center;

    @media (max-width: 768px) {
        display : grid;
        grid-template-columns : 1fr 1fr;
        justify-content : center;
        align-items : center;
    }
`;

export const InItem = styled.div`
    width : 20%;
    margin : 0;
    padding: 20px 0 0 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;

    @media (max-width: 768px) {
        width : 100%;
        font-size : 1rem;
        text-align : center;
    }
`;

export const InIcon = styled.div`
    width : 100px;
    height : 100px;
    border-radius : 50%;
    border : none;
    background-color : #78EE76;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
    margin-bottom : 10px;
    display : flex;
    justify-content : center;
    align-items : center;
    svg {
        width : 80%;
        height : 80%;
    }
`;

export const InIcon2 = styled.div`
    width : 100px;
    height : 100px;
    border : none;
    margin-bottom : 10px;
    display : flex;
    justify-content : center;
    align-items : center;
    svg {
        width : 80%;
        height : 80%;
    }

    @media (max-width: 768px) {
        width : 150px;
        height : 150px;
        svg {
            width : 100%;
            height : 100%;
        }
    }

    @media (max-width: 480px) {
        width : 100px;
        height : 100px;
        svg {
            width : 100%;
            height : 100%;
        }
    }
`;

export const InInfo = styled.p`
    font-size : 1rem;
    color : #666;
    font-weight : 600;

    @media (max-width: 768px) {
        width : 200px;
        font-size : 1rem;
        text-align : center;
    }
`;