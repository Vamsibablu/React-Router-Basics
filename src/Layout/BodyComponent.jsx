import { Outlet, useLocation } from "react-router-dom";

export default function BodyComponent() {
  const location = useLocation();
  console.log("body");
  return (
    <div>
      <Outlet />
    </div>
  );
}
