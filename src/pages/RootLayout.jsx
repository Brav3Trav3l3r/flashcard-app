import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import styled from "styled-components";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import AddQuestion from "../components/modal/AddQuestion";
import AddCollection from "../components/modal/AddCollection";
import Footer from "../components/Footer";

export default function RootLayout() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <MainNavigation setIsOpen={setIsOpen} />
        {isOpen && (
          <Modal setIsOpen={setIsOpen}>
            {location.pathname == "/" ? <AddCollection /> : <AddQuestion />}
          </Modal>
        )}
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  padding: 2rem;
  max-width: 1024px;
  margin: 0 auto 4rem auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
