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
          setA(!a);
        }}
      >
        Contact Info
      </button>
      <button
        onClick={() => {
          handleClick("form1");
        }}
      >
        Form1
      </button>
      <button
        onClick={() => {
          handleClick("form2");
        }}
      >
        Form2
      </button>
      {a && <Navigate to={"info"} />}
    </div>
  );
};
export default ContactPage;
