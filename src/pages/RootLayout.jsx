import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import styled from "styled-components";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import AddCollection from "../components/modal/addCollection";
import AddQuestion from "../components/modal/AddQuestion";

export default function RootLayout() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <MainNavigation setIsOpen={setIsOpen} />
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          {location.pathname == "/" ? <AddCollection /> : <AddQuestion />}
        </Modal>
      )}
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
