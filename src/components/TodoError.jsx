import { useRouteError } from "react-router-dom";

export default function TodoErr() {
  const err = useRouteError();
  console.log(err, "errr");
  return (
    <div className="card" style={{ color: "red" }}>
      {err.message}
    </div>
  );
}
