import React from 'react';

const CustomerService = () => {
  //Side Bar for customer service text
  return (
    <div className="service">
      <div className="service-support">
        <p className="service-support-header">
          Need help or have any questions?
        </p>
        <p className="service-support-info">
          Call Customer Service at 1-800-555-555
        </p>
        <p className="service-support-underline">
          Chat with one of our stylists
        </p>
        <p className="service-support-underline">
          See return or exchange policy
        </p>

        <h3 className="promotion-header">YOUR PROMOTION CODES</h3>
        <p className="promotion-codes">ASJ52, FREE, HIRE, MEPLZ</p>
      </div>
    </div>
  );
};

export default CustomerService;
