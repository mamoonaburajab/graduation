import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FormLogin.css";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3120/login", {
        username,
        password,
      });
      if (response.data.success) {
        localStorage.setItem('userId', response.data.userId);  // Store user ID
        localStorage.setItem('token', response.data.token);    // Store token
        localStorage.setItem('role', response.data.role);      // Store role
        navigate(`/${response.data.role}/home`);
      } else {
        alert("Authentication failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed due to server error.");
    }
    setLoading(false);
  };

  return (
    <div>
      <Form name="login-form" onFinish={handleLogin} style={{ width: "250px" }}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="اسم المستخدم"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة المرور"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ width: "100%" }}
          >
            تسجيل الدخول
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
