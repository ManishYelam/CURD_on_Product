import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import PaginationComponent from './PaginationComponent';

function PaymentHistory() {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);  // Set items per page

  useEffect(() => {
    fetch('/data/paymentHistory.json')
      .then(response => response.json())
      .then(data => setPaymentHistory(data))
      .catch(error => console.error('Error fetching payment history:', error));
  }, []);

  // Get current payments
  const indexOfLastPayment = currentPage * itemsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - itemsPerPage;
  const currentPayments = paymentHistory.slice(indexOfFirstPayment, indexOfLastPayment);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h3>Payment History</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mode</th>
            <th>Amount</th>
            <th>Received</th>
            <th>Date</th>
            <th>Value Date</th>
            <th>Realized</th>
            <th>Bank</th>
            <th>Branch</th>
            <th>Instrument Number</th>
            <th>Receipt</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {currentPayments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.mode}</td>
              <td>{payment.amount}</td>
              <td>{payment.received}</td>
              <td>{payment.date}</td>
              <td>{payment.valueDate}</td>
              <td>{payment.realized}</td>
              <td>{payment.bank}</td>
              <td>{payment.branch}</td>
              <td>{payment.instrumentNumber}</td>
              <td>{payment.receipt}</td>
              <td>{payment.remark}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationComponent
        itemsPerPage={itemsPerPage}
        totalItems={paymentHistory.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default PaymentHistory;
