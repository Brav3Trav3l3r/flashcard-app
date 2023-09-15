import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./pages/RootLayout";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  const theme = {
    colors: {
      body: "#000000",
      card: "#F0E7D6",
      cardContent: "#1A1A1A",
      primary: "#D5D5D5",
      secondary: "#FDFC97",
      neutral: "#616161",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
