import { Box } from "@mui/material";
import styled from "styled-components";

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const ImageBox = styled(Box)({
  height: 140,
  overflow: "hidden",
  position: "relative",
  background: "#EEE",
});

export const CardBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "10px 0",
});
