/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';

const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

/**
 * Manages the Todos by reading from and writing to the backend API.
 *
 * @returns {Object} with the following properties:
 *   `isLoading`: a boolean indicating if the data has not yet loaded;
 *   `todos`: a list of To Do items;
 *   `addTodo`: a function (newTodo) that will add a new To Do;
 *   `toggleCompleted`: a function (todoId) that will toggle the completion of an existing To Do.
 */
export function useTodos() {
  const [todos, setTodos] = useState();
  //My added below
  useEffect(() => {
    /* TODO: If `todos` hasn't been defined yet, read the items from the API
     * and set them into the `todos` state.
     */
    async function loadThis() {
      if (!todos) {
        let readThis = await readTodos()
        setTodos(readThis)
      }
    }
    loadThis()

  }, [todos]);

 async function addTodo(newTodo) {
    /* TODO: Call the API function that creates a Todo item.
     * When the promise returned by that function resolves, update the `todos` state.
     * Note that it is critical that you pass a _new_ array. Do not modify the `todos` array.
     */
    try {
      const todo = await createTodo(newTodo)
      console.log(todo)
      setTodos((prev) => prev.concat(todo))
    }
    catch (err) {
      console.log(err)
    }

    // async function addThis() {
    //   const todo = await createTodo(newTodo)
    //   console.log(todo)
    //   setTodos((prev) => prev.concat(todo))
    // }
    // addThis()
  }

  async function toggleCompleted(todoId) {
    const oldTodo = todos.find((todo) => todo.todoId === todoId);
    const req = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: !oldTodo.isCompleted }),
    };
    try {
      const res = await fetch(url(`/api/todos/${todoId}`), req);
      if (!res.ok) throw new Error(`fetch Error ${res.status}`);
      const updated = await res.json();
      const allTodos = todos.map((original) =>
        original.todoId === updated.todoId ? updated : original
      );
      setTodos(allTodos);
    }
    catch (err) {
      console.log(err)
    }
  }

  return {
    isLoading: todos === undefined,
    todos,
    addTodo,
    toggleCompleted,
  };
}

/**
 * Reads all To Do items from the API.
 * @returns Promise that resolves with the read items.
 */
async function readTodos() {
  const res = await fetch(url('/api/todos'));
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Creates a new To Do item using the API.
 * @param todo The To Do to create.
 * @returns Promise that resolves with the new item returned from the API.
 */
async function createTodo(todo) {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  };
  const res = await fetch(url('/api/todos'), req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Updates a To Do item using the API by setting its `isCompleted` state.
 * @param todo The To Do to update.
 * @returns Promise that resolves with the updated To Do item.
 */
async function updateTodo(todo) {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: todo.isCompleted }),
  };
  console.log(todo.todoId)
  const res = await fetch(url(`/api/todos/${todo.todoId}`), req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
