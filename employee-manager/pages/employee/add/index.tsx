import { Box, Button, CircularProgress, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { addEmployee } from "../../../services/employees";
import { resetState } from "../../../slices/employeesSlice";
import Form from "../../../components/ui/Form/Form";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { Employee } from "../../../common/types";
import { initialValues } from "../../../common/utils/constants";

function AddEmployeeComponent() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { loading, error, hasError, data } = useAppSelector(
    (state) => state.employees.employee
  );

  // Clear selected employee data when component unmounts
  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [data]);

  const handleSubmit = (employeeData: Employee) => {
    dispatch(
      addEmployee({
        data: employeeData,
        callBack: () => router.push("/employee/list"),
      })
    );
  };

  const redirectRotue = () => {
    router.push("/employee/list");
  };

  return (
    <Form
      initialValues={initialValues}
      disabled={loading}
      submitButtonText="ADD"
      handleSubmit={handleSubmit}
      redirect={redirectRotue}
    />
  );
}

export default AddEmployeeComponent;
