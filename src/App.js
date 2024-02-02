import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AppLayout from "./Applayout";
import Home from "./Pages/Home";

// Functions:
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={"/"} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Exports:
export default App;
