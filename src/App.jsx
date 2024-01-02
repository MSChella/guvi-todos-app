import logo from './logo.svg';
import './App.css';
import ToDoTask from './components/CreateToDo/ToDoTask';
import ToDoCard from './components/ToDoCard/ToDoCard';


function App() {
  return (
    <div className="App">
      <ToDoTask />
      <ToDoCard />
    </div>
  );
}

export default App;
