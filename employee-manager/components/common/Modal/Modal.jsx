import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./Modal.module.css";

function ModalComponent({ title, open, handleClose, handleDelete, loading }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={styles.top}>
          <IconButton onClick={() => handleClose()}>
            <IoCloseSharp size="20px" />
          </IconButton>
        </div>
        <div className={styles.body}>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Delete user?
            </Typography>
          </div>
          <div>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontSize: 14 }}
            >
              Are you sure you want to delete {`"${title}"`}?
            </Typography>
          </div>
          {loading ? (
            <IconButton>
              <CircularProgress />
            </IconButton>
          ) : (
            <div className={styles.footer}>
              <Button variant="contained" onClick={() => handleClose()}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete()}
              >
                Delete User
              </Button>
            </div>
          )}
        </div>
      </Box>
    </Modal>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #efefef",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  margin: "0 auto",
};

export default ModalComponent;
