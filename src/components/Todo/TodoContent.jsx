import { AddTodo } from "./AddTodo";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";

export function TodoContent() {
  return (
    <main className="content">
      {/* Todo-Header */}

      {/* Add Todo */}
      <AddTodo />
      <TodoHeader />
      <TodoList />

      {/* TodoList */}
    </main>
  );
}
