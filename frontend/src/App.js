import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Home from './Home';

function App() {

  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default App;