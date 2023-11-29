import React, { Dispatch } from "react";
import { Task } from "../TaskList";
import { TaskAction } from "../Reducers/TasksReducer";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}
const TasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);
export default TasksContext;
