import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: ${(props) => props.theme.colors.body};
        color: ${({ theme }) => theme.colors.primary}
    }
`;
