// Components:
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import WhatsApp from "./icons/WhatsApp";
import Scroll from "./icons/Scroll";
import "./App.css";
import { useContext } from "react";
import { AppContext } from "./AppContext";

// Functions:
const AppLayout = () => {
  const { showHeader, updateValue } = useContext(AppContext);
  return (
    <div className="app-container">
      <main className="app-container-main">
        <div className="app-container-right">
          {showHeader && <Header />}
          <main className="app-container-outlet">
            <Outlet />
          </main>
        </div>
      </main>
      <div className="app-icons whats-app">
        <WhatsApp />
      </div>
      <div className="app-icons scroll-app">
        <Scroll />
      </div>
    </div>
  );
};

// Exports:
export default AppLayout;
