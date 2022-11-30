import { useContext } from "react";
import { EmployeesContext } from "../../../pages/employee/list";
import { GenderMap } from "../../../common/utils/constants";
import CardComponent from "../../common/Card/Card";
import styles from "./Grid.module.css";
import Operations from "../../common/Operations/Operations";

function Grid({ handleDelete }) {

  const employeeData = useContext(EmployeesContext);

  // Render empty message if no employeess available
  if (employeeData.length === 0) {
    return <h2>No records!</h2>;
  }

  return (
    <div className={styles.grid}>
      {employeeData.map((item, idx) => (
        <div key={item._id} className={styles.card}>
          <CardComponent
            firstName={item.first_name}
            lastName={item.last_name}
            email={item.email}
            phone={item.number}
            photo={item.photo}
          >
            <div className={styles.actions}>
              <div>
                <h4>{GenderMap[item.gender]}</h4>
              </div>
              <Operations id={item._id} handleDelete={handleDelete} />
            </div>
          </CardComponent>
        </div>
      ))}
    </div>
  );
}

export default Grid;
