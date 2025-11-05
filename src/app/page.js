"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import centerLogo from "../../public/assets/logo.png";
import aboutImg from "../../public/assets/about.png";
import img1 from "../../public/assets/image1.png";
import img2 from "../../public/assets/image2.png";
import img4 from "../../public/assets/image4.png";
import img5 from "../../public/assets/image5.png";
import img6 from "../../public/assets/image6.png";
import img7 from "../../public/assets/image7.png";
import si from "../../public/assets/SI.png";
import agnipath from "../../public/assets/agnipath.png";
import airforce from "../../public/assets/airforce.png";
import army from "../../public/assets/army.png";
import constable from "../../public/assets/constable.png";
import navy from "../../public/assets/navy.png";
import rrb from "../../public/assets/RRB.png";
import ssc from "../../public/assets/ssc.png";
import t1 from "../../public/assets/t1.png";
import t2 from "../../public/assets/t2.png";
import t3 from "../../public/assets/t3.png";
import t4 from "../../public/assets/t4.png";
import t5 from "../../public/assets/t5.png";
import t6 from "../../public/assets/t6.png";
import t7 from "../../public/assets/t7.png";
import t9 from "../../public/assets/t9.png";
import t10 from "../../public/assets/t10.png";
import g1 from "../../public/assets/g1.png";
import g2 from "../../public/assets/g2.png";
import g3 from "../../public/assets/g3.png";
import g4 from "../../public/assets/g4.png";
import g5 from "../../public/assets/g5.png";
import g6 from "../../public/assets/g6.png";
import g7 from "../../public/assets/g7.png";
import tata from "../../public/assets/Tata.png";
import online from "../../public/assets/online.png";
import coach from "../../public/assets/coach.png";
import g21 from "../../public/assets/g23.png";

