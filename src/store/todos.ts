import { makeAutoObservable } from "mobx";
import { Todo } from "../Types/Todo";

class ToDoList {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  removeTodo(todo: Todo) {
    this.todos = this.todos.filter((obj) => obj.id !== todo.id);
  }
}

export default new ToDoList();
