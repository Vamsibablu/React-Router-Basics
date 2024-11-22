import { Outlet } from "react-router-dom";

const TodoLayoutFn = () => {
  return (
    <div>
      This is a todo List
      <Outlet />
    </div>
  );
};
export default TodoLayoutFn;
