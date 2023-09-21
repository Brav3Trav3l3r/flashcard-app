import { useState } from "react";
import { ModalCard } from "./ModalCard";
import { Form, FormButton, Input } from "../styles/Form.styled";
import { db } from "/firebase/firebase-config";
import { setDoc, doc } from "firebase/firestore";

export default function AddCollection() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetDoc = doc(db, `flashcards/${inputValue}`);
    setDoc(
      targetDoc,
      {
        title: inputValue,
        topics: [],
      },
      { merge: true }
    )
      .then(() => console.log("added doc"))
      .catch((err) => console.log(err));

    setInputValue("");
  };

  return (
    <ModalCard>
      <h3>Add collection</h3>
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
