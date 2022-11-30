import { observer } from "mobx-react-lite";
import store from "../../store/todos";
import { Todo } from "../../Types/Todo";
import TodoItem from "./TodoItem/TodoItem";
import s from "./TodoList.module.scss";
import Popup from "./Popup/Popup";
import { useEffect } from "react";

export default observer(function TodoList() {
  useEffect(() => {
    store.getTodos();
  }, []);

  const addingTask = (task: string) => {
    const text = task.trim();

    if (text) {
      store.addTodo({
        id: store.todos.length ? store.todos[store.todos.length - 1].id + 1 : 1,
        text: text,
        done: false,
      } as Todo);
    }
  };

  return (
    <div className={s.TodoList}>
      <Popup addingTask={addingTask} />
      <h4>Todos:</h4>
      <div className={s.items}>
        {store.todos.length ? (
          store.todos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <div className={s.placeholder}>Todo List is empty. Add a task!</div>
        )}
      </div>
    </div>
  );
});
