import React from 'react';

const PaymentList = ({ payments }) => {
  return (
    <div>
      <h2>Payments</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
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
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.mode}</td>
              <td>{payment.amount}</td>
              <td>{payment.received ? 'Yes' : 'No'}</td>
              <td>{payment.date}</td>
              <td>{payment.valueDate}</td>
              <td>{payment.realized ? 'Yes' : 'No'}</td>
              <td>{payment.bank}</td>
              <td>{payment.branch}</td>
              <td>{payment.instrumentNumber}</td>
              <td>{payment.receipt}</td>
              <td>{payment.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;
