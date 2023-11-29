import { useContext } from "react";
import LoginStatus from "./Auth/LoginStatus";
import TasksContext from "./Tasks/TasksContext";
import UseCounterStore from "./Counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const counter = UseCounterStore((s) => s.counter);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        {tasks.length + " " + counter}
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
