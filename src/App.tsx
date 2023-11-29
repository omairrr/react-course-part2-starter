import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import TasksReducer from "./state-management/Reducers/TasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./routing/HomePage";
import TasksContext from "./state-management/Contexts/TasksContext";
import LoginReducer from "./state-management/Reducers/LoginReducer";
import AuthContext from "./state-management/Contexts/AuthContext";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <NavBar />
          <TaskList />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
