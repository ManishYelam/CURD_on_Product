import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 bg-light shadow-sm" style={{ width: '280px', height: '100vh' }}>
      <h5 className="text-center mb-4">My Workspace</h5>
      <Nav className="flex-column">
        <Nav.Link href="#/profile" className="mb-2">
          <div className="d-flex align-items-center">
            <i className="bi bi-person-circle me-2"></i> Profile
          </div>
        </Nav.Link>
        <Nav.Link href="#/sale" className="mb-2">
          <div className="d-flex align-items-center">
            <i className="bi bi-cart-check me-2"></i> Sale
          </div>
        </Nav.Link>
        <Nav.Link href="#/site" className="mb-2">
          <div className="d-flex align-items-center">
            <i className="bi bi-house me-2"></i> Site
          </div>
        </Nav.Link>
        <Nav.Link href="#/reports" className="mb-2">
          <div className="d-flex align-items-center">
            <i className="bi bi-file-earmark-bar-graph me-2"></i> Reports
          </div>
        </Nav.Link>
        <Nav.Link href="#/construction" className="mb-2">
          <div className="d-flex align-items-center">
            <i className="bi bi-tools me-2"></i> Construction
          </div>
        </Nav.Link>
        <Nav.Link href="#/alerts" className="mb-2">
          <div className="d-flex align-items-center">
            <i className="bi bi-bell me-2"></i> Alerts
          </div>
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
