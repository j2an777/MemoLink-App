import styled from "styled-components";


export const Wrapper = styled.div`
    width : 100%;
    height : 8vh;
    display : flex;
    padding : 0px 100px;
    align-items : center;
    margin : 0;
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
    justify-content : flex-center;
    align-items : center;
`;

export const MenuTwo = styled.div`
    width : 50%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : flex-end;
    align-items : center;
`;

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

export const ProfileItem = styled.div`
    margin : 0 30px 0 0;
`;

export const LoginItem = styled.div``;