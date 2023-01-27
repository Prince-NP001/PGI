import { Modal } from "@mui/material";
import React from "react";

const StatesModal = () => {
  return (
    <Modal open={true}>
      {" "}
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
    </Modal>
  );
};

export default StatesModal;
