import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "./FormLogin.css";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3017/api/login",
        values
      );

      if (response.data.success) {
        // Redirect to the home page upon successful login
        navigate("/mother/home");
      } else {
        // Handle login error (e.g., display an error message)
      }
    } catch (error) {
      console.error("Login error:", error.message);
      // Handle other errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      name="login-form"
      onFinish={onFinish}
      style={{ width: "250px", height: "300px", margin: "auto" }}
    >
      <Form.Item name="username">
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item name="password">
        <Input.Password placeholder="Password" />
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
  );
};

export default LoginForm;
