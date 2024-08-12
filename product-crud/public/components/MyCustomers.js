import React, { useState, useEffect } from 'react';
import AllotmentList from './AllotmentList';

const MyCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetch('/data/mockData.json')
      .then(response => response.json())
      .then(data => setCustomers(data.customers))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div>
      <h2>Customers</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Mobile</th>
            <th>Landline</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id} onClick={() => handleSelectCustomer(customer)}>
              <td>{customer.id}</td>
              <td>{customer.firstName}</td>
              <td>{customer.middleName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.address}</td>
              <td>{customer.pincode}</td>
              <td>{customer.mobile}</td>
              <td>{customer.landline}</td>
              <td>{customer.email}</td>
              <td>
                <button className="btn btn-primary">View Allotments</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCustomer && <AllotmentList allotments={selectedCustomer.allotments} />}
    </div>
  );
};

export default MyCustomers;
