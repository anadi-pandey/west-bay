import { Button, Checkbox, Form, Input, Select } from "antd";
import React from "react";
import girlImage from "../assets/pretty-smiling-woman-transperent-glasses 1.png";

const Contact = () => {
  return (
    <div style={{ padding: "100px" }}>
      <div
        className="get-in-touch"
        style={{ display: "flex", width: "80%", marginInline: "auto" }}
      >
        <div className="get-image">
          <img src={girlImage} />
        </div>
        <div style={{ width: "50%", padding: "80px", boxSizing: "border-box" }}>
          <div className="contact-us-heading">GET IN TOUCH WITH US</div>
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input placeholder="Enter Name" />
            </Form.Item>
            <Form.Item label="Preferred Country">
              <Select placeholder="Choose Country" />
            </Form.Item>
            <Form.Item label="Contact Number">
              <Input placeholder="Contact Number" />
            </Form.Item>
            <Form.Item label="Email Address">
              <Input placeholder="Contact Number" />
            </Form.Item>
            <Checkbox /> <span>I accept the Terms & Conditions</span>
            <div style={{ margin: "20px auto", textAlign: "center" }}>
              <Button style={{ width: "160px" }}>Submit</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
