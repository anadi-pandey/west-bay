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
    <div className="app-container" ref={divRef}>
      <div
        className="app-container-main"
        style={{ margin: "0", boxSizing: "border-box" }}
      >
        <div className="app-container-right">
          {appState?.isPlayedOnce && <Header />}
          <div
            className="app-container-outlet"
            style={{
              width: "100%",
              boxSizing: "border-box",
              margin: "0 !important",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
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
