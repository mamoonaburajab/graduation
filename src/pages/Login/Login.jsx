import React from "react";
import { Form, Input, Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form">
      <h1 className="title">تسجيل الدخول</h1>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ width: "300px", height: "300px", margin: "auto" }} // Adjust the width and center the form
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="اسم المستخدم" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="كلمة المرور" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%", fontSize: "16px" }}
          >
            إرسال
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
