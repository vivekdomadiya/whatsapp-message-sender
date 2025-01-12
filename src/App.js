import React, { useState, useEffect } from "react";
import { Container, CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MessageForm from "./components/MessageForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { blueGrey, grey } from "@mui/material/colors";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeConfig = createTheme({
    palette: {
      mode: theme,
      primary: {
        light: blueGrey[200],
        main: blueGrey[500],
        dark: blueGrey[800],
      },
      secondary: {
        light: grey[200],
        main: grey[500],
        dark: grey[900],
      }
    },
  });

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Box display="flex" flexDirection="column">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Container sx={{ flexGrow: 1, my: 3 }}>
          <Box display="flex" justifyContent="center">
            <Box width={{ xs: "100%", md: "50%" }}>
              <MessageForm />
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