export default function HomePage({ onKnowMore }) {
  const router = useRouter();
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });
  const [showNav, setShowNav] = useState(true);
  const [navBg, setNavBg] = useState("transparent");
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const bg = "/assets/bg.png";

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    function handleScroll() {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setNavBg(currentY > 0 ? "#7e151fff" : "transparent");
      lastScrollY.current = currentY;
    }

    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

   const styles = {
    container: {
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#222",
      margin: 0,
      padding: 0,
      scrollBehavior: "smooth",
    },
    navbar: {
      paddingTop: "6vh",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      padding: "15px 50px",
      transition: "transform 0.35s ease-in-out, background-color 0.25s ease",
      transform: showNav ? "translateY(0)" : "translateY(-120%)",
      backgroundColor: navBg,
      boxShadow: showNav && navBg !== "transparent" ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
    },
    logo: { fontWeight: "bold", fontSize: 33, color: "#fff" },
    navLinks: {
      display: "flex",
      gap: 30,
      fontSize: 22,
      cursor: "pointer",
    },
    link: {
      paddingTop: 10,
      color: "#fff",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    hero: {
      height: "100vh",
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('../../assets/hero.png') ",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      position: 'relative',
      color: "#fff",
      textAlign: "left",
      padding: "0 20px",
    },
    heroTitle: {
      margin:'0',
      paddingLeft: '30px',
      textAlign: "left",
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      fontWeight: "700",
      marginBottom: "20px",
    },
    heroSubtitle: {
      paddingLeft: '30px',
      textAlign: "left",
      fontSize: "clamp(1.1rem, 3vw, 2rem)",
      maxWidth: "720px",
      marginBottom: "30px",
    },
    heroButton: {
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      marginLeft: '30px',
      width: '200px',
      backgroundColor: "#7e151fff",
      color: "#fff",
      padding: "2vh 1vw",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      fontSize: "20px",
      transition: "background 0.3s",
    },
    heroButtons: {
      display: 'flex',
      gap: '16px',
      marginTop: '24px',
      flexWrap: 'wrap',
    },
    section: {
      backgroundImage: `url(${bg})`,
      padding: "40px 10%",
      textAlign: "center",
    },
    sectionTitle: {
      border: '4px solid #7e151fff',
      borderRadius: '12px',
      display: 'inline-block',
      padding: '8px 16px',
      fontSize: "36px",
      fontWeight: "600",
      marginBottom: "40px",
      color: "#7e151fff",
      margin: isMobile?'10px ':'0',
    },
    about: {
      display: "flex",
      alignItems: "center",
      gap: "50px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    aboutText: {
      flex: "1",
      minWidth: "280px",
      textAlign: "left",
    },
    aboutImage: {
      flex: "1",
      minWidth:"280px",
      borderRadius: "12px",
      width: "100%",
      height: "378px",
      objectFit: "cover",
    },
    programGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "30px",
      marginTop: "40px",
    },
    programCard: {
      backgroundColor: "#fff",
      padding: "0px",
      borderRadius: "14px",
      boxShadow: "0 8px 24px rgba(16,24,40,0.06)",
      textAlign: "center",
      transition: "transform 0.28s cubic-bezier(.2,.9,.2,1), box-shadow 0.28s",
      overflow: "hidden",
    },
    programHeader: {
      fontSize: '20px',
      fontWeight: 700,
      color: '#fff',
      margin: 0,
      padding: '10px 14px',
      borderRadius: '10px 0px 0px 0px',
      background: 'linear-gradient(90deg,#7e151f,#c42b2b)'
    },
    programButton: {
      display: 'inline-block',
      background: '#7e151fff',
      color: '#fff',
      padding: '10px 16px',
      borderRadius: '10px',
      textDecoration: 'none',
      fontWeight: 600,
      boxShadow: '0 6px 20px rgba(196,43,43,0.18)'
    },
    phaseGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "30px",
      marginTop: "40px",
    },
    testimonialCard: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      margin: "20px auto",
      maxWidth: "600px",
    },
    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      marginTop: "40px",
    },
    galleryImage: {
      width: "100%",
      height: "200px",
      borderRadius: "10px",
      objectFit: "cover",
    },
    contact: {
      backgroundColor: "#7e151fff",
      color: "#fff",
      padding: "10px 0",
      textAlign: "center",
    },
    footer: {
      backgroundColor: "#7e151fff",
      color: "#aaa",
      textAlign: "center",
      padding: "20px",
      fontSize: "14px",
    },
    responsive: `

      /* ---------- Desktop-first: only override for narrow screens ---------- */

      /* Tablet and below tweaks */
      @media (max-width:768px){
        .top-banner{height:40px}
        .top-banner .banner-icons a{padding:4px}
        .top-banner .banner-icons svg{width:16px;height:16px}
        .top-banner .offer{margin-right:28px}
        .top-banner .marquee-track{animation-duration:22s}
        .gallery-image{height:160px}
      }

      /* Mobile specific rules */
      @media (max-width:768px){
        :root{--page-padding:12px}
        body,html,#root{height:auto}

        /* banner */
        .top-banner{height:40px}
        .top-banner .banner-icons{gap:8px;padding-left:8px}
        .top-banner .marquee-track{animation-duration:26s}

        /* hero: make height auto and scale text */
        .hero{height:auto;padding:42px var(--page-padding);align-items:flex-start}
        .heroTitle{padding-left:8px;margin-bottom:8px}
        .heroSubtitle{padding-left:8px;max-width:100%;margin-bottom:12px}
        .heroButtons{justify-content:flex-start;padding-left:8px}
        .heroButton{width:auto;margin-left:0;padding:10px 12px;font-size:15px}

        /* navbar spacing */
        nav{padding-top:1vh;padding-left:10px;padding-right:10px}
        nav img{height:6vh!important;width:auto!important}

        /* About section: stacked card on mobile */
        
        .aboutdiv {
  width: 100%;
  display: flex;
  flex-direction: column; /* stack image and text */
  align-items: center;    /* center content horizontally */
  justify-content: center; /* center content vertically if needed */
  border-radius: 12px;
  padding: 10px;
  box-sizing: border-box; /* include padding in width */
}

.aboutCard, 
.aboutdiv img {
  max-width: 100%;   /* prevent overflow */
  width: 100%;       /* take full container width */
  height: auto;      /* maintain aspect ratio for images */
  display: block;
  text-align: center; /* center text inside card if needed */

  }
        /* Programs: single column cards */
        .programGrid{grid-template-columns:repeat(1,1fr)!important;padding:0 12px}
        .program-card{min-width:100%;width:100%}
        .program-card .cover{height:180px}
        .program-card .body{padding:12px}
        .program-meta{flex-direction:column;gap:12px;align-items:flex-start}

        /* Phases */
        .phaseGrid{grid-template-columns:repeat(1,1fr)!important;padding:0 12px}

        /* testimonials: collapse the circle layout and show mobile stack */
        .circle-container{display:none!important}
        .testimonial-stack{display:none!important}


        /* gallery grid smaller thumbs */
        .gallery{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}
        .gallery-image{height:140px}

        /* contact section stacks vertically */
        #contact > div{flex-direction:column;align-items:center;gap:12px}
        #contact h2{font-size:22px}
        #contact a{font-size:15px}

        /* footer */
        footer, .footer{padding:20px}

        /* small helpers */
        .center-logo{width:110px;height:110px}
      }

      /* Very small phones */
      @media (max-width:420px){
        .top-banner .offer{margin-right:18px;font-size:13px}
        .banner-icons{gap:6px}
        .gallery-image{height:120px}
        .program-card .cover{height:140px}
      }
    `,
  };

  const programCSS = `
    .program-card{position:relative;overflow:hidden;border-radius:14px}
    .program-card .cover{width:100%;height:160px;object-fit:cover;display:block}
    .program-card .overlay{position:absolute;left:12px;right:12px;top:12px;padding:8px;border-radius:10px;background:linear-gradient(90deg,rgba(196,43,43,0.9),rgba(126,21,31,0.95));color:#fff}
    .program-card .body{padding:14px}
    .program-card:hover{transform:translateY(-8px);box-shadow:0 18px 60px rgba(16,24,40,0.12)}
    .program-meta{display:flex;justify-content:space-between;align-items:center;gap:12px}
  `;

  const testimonialsCSS = `
    .testimonials-wrap{display:flex;align-items:center;justify-content:center;gap:28px;flex-wrap:wrap;padding: 12px 20px;}
    .testimonial-stack{display:flex;flex-direction:column;gap:18px;width:240px;flex:0 0 240px}
    .testimonial-stack .stack-item{display:block;padding:12px;border-radius:10px;background:#fff;box-shadow:0 6px 18px rgba(0,0,0,0.08);transition:transform .22s ease,box-shadow .22s ease;}
    .testimonial-stack .stack-item .stack-top{display:flex;align-items:center;gap:12px}
    .testimonial-stack .stack-item img{width:72px;height:72px;border-radius:50%;object-fit:cover}
    .testimonial-stack .stack-item .stack-top strong{color:#7e151f}
    .testimonial-stack .stack-item:hover{transform:translateY(-10px) scale(1.02);box-shadow:0 12px 28px rgba(0,0,0,0.18);z-index:30}

    .circle-container{position:relative;width:520px;height:520px;flex:0 0 520px}
    .circle-border{position:absolute;inset:0;border-radius:50%;border:2px dashed rgba(125,21,31,0.12);display:flex;align-items:center;justify-content:center}
    .center-logo{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:140px;height:140px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,0.12)}

    .testimonial-item{position:absolute;width:180px;padding:12px;border-radius:12px;background:#fff;box-shadow:0 6px 18px rgba(0,0,0,0.12);text-align:center;transition:transform .22s ease,box-shadow .22s ease;}
    .testimonial-item .item-top{display:flex;align-items:center;gap:10px;justify-content:center;margin-bottom:8px}
    .testimonial-item .item-top img{width:72px;height:72px;border-radius:50%;object-fit:cover}
    .testimonial-item .item-top strong{color:#7e151f}
    .testimonial-item:hover{transform:translateY(-10px) scale(1.03);box-shadow:0 14px 36px rgba(0,0,0,0.18);z-index:40}

    @media (max-width:1100px){
      .circle-container{width:420px;height:420px}
      .testimonial-item{width:160px}
      .testimonial-stack{width:200px;flex:0 0 200px}
      .testimonial-stack .stack-item img{width:56px;height:56px}
    }

    @media (max-width:820px){
      .testimonials-wrap{flex-direction:column}
      .testimonial-stack{flex-direction:row;width:auto;gap:12px;overflow:auto;padding:8px}
      .circle-container{width:360px;height:360px}
    }
  `;

  const galleryCSS = `
    .gallery-image{transition:transform .28s ease, box-shadow .28s ease; border-radius:10px; cursor:pointer}
    .gallery-image:hover{transform:scale(1.04); box-shadow:0 20px 50px rgba(2,6,23,0.18)}
    .lightbox-overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.82);z-index:2000}
    .lightbox-img{max-width:94%;max-height:92%;border-radius:8px;box-shadow:0 24px 80px rgba(2,6,23,0.6);object-fit:contain}
    .lightbox-close{position:absolute;top:22px;right:22px;color:#fff;font-size:34px;cursor:pointer;padding:6px 10px;border-radius:6px;background:rgba(0,0,0,0.24)}
  `

  const bannerHeight = '46px'
  const bannerCSS = `
    .top-banner{position:fixed;left:0;right:0;top:0;height:${bannerHeight};display:flex;align-items:center;background:linear-gradient(90deg,#c42b2b,#7e151f);color:#fff;padding:0 12px;z-index:1000}
    .top-banner .marquee-wrap{flex:1;overflow:hidden;padding-right:12px}
    .top-banner .marquee{width:100%;overflow:hidden}
    .top-banner .marquee-track{display:inline-flex;white-space:nowrap;will-change:transform;animation:marquee 18s linear infinite}
    .top-banner .marquee-track:hover{animation-play-state:paused}
    .top-banner .marquee-track > .set{display:inline-flex}
    @keyframes marquee{0%{transform:translateX(0%)}100%{transform:translateX(-50%)}}
    .top-banner .offer{display:inline-block;margin-right:48px;font-weight:600}
    .top-banner .banner-icons{flex:0 0 auto;display:flex;align-items:center;gap:12px;padding-left:12px}
    .top-banner .banner-icons a{display:inline-flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;padding:6px;border-radius:6px}
    .top-banner .banner-icons a svg{display:block}
  `

  const testimonials = [
    { img: t6, quote: "I'm really happy for getting Medal in this Marathon Nov 02 '25", author: "Pradeep, Marathon Runner", training: "Marathon Runner" },
    { img: t5, quote: "The strength and mobility plan transformed my endurance. I'm really happy for getting a Job.", author: "Annapurna, A.R", training: "Conistable Training" },
    { img: t7, quote: "Focused coaching and weekly checkpoints helped me make consistent progress — highly recommended.", author: "Bhargavi, Civil Pc", training: "Conistable Training" },
    { img: t3, quote: "Physical tests felt achievable after following their selection-specific program. Selected in my state police batch.", author: "Sai Kumar, A.R (Selected)", training: "Indian Army" },
    { img: t1, quote: "The obstacle practice and stamina blocks gave me the confidence to clear the PT circuit with ease.", author: "Mounika, A.R", training: "Indian Army" },
    { img: t2, quote: "SI-specific mock trials and interview prep were excellent — cleared stage 1 and stage 2 with confidence.", author: "Appalanaidu, Sub-Inspector (Selected)", training: "SI and Constable" },
    { img: t9, quote: "This coaching is really practical and best, got for first time", author: "Shanker, TGSP", training: "SP" },
    { img: t10, quote: "Discipline and leadership sessions prepared me not only for selection but for teamwork in the training.", author: "Manjula, Civil", training: "Leadership" },
  ];

