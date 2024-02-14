import React, { useState, useEffect } from "react";
import "./styles.css"; // Import your CSS file

function ZoomHeader() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="zoom"
      style={{ backgroundSize: `100% calc(100% + ${scroll / 5}px)` }}
    >
      <div className="title">
        <h1>Scroll to Zoom</h1>
        <a
          href="http://webdesignerwall.com/tutorials/how-to-add-icon-fonts-to-any-element-with-css"
          alt="webdesignerwall.com"
          target="_blank"
        >
          <button>View Tutorial</button>
        </a>
      </div>
    </header>
  );
}

function App() {
  return (
    <main role="main">
      <div className="content">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <ZoomHeader />
    </main>
  );
}

export default App;
