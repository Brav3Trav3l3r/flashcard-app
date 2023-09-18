import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.neutral};
  display: flex;
  
  &:hover {
    color: ${({ theme }) => theme.colors.card};
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.neutral};
  }
`;
