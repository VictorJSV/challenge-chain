import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { FormControlStyled } from "./styled";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

interface Props {
  items: {
    id: string;
    label: string;
  }[];
  label: string;
  handleChange: (value: string) => void
}

export const SelectFilter = ({ items, label, handleChange }: Props) => {
  const [filterValue, setFilterValue] = useState("");
  const handleOnChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setFilterValue(value);
    handleChange(value)
  };

  return (
    <FormControlStyled focused={false}>
      <Select
        sx={{ minWidth: "180px" }}
        value={filterValue}
        onChange={handleOnChange}
        displayEmpty
        renderValue={(selected) => {
          if (selected.length === 0) {
            return label;
          }
          return selected;
        }}
        IconComponent={(props) => <KeyboardArrowDown {...props} />}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControlStyled>
  );
};
