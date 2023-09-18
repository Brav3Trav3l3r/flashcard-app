import styled from "styled-components";

export default function AddCollection() {
  return (
    <ModalCard>
      <p>Add collection</p>
    </ModalCard>
  );
}

const ModalCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.cardContent};
`;
