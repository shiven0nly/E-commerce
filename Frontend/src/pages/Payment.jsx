'use client';
import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess =()=> {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-indigo-950 flex items-center justify-center"
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="none"
          viewBox="0 0 24 24"
          stroke="green"
          strokeWidth="2"
          style={{ marginBottom: "1rem" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 
            9 0 0118 0z"
          />
        </svg>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Payment Successful
        </h1>
        <p style={{ color: "#4b5563", marginBottom: "1.5rem" }}>
          Thank you for your purchase! Your transaction has been completed successfully.
        </p>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "#2563eb",
            color: "white",
            padding: "0.5rem 1.5rem",
            borderRadius: "0.5rem",
            fontWeight: "500"
          }}
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;