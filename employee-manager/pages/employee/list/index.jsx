import { createContext, useEffect, useState } from "react";
import Link from "next/link";
import { Button, Container, Stack, ToggleButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BsFillGridFill } from "react-icons/bs";
import { RiTableFill } from "react-icons/ri";

import Grid from "../../../components/ui/Grid";
import Table from "../../../components/ui/Table";
import styles from "../../../styles/Layout.module.css";
import { deleteEmployee, getEmployees } from "../../../services/Employees";
import ModalComponent from "../../../components/common/Modal/Modal";

export const EmployeesContext = createContext();

function EmployeeList() {
  const dispatch = useDispatch();
  const { loading, data, error, hasError } = useSelector(state => state.employees.list);
  const [isTableView, setIsTableView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    dispatch(getEmployees())
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const openModal = (user) => {
    setIsModalOpen(true);
    setSelectedUser(user);
  }

  const handleDelete = () => {
    dispatch(deleteEmployee(selectedUser));
  }

  return (
    <>
      <div className={styles.grid}>
        <Stack spacing={2} direction="row">
          <Link href="/employee/add">
            <Button variant="contained">ADD EMPLOYEE</Button>
          </Link>
          <ToggleButton
            value="check"
            selected={isTableView}
            onChange={() => {
              setIsTableView(!isTableView);
            }}
          >
            {isTableView ? <RiTableFill /> : <BsFillGridFill />}
          </ToggleButton>
        </Stack>
      </div>
      <EmployeesContext.Provider value={data}>
        <div className={styles.list}>{isTableView ? <Table handleDelete={openModal} /> : <Grid handleDelete={openModal} />}</div>
      </EmployeesContext.Provider>
      <ModalComponent open={isModalOpen} handleClose={closeModal} title={selectedUser} handleDelete={handleDelete} />
    </>
  );
}

export default EmployeeList;
