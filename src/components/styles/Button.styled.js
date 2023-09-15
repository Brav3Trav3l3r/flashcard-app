import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  color: ${({ theme }) => theme.colors.neutral};

  &:focus {
    color: #4d2db7;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;
