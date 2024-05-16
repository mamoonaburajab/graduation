import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import "./Notes.css";

const Notes = ({ childId }) => {
  const [note, setNote] = useState("");

  return (
    <div className="notes-container">
      <div className="notes-card">
        <h2 className="notes-heading">إضافة ملاحظة للطبيب</h2>
        <Form className="notes-form">
          <Form.Item className="form-item elemnt">
            <div className="custom-text">أدخل الملاحظات</div>
            <Input.TextArea
              value={note}
              onChange={(e) => setNote(e.target.value)}
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
