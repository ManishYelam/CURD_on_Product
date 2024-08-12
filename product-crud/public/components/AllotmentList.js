import React, { useState } from 'react';
import PaymentList from './PaymentList';

const AllotmentList = ({ allotments }) => {
  const [selectedAllotment, setSelectedAllotment] = useState(null);

  const handleSelectAllotment = (allotment) => {
    setSelectedAllotment(allotment);
  };

  return (
    <div>
      <h2>Allotments</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project</th>
            <th>Building</th>
            <th>Door Number</th>
            <th>Carpet Area</th>
            <th>Sellable Area</th>
            <th>Parking Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allotments.map(allotment => (
            <tr key={allotment.id} onClick={() => handleSelectAllotment(allotment)}>
              <td>{allotment.id}</td>
              <td>{allotment.project}</td>
              <td>{allotment.building}</td>
              <td>{allotment.doorNumber}</td>
              <td>{allotment.carpetArea}</td>
              <td>{allotment.sellableArea}</td>
              <td>{allotment.parkingType}</td>
              <td>{allotment.activeStatus}</td>
              <td>
                <button className="btn btn-primary">View Payments</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedAllotment && <PaymentList payments={selectedAllotment.payments} />}
    </div>
  );
};

export default AllotmentList;
