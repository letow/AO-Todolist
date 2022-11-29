import { FC } from "react";
import { Todo } from "../../../Types/Todo";
import s from "./TodoItem.module.scss";
import store from "./../../../store/todos";

interface ITodoItemProps {
  todo: Todo;
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  return (
    <div className={s.TodoItem}>
      {todo.text}
      <button onClick={() => store.removeTodo(todo)}>Delete</button>
    </div>
  );
};

export default TodoItem;
