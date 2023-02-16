import { FormControl, styled } from "@mui/material";

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
  "& fieldset": { border: "none" },
  ".MuiOutlinedInput-input": { padding: "12px 15px" },
  background: theme.palette.background.default,
  boxShadow: "0px 0px 4px 0px #6f7a8130",
  borderRadius: 1,
}));
