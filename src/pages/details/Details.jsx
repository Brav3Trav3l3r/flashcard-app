import { useParams } from "react-router-dom";
import styled from "styled-components";
import details from "../../data/details.json";
import FlashCards from "./FlashCards";
import Controller from "./Controller";

export default function Details() {
  const params = useParams();

  return (
    <DetailsContainer>
      <h1>{details.title}</h1>
      <FlashCards details={details} />
      <Controller />
    </DetailsContainer>
  );
}

const DetailsContainer = styled.div`
  margin-top: 4rem;
  position: relative;

  h1 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral};
  }
`;
