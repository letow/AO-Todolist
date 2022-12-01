import { observer } from "mobx-react-lite";
import store from "../../store/todos";
import { Todo } from "../../Types/Todo";
import TodoItem from "./TodoItem/TodoItem";
import s from "./TodoList.module.scss";
import Popup from "./Popup/Popup";
import { useEffect } from "react";
//import CircularProgress from "@mui/material/CircularProgress";
import Filter from "./Filter/Filter";

export default observer(function TodoList() {
  useEffect(() => {
    getTodoItems();
  }, []);

  const getTodoItems = (queryParam = "") => {
    store.getTodos(queryParam);
  };

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
      <div className={s.filter}>
        <Filter getTodoItems={getTodoItems} />
      </div>
      <h4>Todos:</h4>
      <div className={s.items}>
        {store.todos.length ? (
          store.todos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <div className={s.placeholder}>Todo List is empty. Add a task!</div>
          // <div className={s.loader}>
          //   <CircularProgress />
          // </div>
        )}
      </div>
    </div>
  );
});
