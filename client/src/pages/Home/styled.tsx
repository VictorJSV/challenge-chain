import { Box, BoxProps, styled } from "@mui/material";
import styledC from "styled-components";

export const Image = styledC.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const ImageBox = styled(Box)<BoxProps>({
  height: 140,
  overflow: "hidden",
  position: "relative",
  background: "#EEE",
});

export const CardBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  alignItems: "start",
  justifyContent: "space-between",
}));

export const ListBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: "0 auto",
  [theme.breakpoints.up("xs")]: {
    maxWidth: "300px",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "700px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "inherit",
  },
}));
