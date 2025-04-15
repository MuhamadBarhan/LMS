import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"; // Make sure this is correctly configured
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Reset Your Password</h3>
      <form onSubmit={handleResetPassword}>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Reset Link
        </button>
      </form>
      {message && <p className="mt-3 text-info">{message}</p>}
      <button onClick={() => navigate("/login")} className="btn btn-link mt-3">
        Back to Login
      </button>
    </div>
  );
};

export default ForgotPassword;
