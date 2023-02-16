import { createContext, Suspense, useMemo, useState } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import {
  Box,
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { Toolbar } from "./components";
import { Home } from "./pages/Home";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

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

  return (
    <>
      <Suspense fallback={<>Cargando ...</>}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
              styles={(theme) => ({
                body: {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? theme.palette.background.default
                      : "#FAFAFA",
                },
              })}
            />
            <Provider store={store}>
              <Toolbar />
              <Box mt={12}>
                <Home />
              </Box>
            </Provider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Suspense>
    </>
  );
};
