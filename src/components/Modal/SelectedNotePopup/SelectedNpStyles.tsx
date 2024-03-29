import styled, { css } from "styled-components";
import { downAnime } from "../../ScriptComp/ScriptCompStyles";


export const Wrapper = styled.div`
    position : fixed;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    width : 800px;
    height : 600px;
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    background-color : transparent;
    border-radius : 20px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    z-index : 502;
    animation : ${downAnime} 0.3s ease-in-out;

    @media (max-width : 900px) {
        width : 100vw;
        height : 500px;
    }
`;

export const PopupContent = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : ceneter;
    background-color: white;
    border-radius : 20px;
`;

export const PcTitleBox = styled.div`
    width : 100%;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    box-sizing : border-box;
    background-color : white;
    border-radius : 20px;
    border : 1px solid #d9d9d9;
    font-size : 24px;
    font-family : 'pretendard';
    font-weight : bold;
`;

export const PcTagContainer = styled.div`
    width : 100%;
    margin : 0;
    padding : 5px 5px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : flex-start;
`;

export const PcTagBox = styled.div`
    display: inline-block;
    margin: 14px;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
    color : #03D100;
    font-size : 16px;
    &::before {
        content: "#";
    }
`;

export const PcContentBox = styled.div`
    width : 100%;
    flex-grow : 1;
    margin : 10px 0 0 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    overflow : auto;
    border-radius : 20px;
    border : 1px solid #d9d9d9;
    font-size : 16px;
    font-family : 'pretendard';
    font-weight : medium;
`;

export const SaveOrEdit = styled.div`
    width : 100%;
    margin : 10px 0 0 0;
    padding : 10px 0;
    gap : 20px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : flex-end;
`;

interface SaveBtnProps {
    linx : boolean;
}

export const SaveBtn = styled.button<SaveBtnProps>`
    width: 100%;
    height: 10%;
    margin: 20px 0 0 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    color: white;
    transition: all 0.3s ease;
    font-size: 24px;
    letter-spacing: 2px;
    font-weight: bold;
    border : none;
    background-color: ${(props) => (props.linx ? "#00B327" : "#03D100")};
    
    &:hover {
        cursor: ${(props) => (props.linx ? "default" : "pointer")};
        background-color: ${(props) => (props.linx ? "#00B327" : "#00B327")};
    }
    
    ${(props) =>
        props.linx &&
        css`
            pointer-events: none;
            border : none;
        `}

    &:active {
        transform: ${(props) => (props.linx ? "none" : "scale(0.9)")};
    }
`;


