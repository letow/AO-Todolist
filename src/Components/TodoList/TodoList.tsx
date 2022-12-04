import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { Todo } from "../../Types/Todo";
import store from "../../store/store";
import TodoItem from "./TodoItem/TodoItem";
import s from "./TodoList.module.scss";
import Popup from "./Popup/Popup";
import Filter from "./Filter/Filter";
import Button from "@mui/material/Button/Button";

export default observer(function TodoList() {
  const history = useHistory();
  const freeId = store.freeId;

  const getTodoItems = (queryParam = "") => {
    store.getTodos(queryParam);
    store.getFreeId();
  };

  const addingTask = (task: string) => {
    const text = task.trim();
    if (text) {
      store.addTodo({
        id: freeId,
        hash: store.user.hash,
        text: text,
        done: false,
      } as Todo);
    }
  };

  const logOut = () => {
    store.logOut();
    history.push("/");
  };

  useEffect(() => {
    getTodoItems();
  }, []);

  if (!store.user.hash) logOut();

  return (
    <div className={s.TodoList}>
      <div className={s.greeting}>
        <span className={s.username}>Hello, {store.user.login}!</span>
        <Button variant="outlined" size="small" onClick={logOut}>
          Log out
        </Button>
      </div>
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
        )}
      </div>
    </div>
  );
});
