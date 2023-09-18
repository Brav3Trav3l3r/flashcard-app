import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../styles/Input.styled";
import { Button } from "../styles/Button.styled";

export default function AddCollection() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => console.log(inputValue), [inputValue]);

  return (
    <ModalCard>
      <h4>Add collection</h4>
      <form action="">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </ModalCard>
  );
}

const ModalCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.cardContent};
`;
