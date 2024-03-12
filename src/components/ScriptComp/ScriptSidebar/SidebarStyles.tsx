import styled from "styled-components";


export const SSWrapper = styled.div`
    width : 20vw;
    height : 100%;
    margin : 0;
    padding : 10px 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    overflow : hidden;
`;

export const SSTitle = styled.h1`
    font-size : 2rem;
    font-family : 'Poppins';
    font-weight : 700;
    color : #444;
    margin : 20px 0 20px 0;
`;

export const FolderPlus = styled.div`
    width : 80%;
    height : 40px;
    display : flex;
    align-items : center;
    justify-content : center;
    border-radius : 15px;
    border : 2px dashed #ccc;
    margin-bottom : 40px;

    &:hover {
        cursor : pointer;
        border : 2px dashed #aaa;
        span {
            color : #555;
        }
        svg path{
            fill : #555;
        }
    }
`;

export const FPlogo = styled.div`
    width : 20px;
    height : 20px;
    margin-right : 10px;
    padding : 0;
    margin : 0;
    background-color : transparent;
    display : flex;
    justify-content : center;
    align-items : center;
    svg {
        width : 100%;
        height : 100%;
        object-fit : center;
    }
`;

export const FPlusTitle = styled.div`
    width : calc(100% -20px);
    height : 100%;
    padding : 0;
    margin : 0 0 0 10px;
    display : flex;
    align-items : center;
    justify-content : center;
    span {
        color : #aaa;
    }
`;

export const FpContainer = styled.div`
    flex-grow: 1;
    width: 100%;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const FolderItem = styled.div`
    width : 80%;
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 0;
    margin-bottom : 10px;
    padding : 20px 0;
    box-sizing : border-box;
    background-color : transparent;
    border : 1px solid #ddd;
    border-radius : 20px;
    transition : all 0.3s ease;
    color : black;

    &:hover,
    &:active {
        cursor : pointer;
        background-color : #03D100;
        color : white;
    }
`;

export const FolderName = styled.p`
    font-size : 24px;
    font-family : 'Poppins';
`;
