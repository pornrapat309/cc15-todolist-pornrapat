// Dependencies
import { useState } from 'react';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
import { Button } from '../components/Common/Button/Button';

const data = [
  { "id": 1, "task": "Suspendisse potenti.", "status": false, "due_date": "2023-04-26" },
    {
        "id": 2,
        "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "status": false,
        "due_date": "2023-05-08"
    },
    {
        "id": 3,
        "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
        "status": true,
        "due_date": "2023-04-30"
  },
];

function App() {
  const [allTodo, setAllTodo] = useState(data);


  const addTodo = function(taskName) {
    const newTodo = {
      id: nanoid,
      task: taskName,
      status: false,
      due_date: dayjs().format('YYYY-MM-DD'),
    }
    setAllTodo((p) => [newTodo, ...p]);
  }
  
  const deleteTodo = (todoId) => {
    let foundIndex = allTodo.findIndex((todo) => todo.id === todoId);
    if(foundIndex !== -1) {
      const newTodoLists = [... allTodo];
      newTodoLists.splice(foundIndex, 1);
      setAllTodo(newTodoLists);
    }
  }

  const editTodo = function(todoId, newTodoObj) {
    let foundTodo = allTodo.find((todo) => todo.id === todoId);
    if (!foundTodo) return;

    const newTodo = Object.assign({}, foundTodo, newTodoObj);

    let foundIndex = allTodo.findIndex((todo) => todo.id === todoId);
    if (foundIndex === -1) return;

    const newTodoLists = [... allTodo];
    newTodoLists.splice(foundIndex, 1, newTodo);
    setAllTodo(newTodoLists);
  }

  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate 
          addTodo={addTodo}
          />
          <TodoLists data={allTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </main>
      </div>
    </div>
  );
}

export default App;
