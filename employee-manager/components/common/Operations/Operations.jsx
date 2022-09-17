import { IconButton } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import styles from "./Operations.module.css";
import Link from "next/link";

function Operations({ id, handleDelete }) {
  return (
    <div className={styles.actionItem}>
      <Link href={`/employee/edit/${id}`}>
        <IconButton>
          <FiEdit size="20px" />
        </IconButton>
      </Link>
      <IconButton onClick={() => handleDelete(id)}>
        <MdDelete size="20px" color="E94560" />
      </IconButton>
    </div>
  );
}

export default Operations;
