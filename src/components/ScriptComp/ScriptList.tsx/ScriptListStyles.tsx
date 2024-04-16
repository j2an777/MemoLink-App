import styled, { keyframes } from "styled-components";
import { downAnime } from "../ScriptCompStyles";

export const Wrapper = styled.div`
    width : 100%;
    min-height : 100%;
    display : flex;
    flex-direction : column;
    background-color : #EBFFEF;
    border-radius : 30px 0 0 30px;
    margin-top : 20px;
    padding : 30px 0;
    box-sizing : border-box;

    @media (max-width : 768px) {
        width : 100vw;
        min-height : auto;
        border-radius : 0;
        margin-top : 20px;
    }
`;

export const FolderTop = styled.div`
    position : relative;
    width : 100%;
    height : 50px;
    display : flex;
    padding : 30px 50px;
    align-items : center;
    justify-content : space-between;

    @media (max-width : 768px) {
        padding : 0 30px;
        box-sizing : border-box;
    }
`;

export const FolderInfo = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
    margin : 0;
    padding : 0;
`;

export const FolderTitle = styled.h1`
    font-size : 2.5rem;
    font-family : 'Poppins';
    font-weight : 700;
    color : #444;
    margin : 0;
`;

interface FolderStarsProps {
    $isActive: boolean;
}

export const FolderStars = styled.div<FolderStarsProps>`
    width : 100px;
    height : 40px;
    margin : 0 0 0 30px;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    border-radius : 15px;
    border : 1px solid ${props => props.$isActive ? '#03d100' : '#78EE76'};
    background-color : white;
    transition : all 0.3s ease;

    p {
        font-size : 20px;
        font-family : 'Poppins';
        font-weight : 500;
        color : ${props => props.$isActive ? '#03d100' : '#78EE76' };
        padding : 0;
        margin : 0;
    }

    img {
        width : 20px;
        height : 20px;
        object-fit : contain;
    }

    &:hover {
        cursor : pointer;
        transform : scale(1.1);
    }
    &:active {
        transform : scale(0.9);
    }
`;

const plusAnime = keyframes`
    from {
        transform : rotate(0deg);
    }
    to {
        transform : rotate(360deg);
    }
`;

const colorChange = keyframes`
    0% {
        fill : #aaa;
    }

    100% {
        fill: #00B327;
    }
`;

export const FilePlus = styled.div`
    width : 50px;
    height : 50px;
    margin : 0;
    padding : 0;
    background-color : transparent;
    display : flex;
    align-items : center;
    justify-content : center;

    svg {
        fill: #aaa;
    }

    &:hover {
        cursor : pointer;
        svg {
            animation: ${plusAnime} 0.3s ease-in-out,
            ${colorChange} 0.3s ease-in-out forwards;
        }
    }
`;

const updownAnime = keyframes`
    0%, 100% {
        transform : translateY(-5px);
    }
    50% {
        transform : translateY(5px);
    }
`;

export const GuideImg = styled.img`
    position : absolute;
    top : -40px;
    right : 80px;
    width : 100px;
    height : 50px;
    object-fit : contain;
    animation : ${updownAnime} 2s ease-in-out infinite;
`;

export const NotePopupWrapper = styled.div<{isSettingPopup : boolean}>`
    position : fixed;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    width : ${props => props.isSettingPopup ? '900px' : '800px'};
    height : 600px;
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    background-color : transparent;
    border-radius : 20px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    z-index : 503;
    animation : ${downAnime} 0.3s ease-in-out;
    transition : width 0.3s ease, height 0.3s ease;

    @media (max-width : 1200px) {
        width : 70vw;
        height : 500px;
    }

    @media (max-width : 900px) {
        width : 100vw;
    }

    @media (max-width : 768px) {
        height : ${props => props.isSettingPopup ? '600px' : '500px'};
    }
`;

export const RightSettingBox = styled.div`
    width : 100%;
    height : auto;
    margin : 0 0 10px 0;
    padding : 0;
    display : flex;
    justify-content : flex-end;
`;

export const RightSettingImg = styled.img`
    width : 40px;
    height : 30px;
    object-fit : contain;

    &:hover {
        cursor : pointer;
    }

    @media (max-width : 768px) {
        transform : rotate(-90deg);
        transform-origin : top 10px right;
    }
`;

export const Wrap = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    background-color : white;
    border-radius : 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

    @media (max-width : 768px) {
        flex-direction: column;
    }
`;

export const NPopupBox = styled.form`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    box-sizing : border-box;
`;

export const NTitleInput = styled.input`
    width : 100%;
    margin : 0;
    padding : 20px 20px;
    outline : none;
    border : 1px solid #ccc;
    border-radius : 10px;
    box-sizing : border-box;
    font-size : 24px;
    &::placeholder {
        font-size : 24px;
    }
`;

export const NTagInput = styled.input`
    width : 100%;
    margin : 0;
    padding : 20px 20px;
    outline : none;
    border : none;
    box-sizing : border-box;
    font-size : 20px;

    &::placeholder {
        font-size : 20px;
    }
`;

