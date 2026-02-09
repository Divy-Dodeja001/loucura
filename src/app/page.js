// app/page.js
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "./page.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "VIP", href: "/vip" },
  { label: "About", href: "/about" },
];

const weeklyEvents = [
  {
    tag: "Monday",
    href: "/events/monday", // redirect to home
    image: "/home/event1M.jpg",
  },
  {
    tag: "Wednesday",
    href: "/events/wednesday",
    image: "/home/event2M.png",
  },
  {
    tag: "Thursday",
    href: "/events/thursday",
    image: "/home/event3M.png",
  },
  {
    tag: "Friday",
    href: "/events/friday",
    image: "/home/event4M.png",
  },
  {
    tag: "Saturday",
    href: "/events/saturday",
    image: "/home/event5M.png",
  },
];

const experienceImages = [
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
      <div className="events-bg" />
      <Navbar />
      <div className="loucura-content">
        {/* <div
          className="d-lg-none"
          style={{
            position: "absolute",
            left: "0",
            top: "-8%",
            zIndex: "-1",
            overflow: "hidden",
          }}
        >
          <img src="/Vector3.png" className="img-fluid" />
        </div> */}

        {/* HERO */}
        <section className="container hero-section pt-4 pb-5 mb-3">
          <div className="text-center py-5">
            <div className="text-light mb-3 mb-md-4 section-title">
              <p
                className="section-title__text m-0"
                style={{ fontSize: "18px" }}
              >
                LOUCURA BAR AND CLUB
              </p>
            </div>
            <h1 className="mb-md-3 mb-2 font-blaster text-light">
              FEEL THE PASSION
            </h1>
            <div className="text-light mb-4">
              <p style={{ fontSize: "18px" }}>on Lisbon&apos;s pink street</p>
            </div>

            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <Link href="/" className="rounded-pill cta-btn">
                Buy Tickets
              </Link>
            </div>
          </div>

          {/* Big hero image */}
          <div>
            <motion.div
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
                  className="w-100 ff-img ff-card"
                />
              </picture>
            </motion.div>
          </div>
        </section>

        {/* WEEKLY EVENTS */}
        <section className="py-5 my-lg-3">
          <h2 className="text-center mb-5">WEEKLY EVENTS</h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={16}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2000, // 2 seconds
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1.15, centeredSlides: true },
              576: { slidesPerView: 2.1 },
              992: { slidesPerView: 3.3 },
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
        <section className="container py-5 my-3 about-us-section">
          <div
            className="row g-4 align-items-center justify-content-center "
            id="about"
          >
            <div className="col-12 col-lg-8 text-center">
              <div className="ff-title mb-5">
                <img src="/logo.png"></img>
              </div>

              <p
                className="text-light px-3 mb-3"
                style={{ maxWidth: 760, margin: "0 auto", fontSize: "1.3em" }}
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
                  fontSize: "1.3em",
                }}
              >
                With refined drinks and inviting shisha nights, Loucura is where
                Lisbon’s evenings feel electric.
              </p>

              <div className="mt-5">
                <Link
                  href="/"
                  className="rounded-pill cta-btn"
                  style={{ fontWeight: 500 }}
                >
                  Follow us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <div
          className="d-lg-none"
          style={{
            position: "absolute",
            left: "0",
            top: "31%",
            zIndex: "-1",
            overflow: "hidden",
          }}
        >
          <img src="/Vector3.png" className="img-fluid" />
        </div> */}

        {/* THE EXPERIENCE */}
        <section className="py-5 my-3">
          <h2 className=" text-center mb-5">THE EXPERIENCE</h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 2000, // 2 seconds
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              992: { slidesPerView: 1.5, centeredSlides: true },
            }}
          >
            {experienceImages.map((src, index) => (
              <SwiperSlide key={index} className="pb-5">
                <motion.div
                  className="ff-card"
                  variants={zoomFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <picture>
                    <source media="(max-width: 768px)" srcSet={src.mobile} />
                    <img
                      src={src.desktop}
                      alt="hero"
                      className="img-fluid rounded-5"
                    />
                  </picture>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* <div
          className="d-lg-none"
          style={{
            position: "absolute",
            left: "0",
            top: "60%",
            zIndex: "-1",
            overflow: "hidden",
          }}
        >
          <img src="/Vector3.png" className="img-fluid" />
        </div> */}

        {/* FIND US */}
        <section className="container py-5">
          <div className="d-flex align-items-center justify-content-center flex-column flex-md-row">
            <div className="col-6 d-md-block d-none px-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.460490811069!2d-9.145907624072274!3d38.70723537176517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193543e1185fbf%3A0x9acbe17f18b6e082!2sLoucura!5e0!3m2!1sen!2sin!4v1768813082770!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="ff-card"
                referrerPolicy="no-referrer-when-downgrade"
                title="Loucura Location Map"
              />
            </div>
            <div className="col-12 col-md-6 px-0">
              <h2 className=" mb-4 text-center">FIND US</h2>
              <div className="text-light text-center">
                <p style={{ fontSize: "18px" }}>
                  R Nova do Carvalho 24, Lisbon <br />
                  Fri–Sun: 12 AM – 6 AM
                </p>
              </div>
              {/* redirect to home */}
              <div className="my-3 mb-4 d-flex justify-content-center mb-5">
                <Link
                  href="https://maps.app.goo.gl/b2Joupzvi7m3esSw9"
                  target="_blank"
                  className="btn cta-btn rounded-pill"
                  style={{ fontWeight: 500 }}
                >
                  Directions
                </Link>
              </div>
            </div>
            <div className="d-lg-none w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.460490811069!2d-9.145907624072274!3d38.70723537176517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193543e1185fbf%3A0x9acbe17f18b6e082!2sLoucura!5e0!3m2!1sen!2sin!4v1768813082770!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-4"
                referrerPolicy="no-referrer-when-downgrade"
                title="Loucura Location Map"
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}

function EventTile({ card }) {
  return (
    <div
      className="ff-card position-relative p-4 rounded-5"
      style={{ backgroundColor: "black" }}
    >
      <motion.div
        className="ff-card position-relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {card.tag && <div className="ff-pill text-light">{card.tag}</div>}

        <Link href={card.href}>
          <img className="ff-img rounded-5 mb-3" src={card.image} alt="Event" />
        </Link>
        <div className="w-100">
          <Link
            href="/"
            className="btn rounded-pill w-100 cta-btn"
            style={{ fontWeight: 500 }}
          >
            Book Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
