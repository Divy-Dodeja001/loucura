"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
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
          <img src="/logo.png"></img>{" "}
        </Link>

        <div className="d-md-block d-none">
          <div className="d-flex align-items-center" style={{ gap: "2em" }}>
            <Link
              href="/"
              className="text-light nav-link"
              style={{ fontWeight: 500 }}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="text-light nav-link"
              style={{ fontWeight: 500 }}
            >
              Events
            </Link>
            <Link
              href="/#about"
              className="text-light nav-link"
              style={{ fontWeight: 500 }}
            >
              About
            </Link>
            <Link
              href="/"
              className="btn cta-btn rounded-pill"
              style={{ fontWeight: 500 }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
