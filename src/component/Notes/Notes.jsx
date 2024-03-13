import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "./Notes.css";

const Notes = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, notes });
    // Optionally, you can clear the form fields after submission
    setTitle("");
    setNotes("");
  };

  return (
    <div className="notes-container">
      <div className="notes-card">
        <h2 className="notes-heading">إضافة ملاحظة للطبيب</h2>
        <Form onSubmit={handleSubmit} className="notes-form">
          <Form.Item className="form-item">
            <div className="custom-text">أدخل العنوان</div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="أدخل العنوان"
              className="input-field"
            />
          </Form.Item>
          <Form.Item className="form-item elemnt">
            <div className="custom-text">أدخل الملاحظات</div>
            <Input.TextArea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="أدخل الملاحظات"
              rows={4}
              className="input-field"
            />
          </Form.Item>
          <Form.Item className="form-item elemnt">
            <Button type="primary" htmlType="submit" className="submit-button">
              إضافة ملاحظة
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Notes;
