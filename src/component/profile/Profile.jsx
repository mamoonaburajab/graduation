import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'; // Make sure the path is correct

function AccountSettings() {
  // Define the state variables for the form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');

  // Define the handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    // For now, we'll just log the form data to the console
    console.log('Form data submitted:', { firstName, lastName, phoneNumber, email, city, state, postcode, country });
  };

  return (
    <Container dir="rtl"> {/* Add direction for RTL layout */}
      <Tabs defaultActiveKey="accountSettings" id="account-settings-tab" className="mb-3">
        <Tab eventKey="accountSettings" title="إعدادات الحساب">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>الاسم الأول</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>الاسم الأخير</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>رقم الهاتف</Form.Label>
                  <Form.Control
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>البريد الإلكتروني</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>المدينة</Form.Label>
                  <Form.Control
                    as="select"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    {/* Insert your city options here */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>الولاية / المقاطعة</Form.Label>
                  <Form.Control
                    as="select"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    {/* Insert your state options here */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>البلد</Form.Label>
                  <Form.Control
                    as="select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {/* Insert your country options here */}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>الرمز البريدي</Form.Label>
                  <Form.Control
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              تحديث
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="editInfo" title="تعديل المعلومات">
          {/* This Tab will contain fields that user can edit */}
          <Form onSubmit={handleSubmit}>
            {/* Similar structure as above for the fields you want to edit */}
            <Button variant="primary" type="submit">
              حفظ التغييرات
            </Button>
          </Form>
        </Tab>
        {/* Add other tabs as needed */}
      </Tabs>
    </Container>
  );
}

export default AccountSettings;
