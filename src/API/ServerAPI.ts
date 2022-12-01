import { Todo } from "../Types/Todo";

const url = "http://localhost:8000/todos";

export const getAllItems = async (queryParam: string) => {
  return await fetch(
    url + (queryParam ? `?done=${queryParam.toString()}` : "")
  ).then((response) => response.json());
};

export const addItem = async (data: Todo) => {
  return await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

//TODO: rework with GET & POST requests vvvvv

export const removeItem = async (data: number) => {
  return await fetch(url + `/${data}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export const doneItem = async (data: Todo) => {
  return await fetch(url + `/${data.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", id: data.id.toString() },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
