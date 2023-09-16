import { useParams } from "react-router-dom";
import styled from "styled-components";
import details from "../../data/details.json";
import FlashCards from "./FlashCards";
import Controller from "./Controller";
import { useEffect, useState } from "react";

export default function Details() {
  const params = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <DetailsContainer>
      <h1>{details.title}</h1>
      <FlashCards questions={details.questions} currentIndex={currentIndex} />
      <Controller
        length={details.questions.length}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
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
