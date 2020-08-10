import React from "react";
import SearchBar from "./SearchBar";
import SoldiersTable from "./Table";

class NameScreen extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SoldiersTable />
      </div>
    );
  }
}

export default NameScreen;
