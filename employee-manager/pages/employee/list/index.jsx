import { createContext, useEffect, useState } from "react";
import Link from "next/link";
import { Button, IconButton, Stack, ToggleButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BsFillGridFill } from "react-icons/bs";
import { RiTableFill } from "react-icons/ri";
import { HiRefresh } from "react-icons/hi";

import Grid from "../../../components/ui/Grid";
import Table from "../../../components/ui/Table";
import styles from "../../../styles/Layout.module.css";
import { deleteEmployee, getEmployees } from "../../../services/Employees";
import ModalComponent from "../../../components/common/Modal/Modal";
import ErrorBoundary from "../../../components/common/Errors/ErrorBoundary";

export const EmployeesContext = createContext();

function EmployeeList() {
  const dispatch = useDispatch();
  const { loading, data, error, hasError } = useSelector(
    (state) => state.employees.list
  );
  const deleteData = useSelector((state) => state.employees.employee);
  const [isTableView, setIsTableView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    handleGetAllEmployees();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (user) => {
    setIsModalOpen(true);
    setSelectedUser(user);
  };

  const handleDelete = () => {
    dispatch(
      deleteEmployee({
        userId: selectedUser,
        callback: () => setIsModalOpen(false),
      })
    );
  };

  const handleGetAllEmployees = () => {
    dispatch(getEmployees());
  };

  const getUsername = (id) => {
    const userIdx = data.findIndex((user) => user._id === id);
    if (userIdx > -1) {
      return `${data[userIdx]?.first_name} ${data[userIdx]?.last_name}`;
    }
    return "";
  };

  if (hasError) {
    return (
      <div className={styles.notfound}>
        <div>
          <h4>Something went wrong!</h4>
        </div>
        <IconButton onClick={() => handleGetAllEmployees()}>
          <HiRefresh />
        </IconButton>
      </div>
    );
  }

  return (
    <ErrorBoundary>
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
        <div className={styles.list}>
          {isTableView ? (
            <Table handleDelete={openModal} />
          ) : (
            <Grid handleDelete={openModal} />
          )}
        </div>
      </EmployeesContext.Provider>
      <ModalComponent
        open={isModalOpen}
        handleClose={closeModal}
        title={getUsername(selectedUser)}
        handleDelete={handleDelete}
        loading={deleteData.loading}
      />
    </ErrorBoundary>
  );
}

export default EmployeeList;
