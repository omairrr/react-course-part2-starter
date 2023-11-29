import React, { ReactNode, useReducer } from "react";
import TasksReducer from "./Reducers/TasksReducer";
import TasksContext from "./Contexts/TasksContext";
interface Props {
  children: ReactNode;
}
const TasksProvider = ({ children }: Props) => {
  const [tasks, TaskDispatch] = useReducer(TasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch: TaskDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
