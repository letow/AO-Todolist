import { makeAutoObservable } from "mobx";
import {
  addItem,
  doneItem,
  getAllItems,
  removeItem,
  signIn,
} from "../API/ServerAPI";
import { LoginInfo } from "../Types/LoginInfo";
import { Todo } from "../Types/Todo";

class ToDoList {
  todos: Todo[] = [];
  fetching: boolean = false;
  user: LoginInfo[] = [];

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

  async signInAction(data: LoginInfo) {
    this.user = await signIn(data);
  }

  async getTodos(queryParam: string) {
    this.todos = await getAllItems(queryParam);
  }
}

export default new ToDoList();
