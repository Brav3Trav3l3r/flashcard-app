import React from "react";
import styled from "styled-components";

export default function Modal({ children, setIsOpen }) {
  return (
    <ModalStyled>
      <ContentStyled>{children}</ContentStyled>
      <Backdrop onClick={() => setIsOpen((prev) => !prev)} />
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled.div`
  cursor: pointer;
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.body};
  opacity: 60%;
  z-index: 0;
`;

const ContentStyled = styled.div`
  position: relative;
  z-index: 10;
`;
