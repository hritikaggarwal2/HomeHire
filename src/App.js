import "./App.css";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./constants/Theme";

// Firebase initialization
import firebase from "firebase/app";
import firebaseConfig from "./config/Firebase";

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
