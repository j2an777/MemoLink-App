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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin : 100px 0 0 0;
    animation: ${upAnime} 0.6s ease forwards;

    @media (max-width : 1300px) {
        width : 40%;
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

    @media (max-width : 480px) {
        width : 70vw;
    }
`;

export const Error = styled.span`
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

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.75);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
`;

export const OkPopup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 200px;
    background-color: white;
    z-index: 501;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.5s ease-out forwards;
`;

export const OkImg = styled.div`
    width : 70px;
    height : 70px;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;
    svg {
        width : 100%;
        height : 100%;
        fill : #03D100;
    }
`;

export const OkContents = styled.div`
    width : 100%;
    height : calc(100% - 100px);
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

export const OkTitle = styled.h1`
    font-size : 16px;
    font-family : 'Poppins';
    font-weight : 700;
    color : black;
    margin-bottom : 20px;
`;

export const ToLogin = styled.button`
    width : 100px;
    height : 40px;
    border-radius : 10px;
    border : none;
    font-size : 16px;
    font-weight : bold;
    cursor : pointer;
    background-color : #03D100;
    color : white;
    &:hover {
        opacity : 0.8;
    }
`;