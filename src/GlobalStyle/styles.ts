import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${props => props.theme.colors.base.background};
        display: flex;
        justify-content: center;
    }
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.colors.brand.purple};
    }
    
`