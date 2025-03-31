import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ContactForm1 = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [fName, setFName] = useState(() => {
    return queryParams.get("fName") || "";
  });
  const [lName, setLName] = useState(() => {
    return queryParams.get("lName") || "";
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(queryParams);
    if (name === "fName") {
      setFName(value);
      setQueryParams((prev) => {
        prev.set("fName", value);
        return prev;
      });
    } else if (name === "lName") {
      setLName(value);
      setQueryParams((prev) => {
        prev.set("lName", value);
        return prev;
      });
    }
  };
  return (
    <form>
      <label htmlFor="fname">First Name: </label>
      <input
        type="text"
        name="fName"
        id="fname"
        onChange={handleChange}
        value={fName}
      />
      <label htmlFor="lname">Last Name: </label>
      <input
        type="text"
        name="lName"
        id="lname"
        onChange={handleChange}
        value={lName}
      />
      <button>Submit</button>
    </form>
  );
};
export default ContactForm1;
