// Render Prop
import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            key="Home"
            element={isLogged ? <Home /> : <Navigate to="/login" />}
          />
          <Route exact path="/login" element={<Login Login={setIsLogged} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
