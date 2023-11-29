import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter/Counter";
import LoginStatus from "./state-management/Auth/LoginStatus";
import TaskList from "./state-management/Tasks/TaskList";
import NavBar from "./state-management/NavBar";
import HomePage from "./routing/HomePage";
import TasksContext from "./state-management/Tasks/TasksContext";
import TasksProvider from "./state-management/Tasks/TasksProvider";

function App() {
  return (
    <>
      <TasksProvider>
        <Counter />
        <NavBar />
        <TaskList />
      </TasksProvider>
    </>
  );
}

export default App;
