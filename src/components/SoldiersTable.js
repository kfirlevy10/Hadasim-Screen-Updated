import React from "react";
import list from "../list/list";
import SearchBar from "./SearchBar";
import SoldierModal from "./SoldierModal";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

class SoldiersTable extends React.Component {
  state = {
    soldiers: list,
    selectedSoldier: {},
    filteredSoldiers: list,
    selectedFilter: "byName",
  };

  handleFilter = (e) => {
    this.setState({
      selectedFilter: e.target.options[e.target.options.selectedIndex].id,
    });
  };

  handleSearchBar = (e) => {
    const input = e.target.value.trim("");
    let filteredSoldiers;
    if (this.state.selectedFilter === "byName") {
      filteredSoldiers = this.state.soldiers.filter(
        (soldier) =>
          (soldier.firstName.startsWith(input) &&
            soldier.firstName.includes(input)) ||
          (soldier.lastName.startsWith(input) &&
            soldier.lastName.includes(input))
      );
    } else if (this.state.selectedFilter === "byId") {
      filteredSoldiers = this.state.soldiers.filter(
        (soldier) => soldier.id.startsWith(input) && soldier.id.includes(input)
      );
    } else if (this.state.selectedFilter === "byUnit") {
      filteredSoldiers = this.state.soldiers.filter(
        (soldier) =>
          soldier.unit.startsWith(input) && soldier.unit.includes(input)
      );
    }

    this.setState({
      filteredSoldiers,
    });
  };

  handleRowClick = (e) => {
    const soldierData = e.target.parentElement.id; // selected soldier's id
    let selectedSoldier = this.state.soldiers.filter(
      (soldier) => soldier.id === soldierData
    );
    selectedSoldier = selectedSoldier[0]; // convert selectedSoldier from array to object
    this.setState(() => ({
      selectedSoldier,
    }));
  };

  handleCloseModal = () => {
    this.setState({
      selectedSoldier: {},
    });
  };

  render() {
    return (
      <TableContainer component={Paper}>
        <SearchBar
          handleSearchBar={this.handleSearchBar}
          handleFilter={this.handleFilter}
        />
        <Table size="medium" aria-label="simple table">
          <TableHead>
            <TableRow className="table-head">
              <TableCell align="right">שם החייל</TableCell>
              <TableCell align="right">מס זיהוי</TableCell>
              <TableCell align="right">יחידה</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.filteredSoldiers.map((soldier) => (
              <TableRow
                key={soldier.id}
                id={soldier.id}
                className="table-row"
                onClick={this.handleRowClick}
              >
                <TableCell align="right" scope="row">
                  {`${soldier.firstName} ${soldier.lastName}`}
                </TableCell>
                <TableCell align="right">{soldier.id}</TableCell>
                <TableCell align="right">{soldier.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <SoldierModal
          selectedSoldier={this.state.selectedSoldier}
          soldierName={`${this.state.selectedSoldier.firstName} ${this.state.selectedSoldier.lastName}`}
          soldierId={this.state.selectedSoldier.id}
          soldierUnit={this.state.selectedSoldier.unit}
          showModal={Object.keys(this.state.selectedSoldier).length > 0}
          handleCloseModal={this.handleCloseModal}
        />
      </TableContainer>
    );
  }
}

export default SoldiersTable;
