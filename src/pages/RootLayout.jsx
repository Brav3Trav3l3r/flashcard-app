import { useEffect, useState } from "react";
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
    type: "dark",
    colors: {
      body: "#161213",
      card: "#19342A",
      cardContent: "#CBD3CE",
      primary: "#CAC8C8",
      secondary: "#1EB854",
      secondaryFocus: "#189B46",
      accent: "#1DB891",
      neutral: "#CBD3CE",
      footer: "#020302",
    },
  };

  const lightTheme = {
    type: "light",
    colors: {
      body: "#FEFEFF",
      card: "#1E2837",
      cardContent: "#D8DDE4",
      primary: "#1E2837",
      secondary: "#570DF8",
      secondaryFocus: "#4B07DB",
      accent: "#F001B9",
      neutral: "#2B3440",
      footer: "#F3F2F3",
    },
  };

  const [theme, setTheme] = useState(lightTheme);

  function toggleTheme() {
    if (theme.type == "light") {
      setTheme(darkTheme);
      localStorage.setItem("theme", JSON.stringify(darkTheme));
    } else {
      setTheme(lightTheme);
      localStorage.setItem("theme", JSON.stringify(lightTheme));
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    } else {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <MainNavigation
          setIsOpen={setIsOpen}
          theme={theme}
          toggleTheme={toggleTheme}
        />
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
