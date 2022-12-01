import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FC } from "react";

interface IFilterProps {
  getTodoItems: (value: string) => void;
}

const Filter: FC<IFilterProps> = ({ getTodoItems }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Filter</FormLabel>
      <RadioGroup
        defaultValue=""
        name="radio-buttons-group"
        row
        onChange={(e) => getTodoItems(e.target.value)}
      >
        <FormControlLabel value="" control={<Radio />} label="All" />
        <FormControlLabel value="true" control={<Radio />} label="Done" />
        <FormControlLabel value="false" control={<Radio />} label="Undone" />
      </RadioGroup>
    </FormControl>
  );
};

export default Filter;
