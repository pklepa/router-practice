import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello from App.js</h1>
      <button>
        <Link to="/profile">Profile</Link>
      </button>
    </div>
  );
}

export default App;
