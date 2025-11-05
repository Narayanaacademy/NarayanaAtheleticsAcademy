"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const trainingFromQuery = searchParams.get("training");
  const bg = "/assets/bg.png";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    training: trainingFromQuery || "",
  });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (trainingFromQuery) {
      setForm((f) => ({ ...f, training: trainingFromQuery }));
    }
  }, [trainingFromQuery]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const emailjsModule = await import("emailjs-com");
      const emailjs = emailjsModule.default ?? emailjsModule;

      await emailjs.send(
        "service_rxw13uu", // ✅ Your Service ID
        "template_zxhx0n6", // ✅ Your Template ID
        form,
        "8LTAuDvV4wtjmANtN" // ✅ Your Public Key
      );

      setShowAlert(true);
    } catch (err) {
      console.error("Email send failed:", err);
      alert("Oops! Something went wrong. Please try again later.");
    }
  }

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundImage: `url(${bg})`,
      }}
    >
      <Navbar bgcolor="#7e151fff" />
      <div style={{ height: "80px" }} />

      <main
        style={{
          padding: "20px 30px",
          minHeight: "60vh",
          maxWidth: "1000px",
          margin: "70px auto",
          border: "2px solid #7e151fff",
          borderRadius: "12px",
          color: "#000",
        }}
      >
        <h1 style={{ marginTop: 0, fontSize: "35px" }}>Enroll / Contact</h1>
        <br />
        <p style={{ color: "#7e151fff", fontSize: "18px" }}>
          Fill the form below and our team will reach out to you to help with
          Enrollment and Free Trial.
        </p>

        <form onSubmit={handleSubmit} style={{ maxWidth: 720, marginTop: 18 }}>
          <div className="form-grid" style={{ padding: "10px", gap: "20px" }}>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name*"
              className="input"
              style={{
                borderColor: "#7e151fff",
                backgroundColor: "#fff",
                color: "#000",
              }}
            />
            <input
              required
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number*"
              className="input"
              style={{
                borderColor: "#7e151fff",
                backgroundColor: "#fff",
                color: "#000",
              }}
            />
            <input
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address*"
              className="input"
              style={{
                borderColor: "#7e151fff",
                backgroundColor: "#fff",
                color: "#000",
              }}
            />
            <input
              required
              name="training"
              value={form.training}
              onChange={handleChange}
              placeholder="Training name or any Query*"
              className="input"
              style={{
                borderColor: "#7e151fff",
                backgroundColor: "#fff",
                color: "#000",
              }}
            />
          </div>

          <div className="btn-group">
            <button type="submit" className="btn-primary">
              Submit
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="btn-outline"
              style={{ borderColor: "#7e151fff", color: "#000" }}
            >
              Cancel
            </button>
          </div>
        </form>
        <br />
        <h2>For Quick Response</h2>
        <br />
        <h3>Please reach out to us:</h3>
        <p>
          📞
          <a
            href="tel:+919849598737"
            style={{ textDecoration: "underline", color: "blue" }}
          >
            +91 98483 11164
          </a>
        </p>
        <p>
          📧
          <a
            href="mailto:narayanaathleticsacademy@gmail.com"
            style={{ textDecoration: "underline", color: "blue" }}
          >
            narayanaathleticsacademy@gmail.com
          </a>
        </p>
        <br />
        <br />
        <a
          href="/resume"
          style={{
            color: "#7e151fff",
            textDecoration: "none",
            padding: "10px",
            border: "1px solid #7e151fff",
            borderRadius: "5px",
          }}
        >
          View Resume
        </a>
      </main>
      <br />
      <br />

      <Footer />

      {showAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert">
            <p style={{ color: "#000" }}>
              Thanks! We received your enquiry. Our team will contact you
              shortly.
            </p>
            <button
              onClick={() => {
                setShowAlert(false);
                router.push("/contact");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <style>{`
        .custom-alert-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .custom-alert {
          background: #fff;
          padding: 30px 20px;
          border-radius: 12px;
          max-width: 400px;
          text-align: center;
          font-size: 16px;
        }
        .custom-alert button {
          margin-top: 20px;
          padding: 10px 20px;
          background: #7e151f;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .input {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }
        .btn-group {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (min-width: 500px) {
          .btn-group {
            flex-direction: row;
          }
        }
        .btn-primary {
          background: #7e151f;
          color: #fff;
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          width: 100%;
        }
        .btn-outline {
          background: transparent;
          border: 1px solid #e5e7eb;
          padding: 10px 14px;
          border-radius: 8px;
          width: 100%;
          cursor: pointer;
        }
        @media (min-width: 500px) {
          .btn-primary, .btn-outline {
            width: auto;
          }
        }
      `}</style>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactInner />
    </Suspense>
  );
}
