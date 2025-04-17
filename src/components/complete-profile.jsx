import React, { useState } from "react";
import axios from "axios";

const CompleteProfile = () => {
  const storedData = JSON.parse(localStorage.getItem("tempUser")) || {};
  const [education, setEducation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const finalUser = { ...storedData, education };
      await axios.post("http://localhost:8080/registration/signup", finalUser);
      localStorage.removeItem("tempUser");
      localStorage.setItem("authToken", "user_" + new Date().getTime());
      localStorage.setItem("username", storedData.name);
      localStorage.setItem("email", storedData.email);
      alert("Profile completed!");
      window.location.href = "/courses";
    } catch (err) {
      alert("Error saving profile");
    }
  };

  return (
    <div className="container py-4" style={{marginTop:"8rem"}}>
      <h3>Complete Your Profile</h3>
      <form onSubmit={handleSubmit}>
        <label>Select Education</label>
        <select
          className="form-select my-3"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        >
          <option value="">Choose education</option>
          <option value="b.tech">B.Tech</option>
          <option value="b.e">B.E</option>
          <option value="b.sc">B.Sc</option>
          <option value="m.sc">M.Sc</option>
          <option value="m.tech">M.Tech</option>
          <option value="m.e">M.E</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompleteProfile;
