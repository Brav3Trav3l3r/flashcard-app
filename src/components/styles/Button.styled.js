import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  padding: ${(props) => props.$padding ?? "0.5rem"};
  color: ${({ theme }) => theme.colors.neutral};
  display: flex;

  &:hover {
    color: ${({ $color }) => $color ?? "gray"};
    cursor: pointer;
  }
`;
