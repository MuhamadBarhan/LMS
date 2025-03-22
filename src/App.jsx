import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
import Login from "./components/login";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
