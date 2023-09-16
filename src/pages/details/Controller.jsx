import styled from "styled-components";
import { Icon } from "@iconify/react";

export default function Controller(props) {
  return (
    <ControllerStyled>
      <ControllerButton
        onClick={() => {
          if (props.currentIndex > 0) {
            props.setCurrentIndex((prev) => prev - 1);
          }
        }}
      >
        <Icon icon="lucide:arrow-left" />
      </ControllerButton>
      <p>
        {props.currentIndex + 1}/{props.length}
      </p>
      <ControllerButton
        onClick={() => {
          if (props.currentIndex < props.length - 1) {
            props.setCurrentIndex((prev) => prev + 1);
          }
        }}
      >
        <Icon icon="lucide:arrow-right" />
      </ControllerButton>
    </ControllerStyled>
  );
}

const ControllerStyled = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  p {
    font-weight: 600;
    letter-spacing: 0.4rem;
  }
`;

const ControllerButton = styled.button`
  all: unset;
  padding: 0.5rem;
  border: 2px solid;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  width: 2rem;
  font-size: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.neutral};
    border: 2px solid transparent;
  }
`;
