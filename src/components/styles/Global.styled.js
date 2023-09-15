import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    *{
        box-sizing: b;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: ${(props) => props.theme.colors.body};
        color: ${({ theme }) => theme.colors.primary}
    }
`;
