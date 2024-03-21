import styled from "styled-components";


export const Wrapper = styled.div`
    width : 100%;
    height : 400px;
    margin : 20px 0 0 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
`;

export const LinxTitle = styled.h1`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #03D100;
`;

export const LinxFileContainer = styled.div`
    width : 100%;
    height : auto;
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
    gap : 20px;
    margin : 20px 0 0 0;
    padding : 0;
`;

export const LinxFileBox = styled.div`
    width : auto;
    height : 200px;
    margin : 0;
    padding : 20px;
    box-sizing: border-box;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    background-color : white;
    border-radius : 20px;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const LinxFileTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : black;
`;

export const LinxFileContent = styled.p`
    margin : 10px 0 0 0;
    font-size : 16px;
    font-family : 'pretendard';
    font-weight : medium;
    color : #555;

`;

export const NoImport = styled.h1`
    font-family : 'pretendard';
    font-weight : bold;
    font-size : 36px;
`;