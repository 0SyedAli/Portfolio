import React from "react";

const Contact = (props) => {
  return (
    <div>
      <div className="info">
        <h1 >Contact info</h1>
        <hr />
        <div className="email">
          <h2 className="text-danger">Email</h2>
          <p href="www.google.com">{props.email}</p>
        </div>
        <hr />
        <div className="address">
          <h2 className="text-danger">House Address</h2>
          <p>{props.address}</p>
        </div>
        <hr />
        <div className="phone">
          <h2 className="text-danger">Phone No.</h2>
          <p>{props.phone1 } -/- {props.phone2}</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Contact;
