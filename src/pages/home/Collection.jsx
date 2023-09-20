import styled from "styled-components";
import { Icon } from "@iconify/react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Button } from "../../components/styles/Button.styled";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import AddFlashcard from "../../components/modal/AddFlashCard";

export default function Collection({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <AddFlashcard data={data} setIsOpen={setIsOpen} />
        </Modal>
      )}

      <Title>
        {data.title}
        <Button
          $color={"orange"}
          $padding={"0px"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon icon="lucide:plus" width={20} />
        </Button>
      </Title>

      {data.topics.length ? (
        <Grid>
          {data.topics.map((c) => (
            <Link key={c} to={`${c.id}`}>
              <Card cardDetail={c} />
            </Link>
          ))}
        </Grid>
      ) : (
        <AddTopics>
          <p>Add flashcards for {data.title}.</p>
        </AddTopics>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Grid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AddTopics = styled.div`
  margin: 0.5rem 0;
  background-color: #fee2e3;
  padding: 0.5rem;
  border-radius: 0.2rem;
  color: #d7473a;
`;
