import React from "react";
import { collection, onSnapshot } from "firebase/firestore";
import styled from "styled-components";
import cards from "../../data/cards.json";
import Collection from "./Collection";
import { db } from "../../../firebase/firebase";

export default function CardCollection() {
  const colRef = collection(db, "books");

  // onSnapshot(colRef, (snapshot) => {
  //   let books = [];
  //   snapshot.docs.forEach((doc) => {
  //     books.push({ ...doc.data(), id: doc.id });
  //   });
  //   console.log(books);
  // });

  return (
    <CardColllectionStyled>
      {cards.collection.map((c) => (
        <Collection key={c.id} data={c} />
      ))}
    </CardColllectionStyled>
  );
}

const CardColllectionStyled = styled.div`
  margin-top: 2rem;
`;
