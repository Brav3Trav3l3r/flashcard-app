import { useParams } from "react-router-dom";
import styled from "styled-components";
import FlashCards from "./FlashCards";
import Controller from "./Controller";
import { useEffect, useState } from "react";
import { db } from "/firebase/firebase-config";
import { doc, onSnapshot } from "firebase/firestore";

export default function Details() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState({});

  const params = useParams();
  const { id: id, subjectId: subjectId } = params;

  useEffect(() => {
    async function getQuestions() {
      const questionsDocRef = doc(
        db,
        `flashcards/${subjectId}/${id}/questions`
      );

      const unsubSnapshot = onSnapshot(questionsDocRef, (snapshot) => {
        if (snapshot.exists()) {
          setQuestions(snapshot.data().questions);
        } else {
          console.log("Adding empty questions array");
        }
      });

      return () => unsubSnapshot();
    }

    getQuestions();
  }, [id, subjectId]);

  useEffect(() => console.log("useEffect", questions), [questions]);

  return (
    <DetailsContainer>
      <h1>{`${subjectId} - ${id}`}</h1>
      <FlashCards questions={questions} currentIndex={currentIndex} />
      {questions?.length && (
        <Controller
          length={questions.length}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
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
    color: ${({ theme }) => theme.colors.accent};
  }
`;
