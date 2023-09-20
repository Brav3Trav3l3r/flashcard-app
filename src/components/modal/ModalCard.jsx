import styled from "styled-components";

export const ModalCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.cardContent};
  text-align: center;

  h3 {
    font-weight: 500;
  }
`;
