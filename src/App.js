
import { Routes, Route } from "react-router-dom";
import navbar from "./Routing/Navbar";
import Home from "./Routing/Home";
import About from "./Routing/About";
import User from "./Routing/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="user" element={ <User/> } />
      </Routes>
    </div>
  )
}

export default App;