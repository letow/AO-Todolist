import { Todo } from "../Types/Todo";

const url = "http://localhost:8000/todos";

export const getItems = async () => {
  return await fetch(url).then((response) => response.json());
};

export const addItem = async (data: Todo) => {
  return await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const removeItem = async (data: number) => {
  return await fetch(url + `/${data}`, {
    method: "DELETE",
  }).then((response) => response.json());
};
