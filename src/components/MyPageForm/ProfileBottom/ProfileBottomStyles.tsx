import styled from "styled-components";


export const Wrapper = styled.div`
    width : 50vw;
    height : auto;
    margin : 20px 0 0 0;
    padding : 10px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;

    @media (max-width : 1200px) {
        height : auto;
    }
`;

export const LinxTitle = styled.h1`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #03D100;
`;

export const LinxFileContainer = styled.div`
    width : 100%;
    height : 100%;
    display : grid;
    grid-template-columns : 1fr 1fr;
    gap : 20px;
    margin : 20px 0 0 0;
    padding : 0;

    @media (max-width : 1000px) {
        grid-template-columns : 1fr;
        justify-content : center;
    }
`;

interface NoteColorProps {
    noteColor: string;
}

export const LinxFileBox = styled.div<NoteColorProps>`
    width : 100%;
    height : 300px;
    margin : 0;
    padding : 20px;
    box-sizing: border-box;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    background-color : ${props => props.noteColor || 'white'};
    border-radius : 20px;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);

    @media (max-width : 600px) {
        width : 90vw;
    }
`;

interface TextColorProps {
    textColor : string;
}

export const LinxFileTitle = styled.p<TextColorProps>`
    font-size : 20px;
    font-weight : bold;
    font-family : 'pretendard';
    color : ${props => props.textColor || 'black'};
`;

export const LinxFileTags = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    gap : 10px;
    padding : 0;
    margin : 10px 0 0 0;
    align-items : center;
    justify-content : flex-start;
`;

export const LinxFileTagItem = styled.p`
    font-size : 12px;
    font-family : 'pretendard';
    color : #999;
    font-weight : 400;
`;

export const LinxFileImg = styled.div`
    width : 100%;
    height : 150px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 10px 0 0 0;

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }
`;

export const LinxFileContent = styled.p<TextColorProps>`
    margin : 10px 0 0 0;
    font-size : 16px;
    font-family : 'pretendard';
    font-weight : medium;
    color : ${props => props.textColor || '#555'};

`;

export const NoImport = styled.h1`
    font-family : 'pretendard';
    font-weight : bold;
    font-size : 36px;
`;