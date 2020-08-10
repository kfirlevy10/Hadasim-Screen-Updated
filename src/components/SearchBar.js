import React from "react";
import TextField from "@material-ui/core/Textfield";
import list from "../list/list";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soldiers: list,
      input: "",
    };
  }
  HandleSearchBar(e) {
    this.setState({
      input: e.target.value.trim(""),
    });
  }
  render() {
    return (
      <div>
        <form></form>
      </div>
    );
  }
}

export default SearchBar;
