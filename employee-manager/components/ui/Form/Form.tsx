import { useFormik } from "formik";
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { validationSchema } from "../../../common/utils/validations";
import { Employee } from "../../../common/types";
import styles from "./Form.module.css";

interface FormProps {
  initialValues?: Employee;
  disabled: boolean;
  submitButtonText: string;
  handleSubmit: (values: Employee) => void;
  redirect: () => void;
}

const Form = ({
  initialValues,
  submitButtonText,
  disabled,
  handleSubmit,
  redirect,
}: FormProps) => {
  const formik = useFormik<Employee>({
    initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <Container maxWidth="sm">
      <div className={styles.formContainer}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.avatar}>
            <Avatar
              alt={formik.values.first_name}
              src={formik.values.photo}
              sx={{ width: 100, height: 100 }}
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.formLabel}>
              First Name<span className={styles.mandatory}>*</span>
            </div>
            <TextField
              className={styles.formItem}
              fullWidth
              hiddenLabel
              id="first_name"
              name="first_name"
              label="First Name"
              value={formik.values.first_name || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              helperText={formik.touched.first_name && formik.errors.first_name}
              disabled={disabled}
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.formLabel}>
              Last Name<span className={styles.mandatory}>*</span>
            </div>
            <TextField
              className={styles.formItem}
              fullWidth
              hiddenLabel
              id="last_name"
              name="last_name"
              label="Last Name"
              value={formik.values.last_name || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
              disabled={disabled}
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.formLabel}>Email</div>
            <TextField
              className={styles.formItem}
              fullWidth
              hiddenLabel
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
              value={formik.values.email || ""}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              disabled={disabled}
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.formLabel}>Phone</div>
            <TextField
              className={styles.formItem}
              fullWidth
              hiddenLabel={true}
              id="number"
              name="number"
              label="Phone"
              value={formik.values.number || ""}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
              disabled={disabled}
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.formLabel}>Gender</div>
            <TextField
              select
              className={styles.formItem}
              fullWidth
              id="gender"
              name="gender"
              label="Gender"
              value={formik.values.gender || ""}
              onChange={formik.handleChange}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              helperText={formik.touched.gender && formik.errors.gender}
              disabled={disabled}
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
            </TextField>
          </div>
          <div className={styles.action}>
            {disabled ? (
              <IconButton>
                <CircularProgress />
              </IconButton>
            ) : (
              <>
                <Button onClick={() => redirect()}>Back</Button>
                <Button type="submit" variant="outlined">
                  {submitButtonText}
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Form;
