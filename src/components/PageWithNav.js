// components
import NavBar from "./NavBar";
import HeaderBar from "./HeaderBar";

export default function PageWithNav(props) {
  return (
    <>
      {props.page === "dashboard" ? <NavBar index={props.index}/> : <> </>} 
      <HeaderBar page={props.page} />
      {props.children}
    </>
  );
}
