import { FC } from "react";
import { Todo } from "../../../Types/Todo";
import s from "./TodoItem.module.scss";
import store from "./../../../store/todos";
import Button from "@mui/material/Button/Button";

interface ITodoItemProps {
  todo: Todo;
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  return (
    <div className={s.TodoItem}>
      {todo.text}
      <Button variant="contained" onClick={() => store.removeTodo(todo)}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
