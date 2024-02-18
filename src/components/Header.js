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
import search_png from "../assets/recentsearchesmajor-svgrepo-com.svg";
import s1 from "../assets/Icon_Clients (3).png";
import s2 from "../assets/Icon_Clients (2).png";
import s3 from "../assets/Icon_Uni (3).png";

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
          top: "100px",
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
                style={{ marginInline: "10px", color: "#3C3C3C" }}
              />
              Canada
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Malta
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Carribean Islands
            </div>
          </div>
        </div>

        <div className="services-section">
          <div className="service-name">PERMANENT RESIDENCY</div>
          <div className="service-content">
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Canada
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Australia
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              New Zealand
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              UK
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Italy
            </div>
          </div>
        </div>

        <div className="services-section">
          <div className="service-name">European Golden Visa</div>
          <div className="service-content">
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Italy
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Portugal
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Spain
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Greece
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Ireland
            </div>
          </div>
        </div>

        <div className="services-section">
          <div className="service-name">Overseas Education</div>
          <div className="service-content">
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Australia
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              US
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              UK
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
              Canada
            </div>
            <div>
              <InfoCircleFilled style={{ marginInline: "10px" }} />
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
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={null}
        style={{
          border: "solid 1px red",
          position: "absolute",
          top: "130px",
        }}
        width={"100vw"}
      >
        <div style={{ border: "solid 1px green" }}>
          <Input
            placeholder="Search"
            style={{
              backgroundColor: "transparent !important",
              height: "40px",
              fontSize: "larger",
              width: "50%",
            }}
            className="search-bar"
          />
        </div>
      </Modal>
      <div className="logo-container" style={{ paddingLeft: "15px" }}>
        <Logo />
      </div>
      <div className="nav-routes" style={{ marginLeft: "10%" }}>
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
              <div
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
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className="header-action" style={{ paddingInline: "20px" }}>
        <div
          style={{
            position: "relative",
            left: "-10px",
            cursor: "pointer",
            display: "flex",
          }}
        >
          <SearchIcon />
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
