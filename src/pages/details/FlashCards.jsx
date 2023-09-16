import React from "react";
import styled from "styled-components";

export default function FlashCards({ details }) {
  return (
    <StackFlashCardStyled>
      <FalshCardStyled $move="0" $index="10">
        <div>
          <p>{details.questions[0].question}</p>
        </div>
      </FalshCardStyled>
      <FalshCardStyled $move="10px" $index="5"></FalshCardStyled>
      <FalshCardStyled $move="20px" $index="0"></FalshCardStyled>
    </StackFlashCardStyled>
  );
}

const FalshCardStyled = styled.div`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  z-index: 10;
  position: absolute;
  inset: 0;
  z-index: ${({ $index }) => $index};
  color: black;
  transform: translateY(${({ $move }) => $move});
  left: ${({ $move }) => $move};
  right: ${({ $move }) => $move};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5rem;
  }

  @media (max-width: 768px){
    p {
    font-size: 1.2rem;
  }
  }
`;

const StackFlashCardStyled = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  height: 400px;
  position: relative;

  @media (max-width: 768px){
    height: 300px;
  }
`;
