import { createContext, lazy, Suspense, useState } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import {
  Box,
  CircularProgress,
  Container,
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { Toolbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
const Home = lazy(() => import("./pages/Home/Home"));
const Country = lazy(() => import("./pages/Country/Country"));

export const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  };
  const theme = createTheme({
    palette: { mode },
    typography: { htmlFontSize: 18 },
  });
  const body = {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.default
        : "#FAFAFA",
  };

  return (
    <>
      <Suspense
        fallback={
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress color="inherit" />
          </Box>
        }
      >
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={{ body }} />
            <Provider store={store}>
              <Toolbar />
              <Box mt={12}>
                <Container maxWidth="lg">
                  <BrowserRouter>
                    <Routes>
                      <Route path="*" element={<>NOT FOUND</>} />
                      <Route path="/" element={<Home />} />
                      <Route path="/country" element={<Country />} />
                    </Routes>
                  </BrowserRouter>
                </Container>
              </Box>
            </Provider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Suspense>
    </>
  );
};
