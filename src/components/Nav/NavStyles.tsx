import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100%;
    height: 8vh;
    display: flex;
    padding: 0px 100px;
    align-items: center;
    margin: 10px 0 0 0;
    box-sizing: border-box;
    background-color: transparent;
    color: #03D100;
    font-size: 1.2rem;
    font-weight: 600;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: #03D100;
        font-size: 1.2rem;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        gap : 30px;
        padding : 0 50px;
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

    @media (max-width: 768px) {
        display: none;
    }
`;

export const AboutItem = styled.div`
    &:hover {
        cursor : pointer;
    }

    @media (max-width: 768px) {
        display: none;
    }
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

    &:hover {
        cursor : pointer;
    }

    @media (max-width: 768px) {
        height : 100%;
        svg {
            display : none;
        }
    }
`;

export const ProfileItem = styled.div`
    &:hover {
        cursor : pointer;
    }
`;

export const LoginItem = styled.div`
    color : #03D100;
    font-weight : 600;
    font-size : 18px;
    &:hover {
        cursor: pointer;
    }
`;

// 햄버거 아이콘 스타일 추가
export const HamburgerIcon = styled.div`
    width: 30px;
    height: 20px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    div {
      width: 100%;
      height: 3px;
      background-color: #03D100;
      border-radius: 10px;
    }

    &:hover {
        cursor : pointer;
    }
  
    @media (max-width: 768px) {
      display: flex;
    }
`;

// 메뉴가 표시될 때의 스타일
export const DropdownMenu = styled.div`
    position: absolute;
    top: 8vh;
    right: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    overflow: hidden;
    max-height: 0;
    visibility: hidden;
    opacity: 0;
    background-color : white;
    transition: max-height 0.5s ease-in-out, visibility 0s linear 0.5s, opacity 0.5s ease;

    a {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: #e9e9e9;
        }
    }

    div {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            cursor : pointer;
            background-color: #e9e9e9;
        }
    }

    &.active {
      max-height: 500px;
      visibility: visible;
      opacity: 1;
      transition: max-height 0.5s ease-in-out, opacity 0.5s ease, visibility 0s;
    }
`;
