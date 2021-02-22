import "./App.css";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

// Firebase initialization
import firebase from "firebase/app";
import firebaseConfig from "./config/Firebase";
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
