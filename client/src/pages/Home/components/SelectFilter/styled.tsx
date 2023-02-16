import { FormControl } from "@mui/material";
import styled from "styled-components";

export const FormControlStyled = styled(FormControl)(() => ({
  "& fieldset": { border: "none" },
  ".MuiOutlinedInput-input": { padding: "12px 15px" },
  background: "white",
  boxShadow: "0px 0px 4px 0px #6f7a8130",
  borderRadius: 1,
}));
