"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo1 from "../../../public/assets/logo1.png";

export default function Navbar({ bgcolor = "transparent", topOffset = "0px" }) {
  const router = useRouter();
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);
  const [navBg, setNavBg] = useState(bgcolor);
  const [btn, setBtn] = useState("#7e151fff");
  const [txt, setTxt] = useState("#fff");
  const [mobileMenu, setMobileMenu] = useState(false);
  const lastScrollY = useRef(0);

  function scrollToId(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const navEl = document.querySelector("nav");
    const navH = navEl ? Math.round(navEl.getBoundingClientRect().height) : 0;
    const targetTop = el.getBoundingClientRect().top + window.pageYOffset - navH - 8;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  }

  function handleNavToSection(e, sectionId) {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenu(false);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToId(sectionId), 160);
    } else {
      scrollToId(sectionId);
    }
  }

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 50) setShowNav(false);
      else setShowNav(true);
      setNavBg(currentY > 0 ? "#7e151fff" : bgcolor);
      setBtn(currentY > 0 ? "#fff" : "#7e151fff");
      setTxt(currentY > 0 ? "#7e151fff" : "#fff");
      lastScrollY.current = currentY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bgcolor]);

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .nav-links {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
            .mobile-menu {
              display: flex !important;
            }
          }
        `}
      </style>

      <nav
        style={{
          position: "fixed",
          top: topOffset,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2vh 5vw",
          transition: "transform 0.35s ease-in-out, background-color 0.25s ease",
          transform: showNav ? "translateY(0)" : "translateY(-120%)",
          backgroundColor: navBg,
          boxShadow:
            showNav && navBg !== "transparent" ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={logo1}
            alt="RN"
            style={{ height: "8vh", width: "auto", borderRadius: "60px" }}
          />
          <div
            className="logo-text"
            style={{
              paddingLeft: "5px",
              fontWeight: "bold",
              fontSize: 26,
              color: "#fff",
            }}
          >
            NARAYANA ATHELETICS ACADEMY
          </div>
        </div>

        {/* Desktop Links */}
        <div className="nav-links" style={{ display: "flex", gap: 30, fontSize: 20 }}>
          <a
            href="#home"
            onClick={(e) => handleNavToSection(e, "home")}
            style={{ color: "#fff", textDecoration: "none", padding: "10px 10px" }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavToSection(e, "about")}
            style={{ color: "#fff", textDecoration: "none", padding: "10px 10px" }}
          >
            About
          </a>
          <a
            href="#programs"
            onClick={(e) => handleNavToSection(e, "programs")}
            style={{ color: "#fff", textDecoration: "none", padding: "10px 10px" }}
          >
            Programs
          </a>
          <a href="/gallery" style={{ color: "#fff", textDecoration: "none", padding: "10px" }}>
            Gallery
          </a>
          <a href="/resume" style={{ color: "#fff", textDecoration: "none", padding: "10px" }}>
            Resume
          </a>
          <a
            className="join-btn"
            href="/contact"
            style={{
              backgroundColor: btn,
              color: txt,
              padding: "10px 16px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Join Now
          </a>
        </div>

        {/* Hamburger (Mobile only) */}
        <div
          className="hamburger"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            cursor: "pointer",
          }}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <div style={{ width: 25, height: 3, background: "#fff", borderRadius: 2 }}></div>
          <div style={{ width: 25, height: 3, background: "#fff", borderRadius: 2 }}></div>
          <div style={{ width: 25, height: 3, background: "#fff", borderRadius: 2 }}></div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenu && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: "18vh",
            right: 0,
            width: "100%",
            backgroundColor: "#7e151fff",
            display: "none",
            flexDirection: "column",
            alignItems: "center",
            gap: 15,
            padding: "20px 0",
            zIndex: 999,
            transition: "all 0.3s ease",
          }}
        >
          <a
            href="#home"
            onClick={(e) => handleNavToSection(e, "home")}
            style={{ color: "#fff", textDecoration: "none", fontSize: 20 }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavToSection(e, "about")}
            style={{ color: "#fff", textDecoration: "none", fontSize: 20 }}
          >
            About
          </a>
          <a
            href="#programs"
            onClick={(e) => handleNavToSection(e, "programs")}
            style={{ color: "#fff", textDecoration: "none", fontSize: 20 }}
          >
            Programs
          </a>
          <a
            href="#phases"
            onClick={(e) => handleNavToSection(e, "phases")}
            style={{ color: "#fff", textDecoration: "none", fontSize: 20 }}
          >
            Phases
          </a>
          <a href="/gallery" style={{ color: "#fff", textDecoration: "none", fontSize: 20 }}>
            Gallery
          </a>
          <a
            href="/contact"
            style={{
              backgroundColor: "#fff",
              color: "#7e151fff",
              padding: "10px 20px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Join Now
          </a>
        </div>
      )}
    </>
  );
}
