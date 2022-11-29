import { observer } from "mobx-react-lite";
import store from "../../store/todos";
import { Todo } from "../../Types/Todo";
import TodoItem from "./TodoItem/TodoItem";
import s from "./TodoList.module.scss";

export default observer(function TodoList() {
  return (
    <div>
      <div className={s.TodoList}>
        <form action="">
          <input type="text" id="inp" autoFocus />
          <button
            onClick={(e) => {
              e.preventDefault();
              const text = (document.querySelector("#inp") as HTMLInputElement)
                .value;
              if (text)
                store.addTodo({
                  id: store.todos.length
                    ? store.todos[store.todos.length - 1].id + 1
                    : 1,
                  text: text,
                  done: false,
                } as Todo);
            }}
          >
            Add
          </button>
        </form>
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
    </div>
  );
});
