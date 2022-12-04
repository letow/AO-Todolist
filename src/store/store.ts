import { makeAutoObservable } from "mobx";
import {
  addItem,
  doneItem,
  getAllItems,
  getItem,
  removeItem,
  signIn,
} from "../API/ServerAPI";
import { LoginInfo } from "../Types/LoginInfo";
import { Todo } from "../Types/Todo";

class ToDoList {
  todos: Todo[] = [];
  user: LoginInfo = { login: "", hash: "" };
  freeId: number = -1;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    addItem(todo, this.user.hash);
  }

  removeTodo(todoId: number) {
    this.todos = this.todos.filter((obj) => obj.id !== todoId);
    removeItem(todoId, this.user.hash);
  }

  doneTodo(todo: Todo) {
    const itemIndex = this.todos.findIndex((obj) => obj.id === todo.id);
    this.todos[itemIndex].done = !this.todos[itemIndex].done;
    doneItem(this.todos[itemIndex], this.user.hash);
  }

  logOut() {
    this.user = { login: "", hash: "" };
  }

  async signInAction(data: LoginInfo) {
    this.user = ((await signIn(data)) as LoginInfo[])[0] ?? {
      login: "",
      hash: "",
    };
  }

  async getTodos(queryParam: string) {
    this.todos = await getAllItems(queryParam, this.user.hash);
  }

  async getFreeId() {
    const randId = Math.floor(Math.random() * 10000);
    const resp = Number(await getItem(randId));
    if (resp === 404) {
      this.freeId = randId;
    } else {
      this.getFreeId();
    }
  }
}

export default new ToDoList();
