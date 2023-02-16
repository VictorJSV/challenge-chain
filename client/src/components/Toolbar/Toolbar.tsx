import {
  AppBar,
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


export const Toolbar = () => {
  return (
    <AppBar position="fixed" color="default">
      <Container maxWidth="lg" sx={{ p: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: "space-between" }} py={2}>
          <Box>
            <Typography component="h1" variant="h6">
              Where in the world?
            </Typography>
          </Box>
          <Button sx={{ display: "flex", alignItems: "center" }}>
            <DarkModeOutlinedIcon sx={{ mr: 1 }} />
            Dark mode
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
};
