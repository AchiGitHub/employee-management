export const BASE_URL = "http://localhost:4200"

export const GenderMap = {
    "M": "Male",
    "F": "Female"
}

export const PHONE_REGEX = /^((94)(\d{9})|(081)(\d{9})|(0)(\d{9})|(\+?94)(\d{9}))$/;

export const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    number: "",
    photo: ""
}

export const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #efefef",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    margin: "0 auto",
};