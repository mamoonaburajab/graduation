import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FormLogin.css";

const { Option } = Select;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("mom");
  const navigate = useNavigate();

  const handleRoleChange = (value) => {
    setSelectedRole(value);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3007/login", {
        username,
        password,
      });
      if (response.data.success) {
        navigate(response.data.redirectUrl);
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="Select-Opt">
        <Select
          defaultValue="mom"
          style={{ width: 120, marginBottom: 20 }}
          onChange={handleRoleChange} // Handle role selection change
        >
          <Option value="mom">Mom</Option>
          <Option value="doctor">Doctor</Option>
          <Option value="manager">Manager</Option>
          <Option value="admin">Administrator</Option>
        </Select>
      </div>
      <Form
        name="login-form"
        style={{ width: "250px", height: "300px", margin: "auto" }}
        onFinish={handleLogin} // Handle form submission
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%", fontSize: "16px" }}
            loading={loading}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
