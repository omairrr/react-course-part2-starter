import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../Constants";
import TodoService, { Todo } from "../Services/TodoService";

const UseTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: TodoService.GetAll,
    staleTime: 10 * 1000,
  });
};

export default UseTodos;
