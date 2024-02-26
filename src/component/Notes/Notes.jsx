import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "./Notes.css"; // Create a separate CSS file for styling

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
      <h2 className="notes-heading">Add Note to Doctor</h2>
      <Form onSubmit={handleSubmit} className="notes-form">
        <Form.Item label="Title" className="form-item">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="input-field"
          />
        </Form.Item>
        <Form.Item label="Notes" className="form-item">
          <Input.TextArea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter notes"
            rows={4}
            className="input-field"
          />
        </Form.Item>
        <Form.Item className="form-item">
          <Button type="primary" htmlType="submit" className="submit-button">
            Add Note
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Notes;
