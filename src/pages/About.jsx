import { useLocation, useSearchParams } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsName = searchParams.get("name");
  const searchParamsAge = searchParams.get("age");
  const state = location.state;
  console.log(searchParamsName, "name", "--", searchParamsAge, "age");
  console.log(state, "about page state");

  const handleChangeParams = () => {
    setSearchParams((params) => {
      params.set("name", "dynamic");
      return params;
    });
  };
  return (
    <div>
      This is about page
      <button onClick={handleChangeParams}>change search params</button>
    </div>
  );
};
export default AboutPage;
