"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Move these files to /public/assets/
const bg = "/assets/bg.png";
const resumeImage = "/assets/Resume.png"; // image preview (or first page screenshot)
const resumePDF = "/assets/Resume.pdf";   // PDF file in /public/assets/

export default function Resume() {
  return (
    <div>
      <Navbar bgcolor="#7e151fff" />

      <main
        style={{
          padding: "10px 5%",
          minHeight: "80vh",
          paddingTop: "10vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#7e151fff", paddingTop:'5vh' }}>My Resume</h1>
        <p style={{ color: "#000" }}>You can view or download my resume below:</p>

        {/* ✅ Download / View Full Button */}
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 24px",
            background: "#7e151fff",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "20px",
            fontWeight: "bold",
          }}
          download
        >
          Download Resume
        </a>

        {/* ✅ PDF Preview */}
        <embed
          src={resumeImage}
          type="application/pdf"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "100vh",
            marginTop: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
