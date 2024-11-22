import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [a, setA] = useState(false);
  function handleClick(tab) {
    navigate(`/contact/${tab}`);
  }

  console.log("contact page");
  return (
    <div>
      This is contact page
      <button
        onClick={() => {
          handleClick("info");
        }}
      >
        Contact Info
      </button>
      <button
        // onClick={() => {
        //   handleClick("form");
        // }}
        onClick={() => {
          setA(!a);
        }}
      >
        Form
      </button>
      {a && <Navigate to={"form"} />}
    </div>
  );
};
export default ContactPage;
