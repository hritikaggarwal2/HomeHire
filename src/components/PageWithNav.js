// components
import NavBar from "./NavBar";
import HeaderBar from "./HeaderBar";

export default function PageWithNav(props) {
  console.log(props.back);
  return (
    <>
      {props?.page !== "nonav" ? (
        <NavBar type={props.type} index={props.index} />
      ) : (
        <> </>
      )}
      <HeaderBar back={props.back} page={props.page} noAddEmployee={props.noAddEmployee}/>
      {props.children}
    </>
  );
}
