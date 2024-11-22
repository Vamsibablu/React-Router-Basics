import { Outlet, useLocation } from "react-router-dom";
import NavBarFn from "../components/NavBar";
import { useEffect, useState } from "react";
import BodyComponent from "./BodyComponent";

const RootLayoutFn = () => {
  console.log("Layout Component");
  // const location = useLocation();
  const [a, setA] = useState(0);
  // useEffect(() => {
  //   console.log("pathname changed");
  // }, [location.pathname]);
  // useEffect(() => {
  //   const int = setInterval(() => {
  //     setA((a) => a + 1);
  //   }, 5000);
  //   return () => {
  //     clearInterval(int);
  //   };
  // }, []);
  console.log(a, "root  ");
  return (
    <div>
      <NavBarFn />
      <div className="body">
        {/* {a % 2 === 0 ? <Outlet /> : <div>Odd Number</div>} */}
        <BodyComponent />
      </div>
    </div>
  );
};
export default RootLayoutFn;
