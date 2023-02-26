import { createContext, lazy, Suspense, useMemo, useState } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {
  Box,
  CircularProgress,
  Container,
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import { Toolbar } from "./components";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { getConfigTheme, ICustomTheme } from "./configTheme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
const Home = lazy(() => import("./pages/Home/Home"));
const Country = lazy(() => import("./pages/Country/Country"));

const Layout = ({ color }: { color: "primary" | "secondary" }) => {
  const theme = useTheme<ICustomTheme>();
  const body = {
    backgroundColor:
      color === "primary"
        ? theme.palette.background.primary
        : theme.palette.background.secondary,
  };
  return (
    <>
      <GlobalStyles styles={{ body }} />
      <Outlet />
    </>
  );
};

export const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  };
  const theme = useMemo(() => createTheme(getConfigTheme(mode)), [mode]);
  return (
    <>
      <Suspense
        fallback={
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress color="inherit" />
          </Box>
        }
      >
        <IntlProvider locale="en-US">
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Provider store={store}>
                <Toolbar />
                <Box mt={12} mb={4}>
                  <Container maxWidth="lg">
                    <BrowserRouter>
                      <Routes>
                        <Route path="*" element={<>NOT FOUND</>} />
                        <Route element={<Layout color="primary" />}>
                          <Route path="/" element={<Home />} />
                        </Route>
                        <Route element={<Layout color="secondary" />}>
                          <Route path="/country/:code" element={<Country />} />
                        </Route>
                      </Routes>
                    </BrowserRouter>
                  </Container>
                </Box>
              </Provider>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </IntlProvider>
      </Suspense>
    </>
  );
};
