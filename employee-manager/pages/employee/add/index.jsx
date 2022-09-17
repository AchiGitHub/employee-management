import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { addEmployee } from "../../../services/employees";
import { resetState } from "../../../slices/employeesSlice";
import Form from "../../../components/ui/Form/Form";

function AddEmployeeComponent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error, hasError, data } = useSelector(
    (state) => state.employees.employee
  );

  const handleSubmit = (employeeData) => {
    dispatch(
      addEmployee({
        data: employeeData,
        callBack: () => router.push("/employee/list"),
      })
    );
  };

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [data]);

  return (
    <Form handleSubmit={handleSubmit} initialValues={{}} disabled={loading}>
      {loading ? (
        <IconButton>
          <CircularProgress />
        </IconButton>
      ) : (
        <Button type="submit" variant="outlined">
          ADD
        </Button>
      )}
    </Form>
  );
}

export default AddEmployeeComponent;
