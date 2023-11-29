import { Task } from "../TaskList";

interface AddTaskAction {
  type: "ADD";
  task: Task;
}
interface DeleteTaskAction {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTaskAction | DeleteTaskAction;
const TasksReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...state];
    case "DELETE":
      return state.filter((t) => t.id !== action.taskId);
  }
};

export default TasksReducer;
