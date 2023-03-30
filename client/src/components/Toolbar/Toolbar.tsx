import { AppBar, Box, Container, Typography, Button } from "@mui/material";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import { useContext } from "react";
import { ColorModeContext } from "@src/App";
import { Theme, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons/faMoon";
import { TitleTypography } from "./styled";

export const Toolbar = () => {
  const theme: Theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        boxShadow: "0px 0px 8px 0px #0000003d",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Box>
            <TitleTypography component="h1">
              Where in the world?
            </TitleTypography>
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
              <FontAwesomeIcon
                transform={{ rotate: -20 }}
                fontSize={16}
                icon={faMoon}
              />
            )}
            <Typography
              variant="body1"
              component="span"
              fontWeight={600}
              sx={{ ml: 1 }}
            >
              {theme.palette.mode === "dark" ? "Light" : "Dark"} mode
            </Typography>
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
};
