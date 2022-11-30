import { makeAutoObservable } from "mobx";
import { addItem, getItems, removeItem } from "../API/ServerAPI";
import { Todo } from "../Types/Todo";

class ToDoList {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    addItem(todo);
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter((obj) => obj.id !== todo.id);
    removeItem(todo.id);
  }

  async getTodos() {
    this.todos = await getItems();
  }
}

export default new ToDoList();
