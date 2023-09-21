import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { GlobalStyles } from "../components/styles/Global.styled";
import MainNavigation from "../components/navigation/MainNavigation";
import Modal from "../components/modal/Modal";
import AddQuestion from "../components/modal/AddQuestion";
import AddCollection from "../components/modal/AddCollection";
import Footer from "../components/Footer";

export default function RootLayout() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const darkTheme = {
    type: 'dark',
    colors: {
      body: "#000000",
      card: "#F0E7D6",
      cardContent: "#1A1A1A",
      primary: "#D5D5D5",
      secondary: "#FDFC97",
      accent: "orange",
      neutral: "#616161",
    },
  };

  const lightTheme = {
    type: 'light',
    colors: {
      body: "#FEFEFF",
      card: "#1E2837",
      cardContent: "#D8DDE4",
      primary: "#1E2837",
      secondary: "#570DF8",
      accent: "#F001B9",
      neutral: "#2B3440",
    },
  };

  const [theme, setTheme] = useState(lightTheme);

  function toggleTheme() {
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <MainNavigation setIsOpen={setIsOpen} theme={theme} toggleTheme={toggleTheme} />
        {isOpen && (
          <Modal setIsOpen={setIsOpen}>
            {location.pathname == "/" ? <AddCollection /> : <AddQuestion />}
          </Modal>
        )}
        <Outlet />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

const Container = styled.div`
  padding: 2rem;
  max-width: 1024px;
  margin: 0 auto 4rem auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
