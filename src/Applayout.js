// Components:
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import { AppContext } from "./AppContext";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import whatsapp from "./components/Group 56.png";

// Functions:
const AppLayout = () => {
  const { appState, updateValue } = useContext(AppContext);
  const divRef = useRef();
  const scrollBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    console.log("ViewPort Dimensions", window.innerHeight, window.innerWidth);
    if (window.innerWidth < 700) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="app-container" ref={divRef}>
      <div
        className="app-container-main"
        style={{ margin: "0", boxSizing: "border-box" }}
      >
        <div className="app-container-right">
          {appState?.isPlayedOnce && <Header isMobile={isMobile} />}
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
          <FloatingWhatsApp
            phoneNumber="+91-9873 197553"
            message="Hello Oppurtunities!!!"
            accountName={"Westbay Immigration"}
            avatar={whatsapp}
          />
        </div>
      )}

      {appState?.isBackTopVisible && (
        <div
          className="app-icons scroll-back"
          onClick={() => scrollBack()}
          style={{ zIndex: 1500 }}
        >
          Back to Top
        </div>
      )}
    </div>
  );
};

// Exports:
export default AppLayout;
