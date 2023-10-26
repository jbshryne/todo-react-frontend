const URL = "https://todo-django-e0nw.onrender.com";

export const indexLoader = async () => {
  const response = await fetch(`${URL}/todos/`);
  const todos = await response.json();
  return todos;
};

export const showLoader = async ({ params }) => {
  const response = await fetch(`${URL}/todos/${params.id}/`);
  const todo = await response.json();
  return todo;
};
