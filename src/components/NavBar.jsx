import { NavLink, useNavigate } from "react-router-dom";
import Logo from "/vite.svg";
// import Logo1 from "./test.jpeg";
export default function NavBarFn() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about");
    console.log("navigateeeeeee");
  };

  console.log("nav");
  return (
    <div className="header">
      {/* <img src=".react.svg" /> */}
      <img src={Logo} />
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact" replace>
          Contact
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/todo">todo</NavLink>
      </div>
      <button className="navigate" onClick={handleNavigate}>
        Navigate
      </button>
    </div>
  );
}
