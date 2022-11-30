import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Form from "../../../../components/ui/Form/Form";
import { editEmployee, getEmployee } from "../../../../services/employees";
import Spinner from "../../../../components/common/Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { Employee } from "../../../../common/types";

function EditEmployee() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { id } = router.query;

  const { loading, data, error, hasError } = useAppSelector(
    (state) => state.employees.selectedEmployee
  );

  const updateEmployee = useAppSelector((state) => state.employees.employee);

  useEffect(() => {
    if (id) {
      dispatch(getEmployee({ id }));
    }
  }, [id]);

  const handleSubmit = (data: Employee) => {
    const { _id, first_name, last_name, email, number, gender, photo } = data;
    dispatch(
      editEmployee({
        id: _id,
        data: {
          first_name,
          last_name,
          email,
          number,
          gender,
          photo,
        },
        callback: () => redirectRotue("/employee/list"),
      })
    );
  };

  const redirectRotue = (route: string) => {
    router.push(route);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Form
      handleSubmit={handleSubmit}
      initialValues={data}
      redirect={() => redirectRotue("/employee/list")}
      submitButtonText="SAVE"
      disabled={updateEmployee.loading}
    />
  );
}

export default EditEmployee;
