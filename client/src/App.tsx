import { Suspense } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Box, createTheme, CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { Toolbar } from "./components";
import { Home } from "./pages/Home";

const theme = createTheme({
  typography: {
    htmlFontSize: 18,
  },
});

export const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#FAFAFA" }
        }}
      />
      <Suspense fallback={<>Cargando ...</>}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Toolbar />
            <Box sx={{ marginTop: 12 }}>
              <Home />
            </Box>
          </Provider>
        </ThemeProvider>
      </Suspense>
    </>
  );
};
