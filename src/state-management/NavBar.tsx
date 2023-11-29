import { useContext } from "react";
import LoginStatus from "./Auth/LoginStatus";
import TasksContext from "./Tasks/TasksContext";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