export const NConfirm = styled.input`
    font-size : 16px;
    margin : 15px 0 0 0;
    padding : 10px 30px;
    box-sizing : border-box;
    background-color : #03D100;
    color : white;
    border : none;
    border-radius : 15px;
    box-sizing : border-box;
    font-size : 24px;
    transition : all 0.3s ease;

    &:hover {
        cursor : pointer;
        background-color : #00B327;
    }

    &:active {
        transform : scale(0.9);
    }
`;

export const TextContainer = styled.div`
    width : 100%;
    flex-grow : 1;
    margin : auto;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;
    overflow : auto;

    .quill {
        img {
            width : 300px;
            height : auto;
        }
        height : 100%;
        width : 100%;
    }
`;

export const TagBlock = styled.span`
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

export const SettingPopupWrapper = styled.div`
    width : 150px;
    height : 100%;
    animation : ${downAnime} 0.5s ease-in-out;
    display : none;
    flex-direction : column;
    align-items : center;
    justify-content : space-between;

    &.active {
        display : flex;
    }

    @media (max-width : 768px) {
        width : 100%;
        height : 70px;
        flex-direction : row;
        padding : 0 20px;
        box-sizing : border-box;
        justify-content : space-evenly;
    }

    @media (max-width : 450px) {
        justify-content : space-between;
    }
`;

export const SetImgBox = styled.img`
    width : 60px;
    height : 60px;
    object-fit : contain;
    border-radius : 20px;
    border : 1px solid #c9c9c9;
    margin : 20px 0 0 0;

    @media (max-width : 768px) {
        margin : 0;
        width : 40px;
        height : 40px;
        border-radius : 10px;
    }

    @media (max-width : 450px) {
        width : 35px;
        height : 35px;
    }
`;

export const SetImgButton = styled.label`
    width : 50px;
    height : 50px;
    background-color : transparent;
    border : none;
    background-image: url('/image.svg');
    background-size : cover;
    background-position : center;
    margin : 20px 0 20px 0;

    &:hover {
        cursor : pointer;
    }

    @media (max-width : 768px) {
        width : 40px;
        height : 40px;
        margin : 0;
    }

    @media (max-width : 450px) {
        width : 35px;
        height : 35px;
    }
`;

export const SetImgFileInput = styled.input`
    display : none;
`;

export const ColorLine = styled.div`
    width : 100%;
    height : 1px;
    margin : 0;
    padding : 0;
    background-color : #c9c9c9;

    @media (max-width : 768px) {
        display : none;
    }
`;

interface SvgProps {
    stroke?: string;
}

const NoteSvg: React.FC<SvgProps> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 40L40 26M26 40V28C26 27.4696 26.2107 26.9609 26.5858 26.5858C26.9609 26.2107 27.4696 26 28 26H40M26 40H12C10.9391 40 9.92172 39.5786 9.17157 38.8284C8.42143 38.0783 8 37.0609 8 36V12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8H36C37.0609 8 38.0783 8.42143 38.8284 9.17157C39.5786 9.92172 40 10.9391 40 12V26" stroke={props.stroke || "#AAAAAA"} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const SetColorNote = styled(NoteSvg) `
    width : 50px;
    height : 50px;
    object-fit : contain;
`;

const PenSvg: React.FC<SvgProps> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.55401 39.5659L6.76801 31.2419C6.84201 30.6979 7.09001 30.1919 7.47801 29.8019L31 6.24794C31.305 5.93987 31.6841 5.71536 32.1009 5.59593C32.5177 5.47651 32.9581 5.46618 33.38 5.56594C35.539 6.16379 37.4961 7.33446 39.044 8.95394C40.659 10.5125 41.8216 12.4795 42.408 14.6459C42.5078 15.0678 42.4974 15.5083 42.378 15.9251C42.2586 16.3418 42.0341 16.7209 41.726 17.0259L18.178 40.5499C17.787 40.9363 17.2808 41.1849 16.736 41.2579L8.41401 42.4719C8.0209 42.5293 7.6198 42.4932 7.24326 42.3665C6.86671 42.2399 6.52531 42.0263 6.24674 41.743C5.96817 41.4598 5.76028 41.1149 5.63992 40.7363C5.51957 40.3577 5.49013 39.956 5.55401 39.5639M26.55 10.7279L37.276 21.4539" stroke={props.stroke || "#AAAAAA"} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const SetColorPen = styled(PenSvg)`
    width : 50px;
    height : 50px;
    object-fit : contain;
`;

export const ColorBox = styled.img`
    width : 50px;
    height : 50px;
    object-fit : contain;
    margin : 20px 0 20px 0;

    &:hover {
        cursor : pointer;
    }

    @media (max-width : 768px) {
        width : 40px;
        height : 40px;
    }

    @media (max-width : 450px) {
        width : 35px;
        height : 35px;
    }
`;