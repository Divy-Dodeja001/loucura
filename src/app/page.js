// app/page.js
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "VIP", href: "/vip" },
  { label: "About", href: "/about" },
];

const weeklyEvents = [
  {
    title: "FIGHT IN THE HEART OF PINK STREET",
    tag: "Monday",
    href: "/", // redirect to home
    image: "/home/event1.jpg",
  },
  {
    title: "FIGHT IN THE HEART OF PINK STREET",
    tag: "Wednesday",
    href: "/",
    image: "/home/event2.png",
  },
  {
    title: "FIGHT IN THE HEART OF PINK STREET",
    tag: "Thursday",
    href: "/",
    image: "/home/event3.png",
  },
  {
    title: "FIGHT IN THE HEART OF PINK STREET",
    tag: "Friday",
    href: "/",
    image: "/home/event4.png",
  },
  {
    title: "FIGHT IN THE HEART OF PINK STREET",
    tag: "Saturday",
    href: "/",
    image: "/home/event5.png",
  },
];

const experienceImages = [
  { desktop: "home/lifestyle1.jpg", mobile: "home/lifestyleM1.jpg" },
  { desktop: "home/lifestyle2.jpg", mobile: "home/lifestyleM2.jpg" },
  { desktop: "home/lifestyle3.jpg", mobile: "home/lifestyleM3.jpg" },
  { desktop: "home/lifestyle4.jpg", mobile: "home/lifestyleM4.jpg" },
  { desktop: "home/lifestyle5.jpg", mobile: "home/lifestyleM5.jpg" },
  { desktop: "home/lifestyle6.jpg", mobile: "home/lifestyleM6.jpg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const zoomFade = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};


export default function HomePage() {
  return (
    <main className="loucura-page">
      <div className="loucura-bg" aria-hidden="true" />

      <div className="loucura-content">
        {/* NAVBAR */}
        <header
          className="py-3 position-sticky"
          style={{
            position: "sticky!important",
            top: 0,
            zIndex: 100,
            backdropFilter: "blur(12px)",
            background: "rgba(0,0,0,0.55)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="container d-flex align-items-center justify-content-between">
            <Link href="/" className="text-decoration-none text-white">
              <img src="/logo.png" alt="Loucura" style={{ height: 36 }} />
            </Link>

            <Link
              href="/"
              className="btn btn-light rounded-pill px-4"
              style={{ fontWeight: 500 }}
            >
              Book Now
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section className="container pt-4 pb-5 mb-lg-3">
          <div className="text-center mb-3">
            <div
              className="text-light mb-3"
              style={{ fontSize: 12, letterSpacing: "0.2em" }}
            >
              LOUCURA BAR AND CLUB
            </div>
            <h1 className="mt-2 font-blaster text-light">FEEL THE PASSION</h1>
            <div className="text-light">on Lisbon&apos;s pink street</div>

            <div className="d-flex justify-content-center gap-2 my-4 flex-wrap">
              <Link href="/" className="btn btn-light rounded-pill px-4">
                Buy tickets
              </Link>
              <Link
                href="/"
                className="btn btn-outline-light rounded-pill px-4"
              >
                Book a table
              </Link>
            </div>
          </div>

          {/* Big hero image */}
          <div className="ff-card">
            <motion.div
              className="ff-card"
              variants={zoomFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/home/HeroMobile.jpg"
                />
                <img
                  src="/home/HeroDesktop.jpg"
                  alt="hero"
                  className="w-100 ff-img"
                />
              </picture>
            </motion.div>
          </div>
        </section>

        {/* WEEKLY EVENTS */}
        <section className="container py-5 my-lg-3">
          <h2 className=" text-center mb-4 mb-lg-5">WEEKLY EVENTS</h2>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1.15 },
              576: { slidesPerView: 2.1 },
              992: { slidesPerView: 3 },
            }}
          >
            {weeklyEvents.map((card, idx) => (
              <SwiperSlide className="pb-5" key={`${card.image}-${idx}`}>
                <EventTile card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* ABOUT */}
        <section className="container py-5 my-lg-3">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <div className="ff-title mb-5">
                <img src="/logo.png"></img>
              </div>

              <p
                className="text-light px-3 mb-3"
                style={{ maxWidth: 760, margin: "0 auto", fontSize: "1.4em" }}
              >
                Located in the heart of Pink Street, every night offers
                something fresh at Loucura. Curated events, standout artists,
                and DJs who set the perfect rhythm.
              </p>
              <p
                className="text-light px-3"
                style={{
                  maxWidth: 760,
                  margin: "0.75rem auto 0",
                  fontSize: "1.4em",
                }}
              >
                With refined drinks and inviting shisha nights, Loucura is where
                Lisbon’s evenings feel electric.
              </p>

              <div className="mt-4">
                <Link href="/" className="btn btn-light rounded-pill px-4">
                  Follow us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* THE EXPERIENCE */}
        <section className="container py-5 my-lg-3">
          <h2 className=" text-center mb-3">THE EXPERIENCE</h2>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1.05 },
              992: { slidesPerView: 1 },
            }}
          >
            {experienceImages.map((src) => (
              <SwiperSlide key={src} className="pb-5">
                <div
                  className="ff-card"
                  style={{ height: "clamp(240px, 38vw, 520px)" }}
                >
                  <motion.div
                    className="ff-card"
                    variants={zoomFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <picture>
                      <source media="(max-width: 768px)" srcSet={src.mobile} />
                      <img
                        src={src.desktop}
                        alt="hero"
                        className="w-100 ff-img"
                      />
                    </picture>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* FIND US */}
        <section className="container py-5 my-lg-3">
          <div className="d-flex align-items-center justify-content-center">
            <div className="w-100">
              <h2 className=" mb-2 text-center">FIND US</h2>
              <div className="text-light text-center">
                R Nova do Carvalho 24, Lisbon <br />
                Fri–Sun: 12 AM – 6 AM
              </div>

              {/* redirect to home */}
              <div className="my-3 mb-4 d-flex justify-content-center">
                <Link href="/" className="btn btn-light rounded-pill px-4">
                  Get directions
                </Link>
              </div>
              <div className="ff-card" style={{ borderRadius: "24px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.460490811069!2d-9.145907624072274!3d38.70723537176517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193543e1185fbf%3A0x9acbe17f18b6e082!2sLoucura!5e0!3m2!1sen!2sin!4v1768813082770!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Loucura Location Map"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="ff-footer py-5 mt-4 px-3">
          <div className="container">
            <div className="d-flex flex-column flex-md-row gap-4 justify-content-between">
              <div>
                <div className="ff-title mb-3">
                  <img src="/logo.png"></img>
                </div>
                <div className="text-light">
                  Loucura bar and club. Live the madness
                </div>

                <div className="d-flex gap-3 mt-3">
                  <Link href="/" className="text-white" aria-label="Instagram">
                    <Icon icon="mdi:instagram" width="22" height="22" />
                  </Link>
                  <Link href="/" className="text-white" aria-label="TikTok">
                    <Icon icon="ic:baseline-tiktok" width="22" height="22" />
                  </Link>
                  <Link href="/" className="text-white" aria-label="YouTube">
                    <Icon icon="mdi:youtube" width="22" height="22" />
                  </Link>
                </div>
              </div>

              <div className="text-light">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <Icon icon="mdi:map-marker" width="18" height="18" />
                  <span>R nova do carvalho 24, Lisbon</span>
                </div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <Icon icon="mdi:phone" width="18" height="18" />
                  <span>+351 000 000 000</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Icon icon="mdi:email" width="18" height="18" />
                  <span>info@loucura.pt</span>
                </div>
              </div>

              <div className="text-light">
                <div className="d-flex flex-column gap-2">
                  <Link
                    href="/privacy"
                    className="text-white text-decoration-none"
                    style={{ opacity: 0.8 }}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-white text-decoration-none"
                    style={{ opacity: 0.8 }}
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/cookies"
                    className="text-white text-decoration-none"
                    style={{ opacity: 0.8 }}
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="text-light mt-4 text-center"
              style={{ fontSize: 14, opacity: 0.7 }}
            >
              © {new Date().getFullYear()} Loucura Bar and Club. All rights
              reserved.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function EventTile({ card }) {
  return (
    <div className="ff-card position-relative">
      <motion.div
        className="ff-card position-relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {card.tag && <div className="ff-pill text-light">{card.tag}</div>}

        <img className="ff-img" src={card.image} alt="Event" />

        <div
          className="position-absolute bottom-0 end-0 p-3"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.78) 70%)",
          }}
        >
          <Link
            href="/"
            className="btn btn-light rounded-pill px-3 py-2 fw-bold"
          >
            Book Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
