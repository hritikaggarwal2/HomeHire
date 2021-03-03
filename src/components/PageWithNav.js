// components
import NavBar from "./NavBar";
import HeaderBar from "./HeaderBar";

export default function PageWithNav(props) {
  return (
    <>
      <NavBar index={props.index} />
      <HeaderBar />
      {props.children}
    </>
  );
}
