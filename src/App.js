import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AppLayout from "./Applayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { AppContextProvider } from "./AppContext";

// Functions:
const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

// Exports:
export default App;
