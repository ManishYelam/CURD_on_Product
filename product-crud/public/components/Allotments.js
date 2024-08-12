import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import PaginationComponent from './PaginationComponent';

function Allotments() {
  const [allotments, setAllotments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);  // Set items per page

  useEffect(() => {
    fetch('/data/allotments.json')
      .then(response => response.json())
      .then(data => setAllotments(data))
      .catch(error => console.error('Error fetching allotments:', error));
  }, []);

  // Get current allotments
  const indexOfLastAllotment = currentPage * itemsPerPage;
  const indexOfFirstAllotment = indexOfLastAllotment - itemsPerPage;
  const currentAllotments = allotments.slice(indexOfFirstAllotment, indexOfLastAllotment);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h3>Allotments</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project</th>
            <th>Building</th>
            <th>Door Number</th>
            <th>Carpet Area</th>
            <th>Sellable Area</th>
            <th>Parking Type</th>
            <th>Active Status</th>
          </tr>
        </thead>
        <tbody>
          {currentAllotments.map((allotment, index) => (
            <tr key={index}>
              <td>{allotment.project}</td>
              <td>{allotment.building}</td>
              <td>{allotment.doorNumber}</td>
              <td>{allotment.carpetArea}</td>
              <td>{allotment.sellableArea}</td>
              <td>{allotment.parkingType}</td>
              <td>{allotment.activeStatus}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationComponent
        itemsPerPage={itemsPerPage}
        totalItems={allotments.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Allotments;
