import React, { useCallback, useEffect, useState } from "react";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import styled from "styled-components";
import Collection from "./Collection";
import { db } from "../../../firebase/firebase-config";

export default function CardCollection() {
  const [flashcards, setFlashcards] = useState([]);
  let unsubCollRef;

  const getLiveDocs = useCallback(() => {
    const colRef = collection(db, "flashcards");
    unsubCollRef = onSnapshot(colRef, (snapshot) => {
      let arr = [];
      snapshot.docs.forEach((d) => {
        arr.push({ id: d.id, ...d.data() });
      });
      setFlashcards(arr);
    });
  }, []);

  useEffect(() => {
    getLiveDocs();

    return () => unsubCollRef();
  }, []);

  return (
    <CardColllectionStyled>
      {flashcards.length &&
        flashcards.map((c) => <Collection key={c.id} data={c} />)}
    </CardColllectionStyled>
  );
}

const CardColllectionStyled = styled.div`
  margin-top: 2rem;
`;
