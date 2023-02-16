import { AppBar, Box, Container, Typography, Button } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import { useContext } from "react";
import { ColorModeContext } from "@src/App";
import { useTheme } from "@mui/styles";
import { Theme } from "@mui/material";

export const Toolbar = () => {
  const theme: Theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <AppBar position="fixed" color="default" sx={{
      boxShadow: "0px 0px 8px 0px #0000003d"
    }}>
      <Container maxWidth="lg" sx={{ p: 0 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }} py={2}>
          <Box>
            <Typography component="h1" variant="h6">
              Where in the world?
            </Typography>
          </Box>
          <Button
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              color: theme.palette.text.primary,
            })}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness5OutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
            <Typography variant="body1" component="span" sx={{ ml: 1 }}>
              {theme.palette.mode === "dark" ? "Light" : "Dark"} mode
            </Typography>
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
};
