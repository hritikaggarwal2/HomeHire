import HeaderBar from "../components/HeaderBar.js";

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function AddEmployee() {
    return (
        <div style={{ width: "90%"}}>
            <HeaderBar />
            <div>
                Add Employee page.
            </div>
        </div>
    );
}
  
export default AddEmployee;