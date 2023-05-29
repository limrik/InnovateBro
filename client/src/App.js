import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NewForm from "./NewForm";

function App() {
  const [response, setResponse] = useState({});
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login setResponse={setResponse} />} />
        <Route
          path="/register"
          element={<Register setResponse={setResponse} />}
        />
        <Route path="/home" element={<Home response={response} />} />
        <Route path="/newform" element={<NewForm />} />
      </Routes>
    </div>
  );
}

export default App;
