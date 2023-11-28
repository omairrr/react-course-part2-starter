import { useMutation, useQueryClient } from "@tanstack/react-query";
import TodoService, { Todo } from "../Services/TodoService";

interface AddTodoContext {
  previousTodos: Todo[];
}
const UseAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: TodoService.Post,
  });
};

export default UseAddTodo;
