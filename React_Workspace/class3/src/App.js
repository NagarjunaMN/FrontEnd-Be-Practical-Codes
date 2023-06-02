import logo from './logo.svg';
import './App.css';
import User from './component/User';
import users from './data/user';

function App() {
  return (
    <div className="App">
      <h1>Props</h1>
      <User x={12} userData = {users} />
    </div>
  );
}

export default App;
