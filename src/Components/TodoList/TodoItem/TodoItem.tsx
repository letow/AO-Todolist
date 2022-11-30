import { FC } from "react";
import { Todo } from "../../../Types/Todo";
import s from "./TodoItem.module.scss";
import store from "./../../../store/todos";
import Button from "@mui/material/Button/Button";
import Checkbox from "@mui/material/Checkbox";

interface ITodoItemProps {
  todo: Todo;
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  return (
    <div className={s.TodoItem}>
      <div>
        <Checkbox
          onChange={() => store.doneTodo(todo)}
          defaultChecked={todo.done}
        />
        {todo.text}
      </div>
      <Button variant="outlined" onClick={() => store.removeTodo(todo.id)}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
