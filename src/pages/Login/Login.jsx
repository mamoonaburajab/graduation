import React from "react";
import { Form, Input, Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import Footer from "../../component/Footer/Footer";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contaner11">
      <div className="contaner"></div>
      <div className="form-contaner">
      <div className="form">
        <h1 className="title">تسجيل الدخول</h1>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ width: "300px", height: "300px", margin: "auto" }}
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
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
