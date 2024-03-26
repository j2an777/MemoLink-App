import { useLocation } from "react-router-dom";
import { FooterContainer, FooterContent, FooterDesContainer, FooterDesRights, FooterLink, FooterLinkContainer, FooterLinkContent, FooterLinkTitle } from "./FooterStyles";

export default function Footer() {

    const location = useLocation();

    if (location.pathname === '/script' || location.pathname === '/review') {
        return null;
    }
    
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLinkContainer>
                    <FooterLinkTitle>
                        MemoLinx Kor.
                    </FooterLinkTitle>
                    <FooterLinkContent>
                        <FooterLink href="/">MemoLinx 소개</FooterLink>
                        <FooterLink href="/">고객 센터</FooterLink>
                        <FooterLink href="/">미디어 센터</FooterLink>
                        <FooterLink href="/">이용 약관</FooterLink>
                        <FooterLink href="/">개인정보</FooterLink>
                        <FooterLink href="/">회사정보</FooterLink>
                        <FooterLink href="/">문의하기</FooterLink>
                        <FooterLink href="/">법적 고지</FooterLink>
                        <FooterLink href="/">투자 정보</FooterLink>
                        <FooterLink href="/">입사 정보</FooterLink>
                        <FooterLink href="/">속도 테스트</FooterLink>
                        <FooterLink href="/">Only MemoLinx</FooterLink>
                    </FooterLinkContent>
                    <FooterDesContainer>
                        <FooterDesRights>
                            &copy; MemoLinx Rights Reserved.
                        </FooterDesRights>
                    </FooterDesContainer>
                </FooterLinkContainer>
            </FooterContent>
        </FooterContainer>
    )
}   