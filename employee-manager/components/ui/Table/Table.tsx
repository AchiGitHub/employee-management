import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import { EmployeesContext } from "../../../pages/employee/list";
import { GenderMap } from "../../../common/utils/constants";
import Operations from "../../common/Operations/Operations";

interface EmployeeTableProps {
  handleDelete: (id: string) => void;
}

const EmployeeTable = ({ handleDelete }: EmployeeTableProps) => {

  const employeeData = useContext(EmployeesContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeData.length === 0 && (
            <TableRow>
              <TableCell colSpan={7}>No records found!</TableCell>
            </TableRow>
          )}
          {employeeData.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar alt={row.first_name} src={row.photo} />
              </TableCell>
              <TableCell align="right">{row.first_name}</TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{GenderMap[row.gender]}</TableCell>
              <TableCell align="right">
                <Operations id={row._id} handleDelete={handleDelete} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
