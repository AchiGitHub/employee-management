import * as yup from 'yup';
import { PHONE_REGEX } from "./constants";

export const validationSchema = yup.object({
    first_name: yup
        .string()
        .min(6, "First name should be of minimum 6 characters length")
        .max(10, "First name should be of maximum 10 characters length")
        .required("First name is required"),
    last_name: yup
        .string()
        .min(6, "Last name should be of minimum 6 characters length")
        .max(10, "Last name should be of maximum 10 characters length")
        .required("Last name is required"),
    email: yup.string().email("Enter a valid email"),
    number: yup
        .string()
        .matches(PHONE_REGEX, "Invalid phone number"),
    gender: yup.string().required("Gender is required"),
});