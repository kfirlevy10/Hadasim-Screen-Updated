import React from "react";
import list from "../list/list";
import SoldierModal from "./SoldierModal";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuField,
  NativeSelect,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({ table: { minWidth: 650 } });

class SoldiersTable extends React.Component {
  state = {
    soldiers: list,
    selectedSoldier: undefined,
    filteredSoldiers: list,
  };

  handleSearchBar = (e) => {
    const input = e.target.value.trim("");
    const filteredSoldiers = this.state.soldiers.filter((soldier) =>
      soldier.name.includes(input)
    );
    this.setState({
      filteredSoldiers,
    });
  };

  handleRowClick = (e) => {
    const soldierName = e.target.textContent; //not about the textContent
    //console.log(e.target)
    this.setState(() => ({
      selectedSoldier: soldierName,
    }));
  };

  render() {
    return (
      <TableContainer component={Paper}>
        <TextField
          type="text"
          placeholder="חיפוש לפי חייל"
          onChange={this.handleSearchBar}
        ></TextField>

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
                className="table-row"
                onClick={this.handleRowClick}
              >
                <TableCell align="right" scope="row">
                  {soldier.name}
                </TableCell>
                <TableCell align="right">{soldier.id}</TableCell>
                <TableCell align="right">{soldier.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <SoldierModal
          selectedSoldier={this.state.selectedSoldier}
          soldierName={this.state.soldiers.name}
          soldierId={this.state.soldiers.id}
          soldierUnit={this.state.soldiers.unit}
        />
      </TableContainer>
    );
  }
}

export default SoldiersTable;
