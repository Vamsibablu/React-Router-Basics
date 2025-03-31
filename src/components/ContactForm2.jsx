import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ContactForm2 = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const [fName, setFName] = useState(() => {
    return queryParams.get("fName") || "";
  });
  const [lName, setLName] = useState(() => {
    return queryParams.get("lName") || "";
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fName") {
      setFName(value);
      queryParams.set("fName", value);
      window.history.replaceState({}, "", `?${queryParams}`);
    } else if (name === "lName") {
      setLName(value);
      queryParams.set("lName", value);
      window.history.replaceState({}, "", `?${queryParams}`);
    }
  };
  return (
    <form>
      <br />
      <label htmlFor="fname">Form2 First Name: </label>
      <input
        type="text"
        name="fName"
        id="fname"
        onChange={handleChange}
        value={fName}
      />
      <br />
      <br />
      <label htmlFor="lname">Form2 Last Name: </label>
      <input
        type="text"
        name="lName"
        id="lname"
        onChange={handleChange}
        value={lName}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
};
export default ContactForm2;
