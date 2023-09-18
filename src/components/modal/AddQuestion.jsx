import styled from "styled-components";

export default function AddQuestion() {
  return <ModalCard>AddQuestion</ModalCard>;
}

const ModalCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.cardContent};
`;
