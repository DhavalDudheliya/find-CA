import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Layout from "./Layout";
import Profile from "./pages/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
