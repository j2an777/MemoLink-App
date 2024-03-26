import { keyframes, styled } from 'styled-components';

const upAnime = keyframes`
    0%{
        opacity: 0;
        transform: translateY(50px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`;


export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const LoginBox = styled.div`
    width: 30%;
    border-radius : 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    padding: 50px 0px;
    margin : 100px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${upAnime} 0.6s ease forwards;

    @media (max-width : 1300px) {
        width : 45%;
    }

    @media (max-width : 769px) {
        width : 80%;
    }

    @media (max-width : 480px) {
        width : 100vw;
    }
`;

export const Title = styled.h1`
    font-size : 42px;
    font-family : 'Poppins';
    font-weight : 600;
    color : #03D100;
`;

export const Form = styled.form`
    margin-top : 50px;
    margin-bottom : 10px;
    display : flex;
    flex-direction : column;
    align-items : center;
    gap: 10px;
    width : 100%;
`;

export const Input = styled.input`
    padding : 10px 20px;
    border-radius : 10px;
    border : 1px solid #ccc;
    outline : none;
    width : 50%;
    font-size : 12px;
    &[type="submit"] {
        margin-top : 20px;
        font-weight : bold;
        cursor : pointer;
        background-color : #03D100;
        color : white;
        transition : all 0.3s ease;
        font-size : 16px;
        &:hover {
            opacity : 0.8;
        }
    }

    @media (max-width : 768px) {
        width : 45vw;
    }

    @media (max-width : 480px) {
        width : 70vw;
    }
`;

export const Error = styled.span`
    font-size : 12px;
    font-weight : 600;
    color : tomato;
`;

export const Switcher = styled.span`
    margin-top : 10px;
    margin-bottom : 30px;
    font-size : 12px;

    a {
        font-weight : 600;
        color : #03D100;
        text-decoration : none;
        margin-left : 10px;
        text-decoration : none;
        color : #999;
        &:hover {
            opacity : 0.8;
        }
    }
`;

export const PlatformItem = styled.div`
    width : 60%;
    height : 100%;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    margin : 0;
    padding : 0;
`;

export const PlatformLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    }
`;