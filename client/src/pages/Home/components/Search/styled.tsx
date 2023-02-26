import { Box, BoxProps, styled } from "@mui/material";

export const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    minWidth: "350px",
  },
  background: theme.palette.background.default,
  color: theme.palette.text.disabled,
  boxShadow: "0px 0px 4px 0px #6f7a8130",
  borderRadius: 1,
}));
