import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }

    body {
        background: #1b1b1b;
        font-family: 'Poppins', sans-serif
    }

    .btn {
        font-weight: 600;
        font-size: clamp(0.75rem, 3vw, 1.2rem);
        cursor: pointer;
        border: 0.2em solid #23d997;
        color: white;
        transition: 300ms;
        padding: 0.5em 2em;

    }
`

export default GlobalStyle
