import styled from "styled-components";


export const Wrapper = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    z-index : 500;
    width : 100%;
    height : 8vh;
    display : flex;
    padding : 0px 100px;
    align-items : center;
    margin : 10px 0 0 0;
    box-sizing : border-box;

    a {
        text-decoration : none;
        color : #03D100;
        font-size : 1.2rem;
        font-weight : 600;
    }
`;

export const MenuOne = styled.div`
    width : 50%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 30px;
    justify-content : flex-center;
    align-items : center;
`;

export const MenuTwo = styled.div`
    width : 50%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 30px;
    justify-content : flex-end;
    align-items : center;
`;

export const AboutItem = styled.div``;

export const HomeItem = styled.div`
    width : 200px;
    height : 40px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    svg {
        width : 100%;
        height : 100%;
        object-fit : auto;
        margin : 0;
        padding : 0;
    }
    span {
        font-size : 1.5rem;
        font-weight : 600;
        margin : 0;
        padding : 0;
    }
`;

export const ProfileItem = styled.div``;

export const LoginItem = styled.div`
    color : #03D100;
    font-weight : 600;
    font-size : 18px;
    &:hover {
        cursor: pointer;
    }
`;