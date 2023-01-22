import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "./Form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  height: "650px",
  overflow: "scroll",
};

export default function FormButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="h-fit">
      <button
        onClick={handleOpen}
        className="border-[1px] text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 px-2 py-4 rounded"
      >
        Check Your Loan Safety
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-md">
          <button
            className="w-[35px] h-[35px] rounded-full border-[1px] border-gray-200 hover:"
            onClick={() => handleClose()}
          >
            X
          </button>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="div"
            className="block uppercase text-gray-700 font-bold mb-2 text-center"
          >
            Check Your Loan Safety
          </Typography>
          <hr className="pb-4" />
          <div>
            <Form handleClose={handleClose} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
