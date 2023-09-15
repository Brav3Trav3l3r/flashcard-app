import styled from "styled-components";
import Card from "./Card";

export default function Collection({ data }) {
  return (
    <>
      <Title>{data.title}</Title>
      <Grid>
        {data.topics.map((c) => (
          <Card key={c.id} cardDetail={c} />
        ))}
      </Grid>
    </>
  );
}

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral};
  padding: 1rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
