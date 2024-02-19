import React, { useState } from "react";
import Logo from "../icons/Logo";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "../icons/Search";
import { Button, Input, Modal } from "antd";
import {
  CiCircleFilled,
  DownOutlined,
  InfoCircleFilled,
} from "@ant-design/icons";
import "../App.css";
import searchIcon from "./SearchIcon.png";
import closeIcon from "./closeIcon.png";

const Header = () => {
  const [services, setServices] = useState(false);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("home");
  const { Search } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ModalContent = () => {
    return (
      <div
        style={{
          boxSizing: "border-box",
          position: "absolute",
          backgroundColor: "white",
          padding: "50px",
          width: "100vw",
          top: "130px",
          left: "0",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
        }}
      >
        <div
          className="services-section"
          onClick={() => {
            setServices(false);
            navigate("/about");
          }}
        >
          <div className="service-name">Citizenship by Investment</div>
          <div className="service-content">
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  color: "#3C3C3C",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Canada
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Malta
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Carribean Islands
            </div>
          </div>
        </div>

        <div className="services-section">
          <div className="service-name">PERMANENT RESIDENCY</div>
          <div className="service-content">
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Canada
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Australia
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              New Zealand
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              UK
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Italy
            </div>
          </div>
        </div>

        <div className="services-section">
          <div className="service-name">European Golden Visa</div>
          <div className="service-content">
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Italy
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Portugal
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Spain
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Greece
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Ireland
            </div>
          </div>
        </div>

        <div className="services-section">
          <div className="service-name">Overseas Education</div>
          <div className="service-content">
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Australia
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              US
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              UK
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Canada
            </div>
            <div>
              <InfoCircleFilled
                style={{
                  marginInline: "10px",
                  fontSize: "8px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              Europe
            </div>
          </div>
        </div>
      </div>
    );
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-header">
      {isModalOpen && (
        <div
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{
            position: "absolute",
            top: "130px",
            width: "100vw",
            left: 0,
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "rgba(255, 255, 255, 0.2) 0px 3px 5px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ width: "50%", marginInline: "auto", display: "flex" }}>
            <Input
              placeholder="Search"
              style={{
                backgroundColor: "transparent !important",
                height: "40px",
                fontSize: "larger",
                width: "100%",
                height: "60px",
              }}
              className="search-bar"
            />
            <img
              src={searchIcon}
              alt="Search"
              style={{
                height: "25px",
                position: "relative",
                left: "-45px",
                top: "18px",
                cursor: "pointer",
              }}
            />
            <img
              src={closeIcon}
              alt="Search"
              style={{
                height: "25px",
                position: "relative",
                left: "0px",
                top: "16px",
                cursor: "pointer",
              }}
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
      <div className="logo-container" style={{ paddingLeft: "15px" }}>
        <Logo />
      </div>
      <div className="nav-routes" style={{ marginLeft: "18%" }}>
        <header>
          <nav>
            <div className="nav-ul">
              <div
                className="nav-container"
                onClick={() => setCurrentPage("home")}
              >
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setServices(false)}
                >
                  Home
                </Link>
                {currentPage === "home" && <div className="highlighter"></div>}{" "}
              </div>
              <div
                className="nav-container"
                onClick={() => setCurrentPage("services")}
              >
                <div>
                  <span to="/services" className="nav-link">
                    Services
                  </span>
                  <DownOutlined
                    style={{ marginInline: "10px", fontSize: "smaller" }}
                    onClick={() => setServices(!services)}
                  />
                </div>
                {currentPage === "services" && (
                  <div className="highlighter"></div>
                )}{" "}
              </div>
              <div
                className="nav-container"
                onClick={() => setCurrentPage("about")}
              >
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={() => setServices(false)}
                >
                  About Us
                </Link>
                {currentPage === "about" && <div className="highlighter"></div>}{" "}
              </div>
              {/* <div
                className="nav-container"
                onClick={() => setCurrentPage("contact")}
              >
                <Link
                  to="/contact"
                  className="nav-link"
                  onClick={() => setServices(false)}
                >
                  Contact Us
                </Link>
                {currentPage === "contact" && (
                  <div className="highlighter"></div>
                )}{" "}
              </div> */}
            </div>
          </nav>
        </header>
      </div>
      <div className="header-action" style={{ paddingRight: "30px" }}>
        <div
          style={{
            position: "relative",
            left: "-25px",
            cursor: "pointer",
            display: "flex",
          }}
        >
          <SearchIcon onClick={() => showModal(true)} />
        </div>
        <div>
          <button className="header-button">Request a Call back</button>
        </div>
      </div>

      {services && <ModalContent />}
    </div>
  );
};

export default Header;
