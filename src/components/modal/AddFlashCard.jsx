import React, { useState } from "react";
import { ModalCard } from "./ModalCard";
import { Form, FormButton, Input } from "../styles/Form.styled";
import { db } from "/firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";

export default function AddFlashcard({ data, setIsOpen }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, `flashcards/${data.id}`);
    await updateDoc(docRef, {
      topics: [inputValue, ...data.topics],
    });

    setIsOpen(false);
    setInputValue("");
  };

  return (
    <ModalCard>
      <h3>Add flashcards to {data.title}</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="collection"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <FormButton>ADD</FormButton>
      </Form>
    </ModalCard>
  );
}
