import { Suspense, lazy } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import {
  Box,
  createTheme,
  CssBaseline,
  PropTypes,
  ThemeProvider,
} from "@mui/material";
import { IntlProvider } from "react-intl";

const theme = createTheme({});

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={<>Cargando ...</>}>
        <IntlProvider locale="en-US">
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Box sx={{ marginTop: 12 }}>Hello World</Box>
            </Provider>
          </ThemeProvider>
        </IntlProvider>
      </Suspense>
    </>
  );
};
