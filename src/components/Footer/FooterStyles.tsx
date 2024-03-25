import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    width: 100%;
    position: relative;
    z-index: 100;
    margin-top: 70px;
    
    @media (max-width: 769px) {
        padding: 20px 20px;
        padding-bottom : 30px;
    }
`;

export const FooterContent = styled.div``;

export const FooterLinkContainer = styled.div`
    width : 500px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    color: #03D100;
    font-size: 17px
`;

export const FooterLinkContent = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 35px;

    @media (mamx-width: 768px) {
        margin-top: 26px;
    }
`;

export const FooterLink = styled.a`
    color: gray;
    font-size: 13px;
    width: 110px;
    margin-bottom: 21px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`;

export const FooterDesContainer = styled.div`
    display : flex;
    justify-content: center;
    margin-top: 30px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

export const FooterDesRights = styled.h2`
    color: #03D100;
    font-size: 14px;
    align-items: center;
`;