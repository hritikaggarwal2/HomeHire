import HeaderBar from "../components/HeaderBar.js";
import EmployeeAdder from "../components/EmployeeAdder.js";

function AddEmployee() {
    return (
        <div style={{ width: "90%"}}>
            <HeaderBar />
            <EmployeeAdder />
        </div>
    );
}
  
export default AddEmployee;