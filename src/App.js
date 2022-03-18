import logo from './logo.svg';
import './App.css';
import Mobile from './components/Mobile/Mobile';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <Todos></Todos>
    </div>
  );
}

function Todos(){
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodos(data))
  }, [])
  return (
    <div>
      <h2>Total todos = {todos.length}</h2>
      <div className='gridStyle'>
      {
        todos.map(todo => <ShowTodo title={todo.title}></ShowTodo>)
      }
      </div>
    </div>
  )
}

const postStyle = {
  border: '2px solid #e47b12',
  margin: '10px',
  padding: '5px'
}
function ShowTodo(props){
  return (
    <div style={postStyle}>
      <h3>{props.title}</h3>
    </div>
  )
}
export default App;
