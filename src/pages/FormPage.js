import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function FormPage() {
  const [formData, setFormData] = useState({
    pdfFile: null,
    date: "",
    title: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to handle form submission
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      pdfFile: e.target.files[0],
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <Typography variant="h4">Form Page</Typography>
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          textDecoration: "none",
          display: "flex",
          gap: 4,
          justifyContent: "center"
        }}
      >
        <Link
          to="/downloadform"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button variant="contained">Download</Button>
        </Link>
        <Button variant="contained">
          <Link
            to="/updateform"
            style={{ textDecoration: "none", color: "white" }}
          >
            Updates
          </Link>
        </Button>
        <Button variant="contained">
          <Link
            to="/latestnews"
            style={{ textDecoration: "none", color: "white" }}
          >
            Latest news
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default FormPage;
