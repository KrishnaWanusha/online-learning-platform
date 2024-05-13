import React from "react";
import logo from "../../assets/logo.png";

export const Email = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <h1
          style={{
            marginBottom: "40px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Your Course Payment Receipt
        </h1>
        <p style={{ marginBottom: "20px" }}>Dear [Recipient's Name],</p>
        <p style={{ marginBottom: "20px" }}>
          We are pleased to inform you that we have received your payment for
          the following course:
        </p>
        <ul style={{ marginBottom: "20px" }}>
          <li>
            <strong>Course Name :</strong> JavaScript Fundamentals
          </li>
          <li>
            <strong>Amount Paid :</strong> $50
          </li>
          <li>
            <strong>Payment Method :</strong> Credit Card
          </li>
        </ul>
        <p style={{ marginBottom: "20px" }}>
          If you have any questions or concerns regarding your payment or the
          course, please don't hesitate to contact us.
        </p>
        <p style={{ marginBottom: "60px" }}>
          Thank you for choosing our platform for your learning needs.
        </p>
        <img
          src={logo}
          alt="Logo"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "20px",
            width: "130px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};
