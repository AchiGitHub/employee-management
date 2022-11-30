import { IconButton } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import styles from "./Operations.module.css";
import Link from "next/link";

interface OperationsProps {
  id: string;
  handleDelete: (id: string) => void;
}

function Operations({ id, handleDelete }: OperationsProps) {

  const deleteEmployee = () => handleDelete(id);

  return (
    <div className={styles.actionItem}>
      <Link href={`/employee/edit/${id}`}>
        <IconButton>
          <FiEdit size="20px" />
        </IconButton>
      </Link>
      <IconButton aria-label="delete" onClick={deleteEmployee}>
        <MdDelete size="20px" color="E94560" />
      </IconButton>
    </div>
  );
}

export default Operations;
