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
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${upAnime} 0.6s ease forwards;
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
    font-size : 16px;
    &[type="submit"] {
        margin-top : 20px;
        font-weight : bold;
        cursor : pointer;
        background-color : #03D100;
        color : white;
        &:hover {
            opacity : 0.8;
        }
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