import { Outlet, useLocation } from "react-router-dom";

export default function BodyComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
