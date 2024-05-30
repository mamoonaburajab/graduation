import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3121/reset-password', { username });
      notification.success({
        message: 'Password Reset',
        description: response.data.message,
      });
    } catch (error) {
      notification.error({
        message: 'Error',
        description: error.response?.data.message || 'An error occurred while resetting the password',
      });
    }
    setLoading(false);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <div className="forgot-password-header">
          <h2>Reset Password</h2>
        </div>
        <Form name="forgot-password-form" onFinish={handleResetPassword}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{ width: '100%' }}
            >
             اعادة تعيين كلمة المرور
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
