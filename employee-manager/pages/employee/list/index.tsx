import { createContext, useEffect, useState } from "react";
import Link from "next/link";
import { Button, IconButton, Stack, ToggleButton } from "@mui/material";
import { BsFillGridFill } from "react-icons/bs";
import { RiTableFill } from "react-icons/ri";
import { HiRefresh } from "react-icons/hi";

import Grid from "../../../components/ui/Grid";
import Table from "../../../components/ui/Table";
import styles from "../../../styles/Layout.module.css";
import ModalComponent from "../../../components/common/Modal/Modal";
import ErrorBoundary from "../../../components/common/Errors/ErrorBoundary";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { deleteEmployee, getEmployees } from "../../../services/employees";
import { Employee } from "../../../common/types";

export const EmployeesContext = createContext<Employee[]>([]);

function EmployeeList() {
  const dispatch = useAppDispatch();

  // Get the employees list
  const { loading, data, error, hasError } = useAppSelector(
    (state) => state.employees.list
  );

  // Get currently selected employee
  const deleteData = useAppSelector((state) => state.employees.employee);
  const [isTableView, setIsTableView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  // Get all employee data on mount
  useEffect(() => {
    handleGetAllEmployees();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (id: string) => {
    setIsModalOpen(true);
    setSelectedUser(id);
  };

  // Delete the selected user
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

  // Format the username to display on the delete modal
  const getUsername = (id: string) => {
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
