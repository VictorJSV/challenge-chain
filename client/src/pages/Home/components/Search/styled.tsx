import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  minWidth: "400px",
  background: "white",
  boxShadow: "0px 0px 4px 0px #6f7a8130",
  borderRadius: 1,
}));
