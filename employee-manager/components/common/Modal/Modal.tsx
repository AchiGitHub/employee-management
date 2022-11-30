import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { modalStyle } from "../../../common/utils/constants";
import styles from "./Modal.module.css";

interface ModalProps {
  title: string;
  open: boolean;
  loading: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

function ModalComponent({
  title,
  open,
  loading,
  handleClose,
  handleDelete,
}: ModalProps) {

  const closeModal = () => handleClose();
  const deleteUser = () => handleDelete();
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <div className={styles.top}>
          <IconButton onClick={closeModal}>
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
              Are you sure you want to delete {`${title}`}?
            </Typography>
          </div>
          {loading ? (
            <IconButton>
              <CircularProgress />
            </IconButton>
          ) : (
            <div className={styles.footer}>
              <Button variant="contained" onClick={closeModal}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={deleteUser}
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

export default ModalComponent;
