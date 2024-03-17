import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FormLogin.css";

const { Option } = Select;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("Doctor"); // State to store selected role

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const { role: selectedRole, ...loginValues } = values; // Destructure role from values and rename to selectedRole
      const response = await axios.post(
        "http://localhost:3017/api/login",
        loginValues, // Send only username and password
        {
          params: { role: selectedRole } // Send selectedRole as a query parameter
        }
      );
      const { success, id, message } = response.data; // Remove role from response data

      if (success) {
        // Navigate based on the user role
        switch (selectedRole) {
          case "Doctor":
            navigate("/Doctor/home");
            break;
          case "Administrative_Manager":
            navigate("/admin/home");
            break;
          case "System_Administrator":
            navigate("/admin/system");
            break;
          case "Mother":
            navigate("/mother/home");
            break;
          default:
            // Default route if role is not recognized
            navigate("/home");
        }
      } else {
        // Handle login error
        console.error("Login error:", message);
      }
    } catch (error) {
      console.error("Login error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = (value) => {
    setSelectedRole(value); // Update selected role
  };

  return (
    <div>
      <div className="Select-Opt">
        <Select
          defaultValue="Doctor"
          style={{ width: 120, marginBottom: 20 }}
          onChange={handleRoleChange} // Handle role selection change
        >
          <Option value="Doctor">Doctor</Option>
          <Option value="Administrative_Manager">Administrative Manager</Option>
          <Option value="System_Administrator">System Administrator</Option>
          <Option value="Mother">Mother</Option>
        </Select>
      </div>
      <Form
        name="login-form"
        onFinish={onFinish}
        style={{ width: "250px", height: "300px", margin: "auto" }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
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
    </div>
  );
};

export default LoginForm;
