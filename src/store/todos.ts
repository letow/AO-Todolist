import { makeAutoObservable } from "mobx";
import { addItem, doneItem, getAllItems, removeItem } from "../API/ServerAPI";
import { Todo } from "../Types/Todo";

class ToDoList {
  todos: Todo[] = [];
  fetching: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    addItem(todo);
  }

  removeTodo(todoId: number) {
    this.todos = this.todos.filter((obj) => obj.id !== todoId);
    removeItem(todoId);
  }

  doneTodo(todo: Todo) {
    const itemIndex = this.todos.findIndex((obj) => obj.id === todo.id);
    this.todos[itemIndex].done = !this.todos[itemIndex].done;
    doneItem(this.todos[itemIndex]);
  }

  async getTodos() {
    this.todos = await getAllItems();
  }
}

export default new ToDoList();
