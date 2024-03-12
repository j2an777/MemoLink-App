import styled from "styled-components";

export const STWrapper = styled.div`
    width : 100%;
    height : 100%;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const SearchContainer = styled.div`
    width : 300px;
    height : 50px;
    position : relative;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const ScriptSearch = styled.input`
    width : 100%;
    border : 1px solid #bbb;
    border-radius : 8px;
    padding: 10px 20px;
    font-size : 14px;
    z-index : 501;
    outline : none;

    &::placeholder {
        color : #ccc;
    }
`;

export const ScriptImg = styled.div`
    position : absolute;
    top : 14px;
    right : 12px;
    width : 24px;
    height : 24px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    z-index : 501;
    
    svg {
        width : 100%;
        height : 100%;
        object-fit : contain;
        margin : 0;
        padding : 0;
    }
`;