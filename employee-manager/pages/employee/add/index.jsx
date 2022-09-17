import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
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
    console.log("🚀 ~ file: index.jsx ~ line 28 ~ useEffect ~ data", data)
    if (data === null && hasError === true) {
      toast("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    return () => {
      dispatch(resetState());
    };
  }, [data]);

  return (
    <Form handleSubmit={handleSubmit} initialValues={{}} disabled={loading}>
      <Button type="submit" variant="outlined">
        ADD
      </Button>
    </Form>
  );
}

export default AddEmployeeComponent;