return (
    <div style={styles.container}>
      {/* Inject responsive CSS strings */}
      <style>{styles.responsive}</style>
      <style>{programCSS}</style>
      <style>{testimonialsCSS}</style>
      <style>{galleryCSS}</style>
      <style>{bannerCSS}</style>

      {/* Top banner */}
      <div
        className="top-banner"
        style={{
          transform: showNav ? 'translateY(0)' : `translateY(-${bannerHeight})`,
          transition: 'transform 0.35s ease-in-out',
        }}
      >
        <div className="marquee-wrap">
          <div className="marquee" aria-hidden>
            <div className="marquee-track">
              <div className="set">
                <span className="offer">Flat 10% off on all 3-month programs — Use code RUN10</span>
                <span className="offer">Free trial session every Saturday — Limited slots</span>
                <span className="offer">Group discounts available for schools & clubs</span>
                <span className="offer">Refer & get 1 month free on successful enrollments</span>
              </div>
              <div className="set">
                <span className="offer">Flat 10% off on all 3-month programs — Use code RUN10</span>
                <span className="offer">Free trial session every Saturday — Limited slots</span>
                <span className="offer">Group discounts available for schools & clubs</span>
                <span className="offer">Refer & get 1 month free on successful enrollments</span>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-icons" role="group" aria-label="Contact and social links">
          <a href="https://www.instagram.com/narayana_athletics_academy?igsh=aXM3ODdlampqYmxk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#fff" strokeWidth="1.2"/><circle cx="12" cy="12" r="3.2" stroke="#fff" strokeWidth="1.2"/><circle cx="17.5" cy="6.5" r="0.8" fill="#fff"/></svg>
          </a>
          <a href="https://www.youtube.com/@NARAYANA_29" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg width="20" height="14" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.6" y="0.6" width="22.8" height="14.8" rx="3" stroke="#fff" strokeWidth="1.2" fill="none" />
              <path d="M9.5 11V5l6 3-6 3z" fill="#c42b2b" />
            </svg>
          </a>
          <a href="mailto:narayanaathleticsacademy@gmail.com" aria-label="Email">
            <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.5C2 2.672 2.672 2 3.5 2h17c.828 0 1.5.672 1.5 1.5v11c0 .828-.672 1.5-1.5 1.5h-17A1.5 1.5 0 0 1 2 14.5v-11z" stroke="#fff" strokeWidth="1.2" fill="none"/><path d="M3 4.5l8.5 6L20 4.5" stroke="#fff" strokeWidth="1.2" fill="none"/></svg>
          </a>
          <a href="tel:+919848311164" aria-label="Phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6 10.2a14.9 14.9 0 006.2 6.2l1.8-1.8a1 1 0 011.1-.2c1.2.5 2.6.8 4 .8a1 1 0 011 1V20a1 1 0 01-1 1C10.8 21 3 13.2 3 4a1 1 0 011-1h3.2a1 1 0 011 1c0 1.4.3 2.8.8 4a1 1 0 01-.2 1.1l-1.8 1.8z" stroke="#fff" strokeWidth="1.2" fill="none"/></svg>
          </a>
        </div>
      </div>

      <Navbar bgcolor='transparent' topOffset={showNav ? bannerHeight : '0px'} />

      {/* Hero */}
      <section id="home" className="hero" style={styles.hero}>
        <p className="herotop" style={{paddingTop: isMobile?'100px':'8vh', paddingLeft:'30px', fontSize:isMobile?'2.5vh':'3vh', marginBottom:'0'}}>Hyderabad&apos;s Leading Academy</p>
        <h1 className="heroTitle" style={{...styles.heroTitle,}}> Narayana Athletics <br />Academy</h1>
        <p className="heroSubtitle" style={styles.heroSubtitle}>
          Unlock your full athletic potential with science-based
          training, expert coaching, and structured progression
          for lifelong fitness.
        </p>
        <div style={styles.heroButtons} className="heroButtons">
          <a href="/contact" style={styles.heroButton} className="heroButton">Book Free Trial</a>
          <a href="#programs" style={styles.heroButton} className="heroButton">Explore Programs</a>
        </div>
      </section>

      {/* About */}
<section
  id="about"
  className="aboutSection"
  style={{
      backgroundImage: `url(${bg})`,
      padding: isMobile?'10px':"40px 10% 40px 0",
      textAlign: "center",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="aboutdiv"
    style={{
      display: isMobile?'absolute': 'flex',
      flexWrap: isMobile?'': 'wrap',
      gap: '0px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#7e151fff',
      borderRadius: isMobile? '12px':'12px 100px 100px 12px',
      boxShadow: '0 8px 24px rgba(16,24,40,0.06)',
      padding: isMobile ? '10px' : '20px 10px 20px 50px',
    }}
  >
    <Image
      className="aboutImage"
      src={aboutImg}
      alt="coach"
      style={styles.aboutImage}
    />
    <div
      className="aboutCard"
      style={{
        flex: 1,
        color: '#fff',
        padding: isMobile?'0': '0px 20px 0 20px',
        minWidth: '300px',
        textAlign: 'left',
      }}
    >
      <h3
        style={{
          fontSize: '36px',
          fontWeight: '600',
          marginBottom: '40px',
          color: '#fff',
          paddingLeft: isMobile? '30px':'0',
        }}
      >
        About Narayana Athletics Academy
      </h3>
      <p
        style={{
          color: '#fff',
          textAlign: 'left',
          paddingLeft:isMobile?'20px': '30px',
          fontSize: '2vh',
          lineHeight: '1.6',
        }}
      >
        Founded by <strong>M. Narayana</strong> — an NSNIS-certified coach,
        national athlete and SAI player with M.P.Ed and B.P.Ed — Narayana Athletics
        Academy brings a scientific, phased approach to fitness and athletic
        development. We train athletes and fitness enthusiasts of all levels
        with safety, structured progressions, and measurable results.
      </p>
      <ul
        style={{
          marginTop: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
          fontSize: '0.875rem',
        }}
      >
        {[
          'NSNIS Certified Coach (Govt. of India)',
          'National Athlete & SAI Player',
          'M.P.Ed & B.P.Ed (Osmania University)',
          'National & International athletics training for children',
        ].map((item) => (
          <li
            key={item}
            style={{
              padding: '8px',
              borderRadius: '8px',
              textAlign: 'left',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <a href="/resume"style={{ backgroundColor: "#fff", color: "#7e151fff", padding: "10px 16px", borderRadius: "10px", textDecoration: "none", fontWeight: 600, boxShadow: "0 6px 20px rgba(196,43,43,0.18)", display: 'inline-block', marginLeft: '15vw' }} >View Coach Resume</a>
    </div>
  </div>
</section>


      {/* Trainings */}
      <section id="programs" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Specialized Academic Trainings</h2>
        <style>{programCSS}</style>
        <div className="programGrid" style={styles.programGrid}>
          {[
            { title: "Athletic Training", img: img1, desc: "Intensive programs designed to improve strength, stamina, and agility." },
            { title: "Online/Offline Fitness", img: img2, desc: "Focused on building sustainable habits, tracking progress, and delivering real, long-term results." },
            { title: "SI and Constable", img: si, desc: "Preparation for State Police SI & Constable exams — physical conditioning, drills and test practice." },
            { title: "Competition Prep", img: img4, desc: "Specialized coaching for state and national-level competitions." },
            { title: "Online Running", img: online, desc: "Live & recorded online running sessions — technique, pacing and weekly plans you can follow from anywhere." },
            { title: "Running Coaching", img: coach, desc: "One-on-one and small-group coaching for beginners to competitive runners — form, drills and race plans." },
            { title: "TATA Mumbai Marathon 2026", img: tata, desc: "Specialized prep for TMM 2026 — training cycles, race-specific pacing, and marathon day strategies." },
            { title: "Strength Training for Runners", img: img6, desc: "Runner-focused strength and mobility programs to build resilience and speed while preventing injuries." },
            { title: "Agniveer & Agnipath", img: agnipath, desc: "Agniveer recruitment training covering endurance, field drills and selection standards." },
            { title: "Indian Army", img: army, desc: "Physical and tactical preparation tailored for Army entrance and selections." },
            { title: "Indian Navy", img: navy, desc: "Naval aspirant conditioning, swimming, and selection prep." },
            { title: "Indian Airforce", img: airforce, desc: "Agility, speed and strength programs for Air Force selection tests." },
            { title: "SSC GD", img: ssc, desc: "SSC GD preparation: endurance, drills, and exam-oriented physical training." },
            { title: "Constable & CPO", img: constable, desc: "Targeted fitness & drill training for Constable and CPO selections." },
            { title: "RRB Group-D & RPF", img: rrb, desc: "RRB Group-D and RPF exam & physical readiness coaching." },
          ].map((prog, i) => (
            <div key={i} className="program-card" style={styles.programCard}>
              <div>
                <h4 style={styles.programHeader}>{prog.title}</h4>
              </div>
              <Image className="cover" src={prog.img} alt={prog.title} style={{ marginTop: '0px' }} />
              <span style={{ color: '#9ca3af', fontSize: '13px' }}>Starts: Anytime</span>
              <div className="body">
                <p style={{ color: '#374151', minHeight: '56px', padding:'10px' }}>{prog.desc}</p>
                <div className="program-meta">
                  <a href="/contact" style={styles.programButton}>Enroll Now</a>
                  <button onClick={() => {
                    const slug = prog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                    router.push(`/training/${slug}`)
                    if (onKnowMore) onKnowMore(prog)
                  }} style={{ ...styles.programButton, border: 'none', cursor: 'pointer' }}>Know More!</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phases */}
      <section id="phases" className="section-odd" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Phases</h2>
        <div className="phaseGrid" style={styles.phaseGrid}>
          {[
            {
              title: "Foundation Phase",
              img: img5,
              desc: "This phase focuses on awakening the body, improving mobility, and establishing core vitality.",
            },
            {
              title: "Strength Training Phase",
              img: img6,
              desc: "Build functional strength and power through diverse training protocols.",
            },
            {
              title: "Advanced Phase",
              img: img7,
              desc: "Master your movement and break through plateaus with specialized training.",
            },
            {
              title: "Peak Phase",
              img: img4,
              desc: "The culmination of your journey for total athletic development and endurance.",
            },
          ].map((phase, i) => (
            <div key={i} style={styles.programCard}>
              <Image src={phase.img} alt={phase.title} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
              <h3 style={{ color: "#7e151fff" }}>{phase.title}</h3>
              <p style={{padding:'10px'}}>{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ ...styles.section, padding: '60px 0' }}>
        <h2 style={styles.sectionTitle}>What Our Students Say</h2>
        <br /><br /><br /><br /><br /><br />
        <style>{testimonialsCSS}</style>

        <div className="testimonials-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', flexWrap: 'wrap' }}>
          {/* Left stack (desktop) */}
          <div className="testimonial-stack" style={{ display: 'flex', flexDirection: 'column', width: '240px', flex: '0 0 240px', gap: '30vh' }}>
            {testimonials.slice(0, 2).map((t, idx) => (
              <div key={`L-${idx}`} className="stack-item">
                <div className="stack-top">
                  <Image src={t.img} alt={t.author} />
                  <strong>{t.author}</strong>
                </div>
                <p style={{ marginTop: '10px', marginBottom: 0, color: '#374151', fontSize: '0.95rem' }}>“{t.quote}”</p>
              </div>
            ))}
          </div>

          {/* Circle container (desktop) */}
          <div className="circle-container" style={{ position: 'relative', width: '520px', height: '520px', flex: '0 0 520px' }}>
            <div className="circle-border" />
            <div className="center-logo" style={{ border: '20px solid #7e151fff' }}>
              <Image src={centerLogo} alt="Narayana Athletics" style={{ width: '90%', height: '90%', objectFit: 'contain', borderRadius: '50%' }} />
            </div>

            {(() => {
              const circleItems = testimonials.slice(2, 6)
              return circleItems.map((t, i) => {
                const cTotal = circleItems.length
                const angle = (i / cTotal) * Math.PI * 2 - Math.PI / 2
                const radius = cTotal <= 4 ? 260 : 320
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                return (
                  <div key={`C-${i}`} className="testimonial-item" style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}>
                    <div className="item-top">
                      <Image src={t.img} alt={t.author} />
                      <strong>{t.author}</strong>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#374151', margin: 0 }}>“{t.quote}”</p>
                  </div>
                )
              })
            })()}
          </div>

          {/* Right stack (desktop) */}
          <div className="testimonial-stack" style={{ display: 'flex', flexDirection: 'column', width: '240px', flex: '0 0 240px', gap: '30vh' }}>
            {testimonials.slice(6, 8).map((t, idx) => (
              <div key={`R-${idx}`} className="stack-item">
                <div className="stack-top">
                  <Image src={t.img} alt={t.author} />
                  <strong>{t.author}</strong>
                </div>
                <p style={{ marginTop: '10px', marginBottom: 0, color: '#374151', fontSize: '0.95rem' }}>“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-friendly testimonials (only visible on narrow screens via CSS) */}
        {/* ✅ Mobile Testimonials Slider Window */}
<div className="mobile-testimonials" style={{ display: 'none' }}>
  <style>
    {`
      @media (max-width: 768px) {
        .mobile-testimonials {
          display: flex !important;
          justify-content: center;
          align-items: center;
          width: 100%;
          overflow: hidden;
          padding: 12px;
          box-sizing: border-box;
        }

        /* the visible window */
        .mobile-testimonials .slider-window {
          width: 90%;
          overflow: hidden;
          position: relative;
          border-radius: 12px;
        }

        /* the sliding track */
        .mobile-testimonials .slider-track {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        /* each testimonial card */
        .mobile-testimonials .single-test {
          flex: 0 0 100%;
          scroll-snap-align: center;
          background: #fff;
          padding: 16px;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(2, 6, 23, 0.06);
          box-sizing: border-box;
        }

        .mobile-testimonials img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    `}
  </style>

  {/* Slider Window */}
  <div className="slider-window">
    <div className="slider-track">
      {testimonials.map((t, i) => (
        <div key={`M-${i}`} className="single-test">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Image src={t.img} alt={t.author} />
            <div>
              <strong style={{ color: '#7e151f' }}>{t.author}</strong>
              <div style={{ fontSize: 13, color: '#6b7280' }}>{t.training}</div>
            </div>
          </div>
          <p style={{ marginTop: 10, color: '#374151' }}>“{t.quote}”</p>
        </div>
      ))}
    </div>
  </div>
</div>

      </section>

      {/* Gallery */}
      <section id="gallery" style={styles.section}>
        <h2 style={styles.sectionTitle}>Gallery</h2>
        <div style={styles.gallery} className="gallery">
          {[t4, g21, g2, g3, g4, g5, g6, g7].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="gallery-image"
              style={{ ...styles.galleryImage }}
              onClick={() => setLightbox({ open: true, src, alt: `Gallery ${i + 1}` })}
            />
          ))}
        </div>

        {/* Lightbox overlay */}
        {lightbox.open && (
          <div className="lightbox-overlay" onClick={() => setLightbox({ open: false, src: '', alt: '' })}>
            <div className="lightbox-close" onClick={() => setLightbox({ open: false, src: '', alt: '' })}>×</div>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              className="lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
        <a href="/gallery" style={{ ...styles.programButton, marginTop: 20 }}>View More Success Stories</a>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.contact}>
        <h2 style={{ ...styles.sectionTitle, color: "#fff", padding: '0px' }}>Contact Us</h2>
        <div style={{ display: 'flex', gap: isMobile?'0':'104', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', marginTop: 18 }}>
          <div style={{ minWidth: 300, color: '#fff', textAlign: 'left' }}>
            <h2 style={{ margin: '0 0 8px 0', fontSize: 30,padding:'15px' }}>Get in touch</h2>
            <p style={{ margin: 0, padding:'15px' }}><strong>Email:</strong> <a href="mailto:narayanaathleticsacademy@gmail.com" style={{ color: '#ffd7d7', textDecoration: 'none' }}>narayanaathleticsacademy@gmail.com</a></p>
            <p style={{ margin: '6px 0 0 0',padding:'15px' }}><strong>Phone:</strong> <a href="tel:+919848311164" style={{ color: '#ffd7d7', textDecoration: 'none' }}>+91 98483 11164</a></p>
            <p style={{ margin: '10px 0 0 0', padding:'15px' }}><strong>Address:</strong> Narayana Athletics Campus, Hyderabad, India.</p>
          </div>

          <div style={{ minWidth: 260, color: '#fff', textAlign: 'left' }}>
            <h2 style={{ margin: '0 0 8px 0', fontSize: 30, padding:'15px' }}>Follow us</h2>
            <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap', width: '300px', paddingLeft:'15px' }}>
              <a href="https://www.instagram.com/narayana_athletics_academy?igsh=aXM3ODdlampqYmxk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff', display: 'flex', gap: 8, alignItems: 'center' }} aria-label="Instagram">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#fff" strokeWidth="1.2"/><circle cx="12" cy="12" r="3.2" stroke="#fff" strokeWidth="1.2"/><circle cx="17.5" cy="6.5" r="0.8" fill="#fff"/></svg>
                <span style={{ fontWeight: 600 }}>Instagram</span>
              </a>

              <a href="https://www.youtube.com/@NARAYANA_29" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff', display: 'flex', gap: 8, alignItems: 'center' }} aria-label="YouTube">
                <svg width="30" height="20" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.6" y="0.6" width="22.8" height="14.8" rx="3" stroke="#fff" strokeWidth="1.2" fill="none" />
                  <path d="M9.5 11V5l6 3-6 3z" fill="#c42b2b" />
                </svg>
                <span style={{ fontWeight: 600 }}>YouTube</span>
              </a>

              <a href="mailto:narayanaathleticsacademy@gmail.com" style={{ textDecoration: 'none', color: '#fff', display: 'flex', gap: 8, alignItems: 'center' }} aria-label="Email">
                <svg width="26" height="20" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.5C2 2.672 2.672 2 3.5 2h17c.828 0 1.5.672 1.5 1.5v11c0 .828-.672 1.5-1.5 1.5h-17A1.5 1.5 0 0 1 2 14.5v-11z" stroke="#fff" strokeWidth="1.2" fill="none"/><path d="M3 4.5l8.5 6L20 4.5" stroke="#fff" strokeWidth="1.2" fill="none"/></svg>
                <span style={{ fontWeight: 600 }}>narayanaathleticsacademy@gmail.com</span>
              </a>

              <a href="tel:+919848311164" style={{ textDecoration: 'none', color: '#fff', display: 'flex', gap: 8, alignItems: 'center' }} aria-label="Phone">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6 10.2a14.9 14.9 0 006.2 6.2l1.8-1.8a1 1 0 011.1-.2c1.2.5 2.6.8 4 .8a1 1 0 011 1V20a1 1 0 01-1 1C10.8 21 3 13.2 3 4a1 1 0 011-1h3.2a1 1 0 011 1c0 1.4.3 2.8.8 4a1 1 0 01-.2 1.1l-1.8 1.8z" stroke="#fff" strokeWidth="1.2" fill="none"/></svg>
                <span style={{ fontWeight: 600 }}>+91 98483 11164</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
