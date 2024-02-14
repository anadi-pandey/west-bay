import React, { useState } from "react";
import Logo from "../icons/Logo";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "../icons/Search";
import { Button } from "antd";
import {
  CiCircleFilled,
  DownOutlined,
  InfoCircleFilled,
} from "@ant-design/icons";
import "../App.css";

const Header = () => {
  const [services, setServices] = useState(false);
  const navigate = useNavigate();

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

  return (
    <div className="app-header">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-routes">
        <header>
          <nav>
            <div className="nav-ul">
              <div>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setServices(false)}
                >
                  Home
                </Link>
              </div>
              <div>
                <span to="/services" className="nav-link">
                  Services
                </span>
                <DownOutlined
                  style={{ marginInline: "10px", fontSize: "smaller" }}
                  onClick={() => setServices(!services)}
                />
              </div>
              <div>
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={() => setServices(false)}
                >
                  About Us
                </Link>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="nav-link"
                  onClick={() => setServices(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className="header-action">
        <div>
          <SearchIcon />
        </div>
        <div>
          <Button className="header-button">Request a Callback</Button>
        </div>
      </div>

      {services && <ModalContent />}
    </div>
  );
};

export default Header;
