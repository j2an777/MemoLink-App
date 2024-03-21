import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap; 
    gap: 30px;
    overflow-x: auto;
    overflow-y: auto;
`;

export const ScriptItemContainer = styled.div`
    min-width: 300px;
    height: 350px;
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const ItemTop = styled.div`
    width : 100%;
    height : auto;
    flex-grow : 1;
    margin : 0;
    padding : 0px 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : space-between;
`;

export const ItemTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : black;
`;

export const ItemStar = styled.img`
    position : relative;
    width : 30px;
    height : 30px;
    margin : 0;
    padding : 0;
    object-fit : contain;
    transition: all 0.3s ease;

    &:hover {
        cursor : pointer;
        transform : scale(1.3);
    }

    &:active {
        transform : scale(0.9);
    }
`;

export const ItemMiddle = styled.div`
    width : 100%;
    height : auto;
    flex-grow : 2;
    margin : 0;
    padding : 10px;
    box-sizing : border-box;
`;

export const ItemScript = styled.p`
    width : 100%;
    height : 70%;
    margin : 0;
    padding : 0;
    font-size : 16px;
    font-family : 'pretendard';
    font-weight : 500;
    color : black;
`;

export const ItemTagsContainer = styled.div`
    width : 100%;
    height : 30%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;

    span {
        font-size : 10px;
        font-family : 'pretendard';
        font-weight : 400;
        margin-right : 5px;
        border-radius : 10px;
        border : 0.5px solid rgba(0, 0, 0, 0.1);
        color : #333;
        padding : 8px 12px;
        box-sizing : border-box;
    }
`;

export const ItemBottom = styled.div`
    width : 100%;
    height : auto;
    flex-grow : 1;
    margin : 0;
    padding : 0 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : space-between;
`;

export const ItemDate = styled.p`
    font-size : 12px;
    font-family : 'pretendard';
    font-weight : 500;
    color : #ccc;
`;

export const ItemUpdateBox = styled.div`
    width : auto;
    height : 100%;
    margin : 0;
    padding : 0;
    gap : 10px;
    display : flex;
    align-items : center;
    justify-content : flex-end;
`;

export const ItemEdit = styled.div`
    width : 50px;
    height : 30px;
    font-size : 16px;
    color : #aaa;
    border : 1px solid #ccc;
    border-radius : 10px;
    cursor : pointer;
    transition : all 0.3s ease;
    display : flex;
    align-items : center;
    justify-content : center;

    &:hover {
        background-color : #ccc;
        color : #777;
    }
`;

export const ItemDelete = styled.div`
    width : 50px;
    height : 30px;
    font-size : 16px;
    color : #aaa;
    border : 1px solid #ccc;
    border-radius : 10px;
    cursor : pointer;
    transition : all 0.3s ease;
    display : flex;
    align-items : center;
    justify-content : center;

    &:hover {
        background-color : #ccc;
        color : #777;
    }
`;