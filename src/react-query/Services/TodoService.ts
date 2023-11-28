import APICLient from "./ApiClient";
export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
export default new APICLient<Todo>("/todos");
