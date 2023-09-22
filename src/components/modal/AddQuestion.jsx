import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { ModalCard } from "./ModalCard";
import { Form, FormButton, Input } from "../styles/Form.styled";
import { db } from "/firebase/firebase-config";
import { setDoc, doc, arrayUnion } from "firebase/firestore";

export default function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const params = useParams();
  const { id: id, subjectId: subjectId } = params;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionsDocRef = doc(db, `flashcards/${subjectId}/${id}/questions`);
    await setDoc(
      questionsDocRef,
      {
        questions: arrayUnion({ question, answer }),
      },
      { merge: true }
    );
    setQuestion("");
    setAnswer("");
  };

  return (
    <ModalCard>
      <h3>Add questions</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Textarea
          type="text"
          name="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <FormButton>ADD</FormButton>
      </Form>
    </ModalCard>
  );
}

const Textarea = styled.textarea`
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;
