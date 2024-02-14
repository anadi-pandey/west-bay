import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AppLayout from "./Applayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// Functions:
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Exports:
export default App;
