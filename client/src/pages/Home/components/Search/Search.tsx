import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { BoxStyled } from "./styled";
import { ChangeEvent } from "react";

interface Props {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ handleInput }: Props) => {
  return (
    <BoxStyled px={3} py={1} mb={1}>
      <SearchIcon color="inherit" />
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          borderRadius: 1,
        }}
        placeholder="Search for a country..."
        onInput={handleInput}
      />
    </BoxStyled>
  );
};
