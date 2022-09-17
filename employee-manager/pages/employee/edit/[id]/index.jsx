import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Form from "../../../../components/ui/Form/Form";
import { editEmployee, getEmployee } from "../../../../services/employees";
import Spinner from "../../../../components/common/Spinner/Spinner";

function EditEmployee() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const { id } = router.query;

  const { loading, data, error, hasError } = useSelector(
    (state) => state.employees.selectedEmployee
  );

  useEffect(() => {
    if (id) {
      dispatch(getEmployee(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const handleSubmit = (data) => {
    const { _id, first_name, last_name, email, number, gender, photo } = data;
    dispatch(editEmployee({
      id: _id,
      data: {
        first_name,
        last_name,
        email,
        number,
        gender,
        photo
      }
    }));
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Form handleSubmit={handleSubmit} initialValues={user}>
      <Button type="submit" variant="outlined">
        SAVE
      </Button>
    </Form>
  );
}

export default EditEmployee;
