import { Outlet } from "react-router-dom";
import ContactPage from "../pages/Contact";

const ContactLayoutfn = () => {
  return (
    <div>
      <ContactPage />
      <Outlet />
    </div>
  );
};
export default ContactLayoutfn;
