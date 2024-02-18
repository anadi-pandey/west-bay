// Components:
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import WhatsApp from "./icons/WhatsApp";
import Scroll from "./icons/Scroll";
import "./App.css";
import { useContext, useRef } from "react";
import { AppContext } from "./AppContext";

// Functions:
const AppLayout = () => {
  const { appState, updateValue } = useContext(AppContext);
  const divRef = useRef();
  const scrollBack = () => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="app-container"
      ref={divRef}
      // style={{ border: "4px red solid " }}
    >
      <main className="app-container-main">
        <div className="app-container-right">
          {appState?.isPlayedOnce && <Header />}
          <main className="app-container-outlet">
            <Outlet />
          </main>
        </div>
      </main>
      {appState?.isPlayedOnce && (
        <div className="app-icons whats-app">
          <WhatsApp />
        </div>
      )}
      {appState?.isPlayedOnce && (
        <div className="app-icons scroll-app">
          <Scroll />
        </div>
      )}
      {appState?.isBackTopVisible && (
        <div className="app-icons scroll-back" onClick={() => scrollBack()}>
          Back to Top
        </div>
      )}
    </div>
  );
};

// Exports:
export default AppLayout;
