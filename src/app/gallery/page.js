"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Move all images to /public/assets/
const bg = "/assets/bg.png";
const imgs = [
  "/assets/t4.png",
  "/assets/g1.png",
  "/assets/g22.png",
  "/assets/g23.png",
  "assets/g21.png",
  "/assets/g3.png",
  "/assets/g4.png",
  "/assets/g5.png",
  "/assets/g6.png",
  "/assets/g7.png",
  "/assets/g8.png",
  "/assets/g9.png",
  "/assets/g10.png",
  "/assets/g11.png",
  "/assets/g12.png",
  "/assets/g13.png",
  "/assets/g14.png",
  "/assets/g15.png",
  "/assets/g17.png",
  "/assets/g18.png",
  "/assets/g19.png",
  "/assets/g21.png",
  "/assets/g22.png",
  "/assets/g2.png",
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });
  const router = useRouter();

  const galleryCSS = `
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 18px;
      padding: 40px 6vw;
    }
    .gallery-thumb {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.22s ease, box-shadow 0.22s ease;
    }
    .gallery-thumb:hover {
      transform: translateY(-6px) scale(1.02);
      box-shadow: 0 20px 60px rgba(2,6,23,0.18);
    }
    .lightbox-overlay {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.86);
      z-index: 2000;
    }
    .lightbox-img {
      max-width: 94%;
      max-height: 92%;
      border-radius: 6px;
      object-fit: contain;
    }
    .lightbox-close {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 32px;
      color: #fff;
      cursor: pointer;
    }
  `;

  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
      <style>{galleryCSS}</style>
      <Navbar bgcolor="#7e151fff" />
      <main style={{ paddingTop: "8vh" }}>
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "center", marginTop: 32, color: "#7e151fff" }}>
          Gallery
        </h1>

        <div
          className="td-top"
          style={{ position: "absolute", top: "30vh", left: "8vw" }}
        >
          <button
            className="td-back"
            onClick={() => router.back()}
            style={{
              backgroundColor: "#7e151fff",
              color: "#fff",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            ← Back
          </button><br/>
        </div>
        <br/><br/><br/>

        <div className="gallery-grid">
          {imgs.map((s, i) => (
            <Image
              key={i}
              src={s}
              alt={`Gallery ${i + 1}`}
              className="gallery-thumb"
              onClick={() =>
                setLightbox({ open: true, src: s, alt: `Gallery ${i + 1}` })
              }
            />
          ))}
        </div>
      </main>

      {lightbox.open && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox({ open: false, src: "", alt: "" })}
        >
          <div
            className="lightbox-close"
            onClick={() => setLightbox({ open: false, src: "", alt: "" })}
          >
            ×
          </div>
          <Image
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
