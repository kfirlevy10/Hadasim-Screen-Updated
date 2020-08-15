import React from "react";
import Modal from "react-modal";
import list from "../list/list";
import {
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const SoldierModal = (props) => {
  return (
    <Modal
      id="modalId"
      className="modal"
      isOpen={Object.keys(props.selectedSoldier).length > 0}
      contentLabel="Selected Soldier"
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <div>
        <p className="modal-title" style={{ fontWeight: "bold" }}>
          שם: {props.soldierName}
        </p>
        <p className="modal-title" style={{ fontWeight: "bold" }}>
          מס זיהוי: {props.soldierId}
        </p>
        <p className="modal-title" style={{ fontWeight: "bold" }}>
          יחידה: {props.soldierUnit}
        </p>

        <TableContainer>
          <h2 align="center">הסמכות שהסתיימו</h2>
          <Table size="medium" aria-label="simple-table">
            <TableHead>
              {list.map((soldier) =>
                soldier === props.selectedSoldier ? (
                  soldier.finished.length === 0 ? (
                    <h4 style={{ marginBottom: "30px" }}>אין הסמכות שהושלמו</h4>
                  ) : (
                    <TableRow className="table-head">
                      <TableCell align="right">ציון</TableCell>
                      <TableCell align="right">תאריך סיום</TableCell>
                      <TableCell align="right">שם הסמכה</TableCell>
                    </TableRow>
                  )
                ) : null
              )}
            </TableHead>
            <TableBody>
              {list.map((soldier) =>
                soldier === props.selectedSoldier
                  ? soldier.finished.map((course) => (
                      <TableRow key={course.courseName}>
                        <TableCell align="right">{course.grade}</TableCell>
                        <TableCell align="right">{course.finishDate}</TableCell>
                        <TableCell align="right">{course.courseName}</TableCell>
                      </TableRow>
                    ))
                  : null
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer>
          <h2 align="center">הסמכות בתהליך</h2>
          <Table size="medium" aria-label="simple-table">
            <TableHead>
              {list.map((soldier) =>
                soldier === props.selectedSoldier ? (
                  soldier.inProcess.length === 0 ? (
                    <h4 style={{ marginBottom: "30px" }}>אין הסמכות בתהליך</h4>
                  ) : (
                    <TableRow className="table-head">
                      <TableCell align="right">סטטוס הסמכה</TableCell>
                      <TableCell align="right">שלב נוכחי</TableCell>
                      <TableCell align="right">שם הסמכה</TableCell>
                    </TableRow>
                  )
                ) : null
              )}
            </TableHead>
            <TableBody>
              {list.map((soldier) =>
                soldier === props.selectedSoldier
                  ? soldier.inProcess.map((course) => (
                      <TableRow key={course.courseName}>
                        <TableCell align="right">
                          <LinearProgress
                            variant="determinate"
                            value={course.status}
                          />
                          {`${course.status}%`}
                        </TableCell>
                        <TableCell align="right">
                          {course.currentChapter}
                        </TableCell>
                        <TableCell align="right">{course.courseName}</TableCell>
                      </TableRow>
                    ))
                  : null
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Modal>
  );
};

export default SoldierModal;
