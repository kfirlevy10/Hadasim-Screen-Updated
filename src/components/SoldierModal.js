import React from "react";
import Modal from "react-modal";

const SoldierModal = (props) => (
  <Modal
    className="modal"
    isOpen={!!props.selectedSoldier}
    contentLabel="Selected Soldier"
    ariaHideApp={false}
  >
    <h3>{props.selectedSoldier}</h3>
  </Modal>
);

export default SoldierModal;
