import { LoginInfo } from "../Types/LoginInfo";
import { Todo } from "../Types/Todo";

export const getAllItems = async (queryParam: string, hash: string) => {
  const url = `http://my-json-server.typicode.com/letow/ao-db/todos?hash=${hash}`;
  return await fetch(
    url + (queryParam ? `&done=${queryParam.toString()}` : "")
  ).then((response) => response.json());
};

export const getItem = async (id: number) => {
  const url = `http://my-json-server.typicode.com/letow/ao-db/todos/${id}`;
  return await fetch(url).then((response) => response.status);
};

export const addItem = async (data: Todo, hash: string) => {
  const url = `http://my-json-server.typicode.com/letow/ao-db/todos`;
  return await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const removeItem = async (data: number, hash: string) => {
  const url = `http://my-json-server.typicode.com/letow/ao-db/todos/${data}?hash=${hash}`;
  return await fetch(url, {
    method: "DELETE",
  }).then((response) => response.json());
};

export const doneItem = async (data: Todo, hash: string) => {
  const url = `http://my-json-server.typicode.com/letow/ao-db/todos?hash=${hash}`;
  return await fetch(url + `/${data.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", id: data.id.toString() },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const signIn = async (data: LoginInfo) => {
  const url = `http://my-json-server.typicode.com/letow/ao-db/users?login=${data.login}&hash=${data.hash}`;
  return await fetch(url).then((response) => response.json());
};
