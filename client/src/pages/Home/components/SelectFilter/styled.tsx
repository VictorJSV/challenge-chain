import { FormControl, styled } from "@mui/material";

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
  "& fieldset": { border: "none" },
  ".MuiOutlinedInput-input": { padding: "12px 15px" },
  background: theme.palette.background.default,
  boxShadow: theme.shadows[1],
  borderRadius: 1,
  [theme.breakpoints.down("sm")]: {
    marginTop: 30,
  },
}));
