import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const AppStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        font-family : "Poppins", sans-serif;
    }
`;