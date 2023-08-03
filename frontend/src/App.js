import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import FibListPage from './FibListPage';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sequence" element={<FibListPage />}/>
          </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default App;