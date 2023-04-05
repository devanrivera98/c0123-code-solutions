/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getRequest() {
      try {
        const response = await fetch(url`/api/todos`)
        if (!response.ok) {
          console.log('GET: Error');
          throw new Error(`Response error: ${response.status}`)
        }
        const jsonData = await response.json();
        setTodos(jsonData);
        console.log('GET: Success');
      }
      catch (err) {
        setError(err)
      }
      finally {
        setIsLoading(false)
      }
    }
    getRequest();
    /* Use fetch to send a GET request to `/api/todos`.
     * Once the response JSON is received and parsed,
     * update state with the received todos.
     * Handle errors correctly and set `error` to any error or error status code.
     * Set `isLoading` to false when all network activity is finished.
     */
  }, []);

  function addTodo(newTodo) {

      async function addPost() {
        try {
          const response = await fetch(url`/api/todos`, {method : 'POST', headers: {"Content-Type" : "application/json"}, body : JSON.stringify(newTodo)})
          // console.log(response.body)
          // console.log(todos)
          const arrayToDos = todos.concat(newTodo)
          if (!response.ok) {
            throw new Error(`Response error: ${response.status}`)
          }
          const jsonData = await response.json();
          setTodos(arrayToDos);
          // console.log('POST Response',todos)
        }
        catch (err) {
          setError(err);
          console.log('There was an POST error', error)
        }
      }
      addPost();

    /* Use fetch to send a POST request to `/api/todos`.
     * Once the response JSON is received and parsed,
     *   - set the Todos to a new array with the added Todo concatenated
     *   - handle errors appropriate (as mentioned above)
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     *
     * TIP: When calling fetch, be sure to SERIALIZE the todo object in the body
     * with JSON.stringify() and specify the "Content-Type" header as "application/json"
     * TIP: The "(prev) =>" version of the state setter function might be convenient
     * TIP: Use Array.prototype.concat to create a new array containing the contents
     * of the old array, plus the object returned by the server.
     */
  }

  function toggleCompleted(todoId) {
    async function patchArray() {
      // console.log(todos[0].todoId)
      try {
        let newObject = {}
        for (let i = 0; i < todos.length; i++) {
          if (todoId === todos[i].todoId) {
            newObject.isCompleted = (!todos[i].isCompleted)
          }
        }
        console.log(newObject);
        const response = await fetch(url(`/api/todos/${todoId}`), { method: 'PATCH', headers :{ "Content-Type": "application/json" }, body : JSON.stringify(newObject) });
        if (!response.ok) {
          throw new Error(`Response error: ${response.status}`)
        }
        const jsonData = await response.json();
        // console.log('This is jsonData:', jsonData)
        // console.log('This is todoId', todoId)
        const todoCopy = todos.map((todos) => todoId === todos.todoId ? jsonData : todos)
        // console.log('This is the todoCopy', todoCopy)
        setTodos(todoCopy);
      }
      catch (err) {
        setError(err)
        console.log('There is a PATCH error', error)
      }
    }

    /* Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}` CHECK
     * Once the response JSON is received and parsed,
     *   - create a shallow copy of the todos array from state
     *   - replace the old todo with the todo received from the server
     *   - handle errors appropriate (as mentioned above)
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list repeatedly should "toggle" its isCompleted status back and forth.
     *
     * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     *
     * TIP: `Array.map` is a convenient way to make a copy of an array -- compare
     * the Todo IDs and map the existing Todo if it is not the one that was
     * just updated, and map the updated array if it is.
     * TIP: When calling fetch, be sure to SERIALIZE the updates in the body with JSON.stringify() CHECK
     * And specify the "Content-Type" header as "application/json" CHECK
     */
    patchArray()
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
