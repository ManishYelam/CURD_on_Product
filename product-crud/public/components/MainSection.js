import React from 'react';
import MyCustomers from './MyCustomers';
import Allotments from './Allotments';
import PaymentHistory from './PaymentHistory';
import { Container, Row, Col } from 'react-bootstrap';

function MainSection() {
  return (
    <Container fluid className="p-3" style={{ flex: 1 }}>
      <Row className="mb-4">
        <Col>
          <MyCustomers />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Allotments />
        </Col>
      </Row>
      <Row>
        <Col>
          <PaymentHistory />
        </Col>
      </Row>
    </Container>
  );
}

export default MainSection;
