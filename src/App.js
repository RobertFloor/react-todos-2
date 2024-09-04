import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const todos = [
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User two' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One' },
    { rowNumber: 4, rowDescription: 'Make dinner', rowAssigned: 'User One' },
  ];

  const addTodo = () => {
    console.log('Add new todo button was clicked');
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={}>
            
            Add new todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
