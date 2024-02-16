import { Button, Checkbox, Form, Input, Select, Switch } from "antd";
import React from "react";
import girlImage from "../assets/pretty-smiling-woman-transperent-glasses 1.png";

const Contact = () => {
  return (
    <div style={{ paddingTop: "200px" }}>
      <div
        className="get-in-touch"
        style={{
          display: "flex",
          width: "80%",
          marginInline: "auto",
        }}
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
              <Input
                placeholder="Contact Number"
                style={{
                  height: "50px",
                  boxSizing: "border-box",
                  fontSize: "medium",
                }}
              />
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
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
