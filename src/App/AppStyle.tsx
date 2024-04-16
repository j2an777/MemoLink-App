import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const AppStyles = createGlobalStyle`
    ${reset};
    
    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Regular.woff2') format('woff2'),
             url('/fonts/Pretendard-Regular.woff') format('woff'); 
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family : "Pretendard", sans-serif;
    }
`;