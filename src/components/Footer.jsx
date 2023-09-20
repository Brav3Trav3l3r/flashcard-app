import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <FooterStyled>
      <IconStack>
        <Icon icon="skill-icons:vite-dark" width={30} />
        <Icon icon="skill-icons:react-dark" width={30} />
        <Icon icon="devicon:reactrouter" width={30} />
        <Icon icon="vscode-icons:file-type-styled" width={30} />
      </IconStack>
      <p>Made with ❤️ by Yash Gajbhiye</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.cardContent};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconStack = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0.5rem;
  /* background-color: ${({ theme }) => theme.colors.secondary}; */
  background-color: orange;
  border-radius: 0.5rem;
`;
