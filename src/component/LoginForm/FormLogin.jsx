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
      const response = await axios.post("http://localhost:3121/login", {
        username,
        password,
      });
      console.log("Login response:", response.data); // Debugging output
      if (response.data.success) {
        // Set items in localStorage
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);

        // Debugging with setTimeout to check storage
        setTimeout(() => {
          console.log(
            "Stored userId (after delay):",
            localStorage.getItem("userId")
          );
          console.log(
            "Stored token (after delay):",
            localStorage.getItem("token")
          );
          console.log(
            "Stored role (after delay):",
            localStorage.getItem("role")
          );

          // Navigate to the home page of the user's role
          navigate(`/${response.data.role}/home`);
        }, 10); // 1-second delay to ensure localStorage is updated
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
        <Form.Item className="gaust-btn">
          <Button
          className="gaust"
          href="/guast"
          type="primary"
          >
            المتابعة كضيف{" "}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
