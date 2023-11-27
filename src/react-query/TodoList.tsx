import UseTodos from "./Hooks/UseTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = UseTodos();

  if (isLoading) return <p>loadinggg</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
