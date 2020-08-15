import React from "react";
import { TextField, NativeSelect } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
        marginBottom: "12px",
      }}
    >
      <form>
        <TextField
          className="search-filter--input"
          //variant="outlined"
          type="text"
          placeholder="חיפוש"
          onChange={props.handleSearchBar}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <NativeSelect onChange={props.handleFilter}>
          <option id="byName">חפש לפי שם</option>
          <option id="byId">חפש לפי מס זיהוי</option>
          <option id="byUnit">חפש לפי יחידה</option>
        </NativeSelect>
      </form>
    </div>
  );
};

export default SearchBar;
