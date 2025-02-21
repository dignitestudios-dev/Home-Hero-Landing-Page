import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Global/Layout";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import OptIn from "./pages/OptIn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout pages={<Home />} />} />
      <Route path="terms" element={<Layout pages={<Terms />} />} />
      <Route path="privacy" element={<Layout pages={<Privacy />} />} />
      <Route path="cookie" element={<Layout pages={<Cookie />} />} />
      <Route path="optin" element={<Layout pages={<OptIn />} />} />
    </Routes>
  );
}

export default App;
