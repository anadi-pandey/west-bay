import { Button, Checkbox, Form, Input, Modal, Select, Switch } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import girlImage from "../assets/pretty-smiling-woman-transperent-glasses 1.png";
import thanks from "../Pages/Illustration 2 (1).png";
import { AppContext } from "../AppContext";

const GetInTouch = () => {
  const [submitted, setSubmitted] = useState(false);
  const countryOptions = [
    {
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          Australia
        </span>
      ),
      value: "AUS",
    },
    {
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          Canada
        </span>
      ),
      value: "CAN",
    },
    {
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          Europe
        </span>
      ),
      value: "EUR",
    },
    {
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          New Zealand
        </span>
      ),
      value: "NZ",
    },
    {
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          United Kindom
        </span>
      ),
      value: "UK",
    },
    {
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          United States of America
        </span>
      ),
      value: "USA",
    },
  ];

  const phoneOptions = [
    {
      value: "+1",
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          +1
        </span>
      ),
    },
    {
      value: "+44",
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          +44
        </span>
      ),
    },
    {
      value: "+64",
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          +64
        </span>
      ),
    },
    {
      value: "+971",
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          +971
        </span>
      ),
    },
    {
      value: "+61",
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          +61
        </span>
      ),
    },
  ];

  //   Ref
  const divRef = useRef(null);
  const { appState, updateValue } = useContext(AppContext);

  //   State:
  const [isVisible, setIsVisible] = useState(false);

  //   Effects:
  useEffect(() => {
    console.log("Global Presence Mounted");
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        console.log("Flags Collecion Entered viewport");
        updateValue(false, "showDownArrow");
      } else if (!entry.isIntersecting && isVisible) {
        console.log("Flags Collecion exited viewport");
        updateValue(true, "showDownArrow");
      }
      setIsVisible(entry.isIntersecting);
    }, options);

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div>
      {" "}
      <div
        className="get-in-touch"
        style={{
          display: "flex",
          width: "80%",
          marginInline: "auto",
          marginTop: "20px",
        }}
        ref={divRef}
      >
        <div className="get-image">
          <img src={girlImage} />
        </div>
        <div style={{ width: "50%", padding: "80px", boxSizing: "border-box" }}>
          <div className="contact-us-heading">GET IN TOUCH WITH US</div>
          <Form layout="vertical">
            <Form.Item
              label={
                <span
                  style={{
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "150%",
                    position: "relative",
                    top: "5px",
                    fontFamily: "Noto Sans",
                    marginBottom: "5px",
                  }}
                >
                  Name
                </span>
              }
              style={{ marginBottom: "20px" }}
            >
              <Input
                placeholder="Enter Name"
                style={{
                  height: "50px",
                  boxSizing: "border-box",
                  fontSize: "medium",
                }}
              />
            </Form.Item>
            <Form.Item
              label={
                <span
                  style={{
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "150%",
                    position: "relative",
                    top: "5px",
                    fontFamily: "Noto Sans",
                    marginBottom: "5px",
                  }}
                >
                  Preferred Country
                </span>
              }
              style={{ marginBottom: "20px" }}
            >
              <Select
                placeholder={
                  <span
                    style={{
                      fontFamily: "Noto Sans",
                      fontSize: "larger",
                    }}
                  >
                    Choose Country
                  </span>
                }
                style={{
                  height: "50px",
                  boxSizing: "border-box",
                  fontSize: "larger",
                }}
                options={countryOptions}
              />
            </Form.Item>
            <Form.Item
              label={
                <span
                  style={{
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "150%",
                    position: "relative",
                    top: "5px",
                    fontFamily: "Noto Sans",
                    marginBottom: "5px",
                  }}
                >
                  Contact Number
                </span>
              }
              style={{ marginBottom: "20px" }}
            >
              <div style={{ display: "flex" }}>
                <Select
                  style={{
                    width: "80px",
                    height: "50px",
                    marginRight: "5px",
                  }}
                  options={phoneOptions}
                  placeholder={"+"}
                />
                <Input
                  placeholder="Contact Number"
                  style={{
                    height: "50px",
                    boxSizing: "border-box",
                    fontSize: "medium",
                  }}
                />
              </div>
            </Form.Item>
            <Form.Item style={{ marginBottom: "20px" }}>
              <Switch defaultChecked />
              <span
                style={{
                  fontSize: "20px",
                  color: "#000",
                  lineHeight: "150%",
                  marginLeft: "20px",
                  position: "relative",
                  top: "5px",
                  fontFamily: "Noto Sans",
                }}
              >
                Use this as Whatsapp Number
              </span>
            </Form.Item>
            <Form.Item
              label={
                <span
                  style={{
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "150%",
                    position: "relative",
                    top: "5px",
                    fontFamily: "Noto Sans",
                    marginBottom: "5px",
                  }}
                >
                  Email Address
                </span>
              }
              style={{ marginBottom: "20px" }}
            >
              <Input
                placeholder="Email "
                style={{
                  height: "50px",
                  boxSizing: "border-box",
                  fontSize: "medium",
                }}
              />
            </Form.Item>
            <Checkbox
              style={{
                marginRight: "10px",
                position: "relative",
                top: "3px",
              }}
            />{" "}
            <span
              style={{
                fontSize: "20px",
                color: "#000",
                lineHeight: "150%",
                position: "relative",
                top: "5px",
                fontFamily: "Noto Sans",
                marginBottom: "5px",
                marginTop: "30px",
              }}
            >
              I accept the Terms & Conditions
            </span>
            <div
              style={{
                margin: "30px auto",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              <Button
                style={{
                  width: "100%",
                  height: "60px",
                  backgroundColor: "#045690",
                  fontSize: "20px",
                  fontFamily: "Noto Sans",
                  color: "white",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}
                onClick={() => setSubmitted(true)}
              >
                Submit
              </Button>
            </div>
          </Form>
          <Modal
            title=""
            open={submitted}
            onOk={() => console.log("h")}
            onCancel={() => setSubmitted(false)}
            footer={null}
            // closeIcon={null}
            style={{
              position: "absolute",
              top: "15%",
              left: "25%",
              zIndex: "999999",
              padding: "30px",
            }}
            width={"50vw"}
          >
            <div
              style={{
                width: "70%",
                marginInline: "auto",
              }}
            >
              <img src={thanks} style={{ width: "100%" }} />
            </div>
            <div
              style={{
                color: "#00467F",
                fontFamily: "Montserrat",
                fontSize: "50px",
                textTransform: "uppercase",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Thank You !
            </div>
            <div
              style={{
                color: "#00467F",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "500",
                width: "95%",
                marginInline: "auto",
                margin: "25px auto",
              }}
            >
              We have received your Request successfully, Our team will get in
              touch with you.
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
