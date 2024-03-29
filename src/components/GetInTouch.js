import { Button, Checkbox, Form, Input, Modal, Select, Switch } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import girlImage from "../assets/pretty-smiling-woman-transperent-glasses 1.png";
import thanks from "../Pages/Illustration 2 (1).png";
import { AppContext } from "../AppContext";

const GetInTouch = ({ isMobile }) => {
  const [submitted, setSubmitted] = useState(false);
  const [otherCountry, setOtherCountry] = useState(false);
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
    {
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          Another Country
        </span>
      ),
      value: "AC",
    },
  ];

  const phoneOptions = [
    {
      value: "+91",
      label: (
        <span
          style={{
            fontFamily: "Noto Sans",
            fontSize: "larger",
            fontWeight: "500",
          }}
        >
          +91
        </span>
      ),
    },
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
        {!isMobile && (
          <div className="get-image">
            <img src={girlImage} />
          </div>
        )}
        <div
          style={
            !isMobile
              ? { width: "50%", padding: "80px", boxSizing: "border-box" }
              : { width: "100%", padding: "20px", boxSizing: "border-box" }
          }
        >
          <div className="contact-us-heading">GET IN TOUCH WITH US</div>
          <Form layout="vertical" onFinish={() => setSubmitted(true)}>
            <Form.Item
              label={
                <span
                  style={
                    !isMobile
                      ? {
                          fontSize: "20px",
                          color: "#000",
                          lineHeight: "150%",
                          position: "relative",
                          top: "5px",
                          fontFamily: "Noto Sans",
                          marginBottom: "5px",
                        }
                      : { fontSize: "15px" }
                  }
                >
                  Name
                </span>
              }
              style={{ marginBottom: "20px" }}
              rules={[{ required: true, message: "Please enter your Name!" }]}
              name="Name"
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
                  style={
                    !isMobile
                      ? {
                          fontSize: "20px",
                          color: "#000",
                          lineHeight: "150%",
                          position: "relative",
                          top: "5px",
                          fontFamily: "Noto Sans",
                          marginBottom: "5px",
                        }
                      : { fontSize: "15px" }
                  }
                >
                  Preferred Country
                </span>
              }
              style={{ marginBottom: "20px" }}
              name="Country"
              rules={[{ required: true, message: "Select a country" }]}
            >
              {!otherCountry && (
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
                  onSelect={(e) => (e === "AC" ? setOtherCountry(true) : null)}
                />
              )}
              {otherCountry && (
                <Input
                  placeholder="Enter Country"
                  style={{
                    height: "50px",
                    boxSizing: "border-box",
                    fontSize: "medium",
                  }}
                />
              )}
            </Form.Item>
            <Form.Item
              label={
                <span
                  style={
                    !isMobile
                      ? {
                          fontSize: "20px",
                          color: "#000",
                          lineHeight: "150%",
                          position: "relative",
                          top: "5px",
                          fontFamily: "Noto Sans",
                          marginBottom: "5px",
                        }
                      : {
                          fontSize: "15px",
                          color: "#000",
                          lineHeight: "150%",
                          position: "relative",
                          top: "5px",
                          fontFamily: "Noto Sans",
                          marginBottom: "5px",
                        }
                  }
                  rules={[{ required: true, message: "Enter Contact Number" }]}
                >
                  Contact Number
                </span>
              }
              style={{ marginBottom: "20px" }}
              name="Number"
              rules={[
                { required: true, message: "Please enter contact number" },
              ]}
            >
              <div style={{ display: "flex" }}>
                <Select
                  style={{
                    width: "100px",
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
                style={
                  !isMobile
                    ? {
                        fontSize: "20px",
                        color: "#000",
                        lineHeight: "150%",
                        position: "relative",
                        top: "5px",
                        fontFamily: "Noto Sans",
                        marginBottom: "5px",
                      }
                    : {
                        fontSize: "15px",
                        color: "#000",
                        lineHeight: "150%",
                        position: "relative",
                        top: "5px",
                        fontFamily: "Noto Sans",
                        marginBottom: "5px",
                        paddingLeft: "10px",
                      }
                }
              >
                Use this as Whatsapp Number
              </span>
            </Form.Item>
            <Form.Item
              label={
                <span
                  style={
                    !isMobile
                      ? {
                          fontSize: "20px",
                          color: "#000",
                          lineHeight: "150%",
                          position: "relative",
                          top: "5px",
                          fontFamily: "Noto Sans",
                          marginBottom: "5px",
                        }
                      : {
                          fontSize: "15px",
                          color: "#000",
                          lineHeight: "150%",
                          position: "relative",
                          top: "5px",
                          fontFamily: "Noto Sans",
                          marginBottom: "5px",
                        }
                  }
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
              style={
                !isMobile
                  ? {
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "150%",
                      position: "relative",
                      top: "5px",
                      fontFamily: "Noto Sans",
                      marginBottom: "5px",
                    }
                  : {
                      fontSize: "15px",
                      color: "#000",
                      lineHeight: "150%",
                      position: "relative",
                      top: "5px",
                      fontFamily: "Noto Sans",
                      marginBottom: "5px",
                    }
              }
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
              <Form.Item>
                <Button
                  style={
                    !isMobile
                      ? {
                          width: "100%",
                          height: "60px",
                          backgroundColor: "#045690",
                          fontSize: "20px",
                          fontFamily: "Noto Sans",
                          color: "white",
                          textTransform: "capitalize",
                          fontWeight: "600",
                        }
                      : {
                          width: "100%",
                          height: "40px",
                          backgroundColor: "#045690",
                          fontSize: "20px",
                          fontFamily: "Noto Sans",
                          color: "white",
                          textTransform: "capitalize",
                          fontWeight: "600",
                          fontSize: "large",
                        }
                  }
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
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
