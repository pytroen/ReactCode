import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

//   主要是修改了以下三个函数
  function handleAddTodo(title) {
    // setTodos([...todos,{id:nextId++,title:title,done:false}]);
    setTodos([todos.slice(),{id:nextId++,title:title,done:false}]);
  }

  function handleChangeTodo(nextTodo) {
    const newTodos = todos.map(item =>{
      if(item.id === nextTodo.id){
        return nextTodo;
      }else {
        return item
      }
    })
    setTodos(newTodos);
  }

  function handleDeleteTodo(todoId) {
     const newTodos = todos.filter(item =>item.id!== todoId);
    setTodos(newTodos);
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
