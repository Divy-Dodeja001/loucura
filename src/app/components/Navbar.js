"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const goTo = (href) => {
    // Close offcanvas if open
    const el = document.getElementById("mobileNav");
    if (el) {
      const bs = window.bootstrap;
      const instance = bs?.Offcanvas?.getInstance(el) || bs?.Offcanvas?.getOrCreateInstance(el);
      instance?.hide();
    }

    // Navigate
    router.push(href);
  };

  return (
    <header
      className="py-3 position-sticky font-manrope"
      style={{
        top: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.55)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/" className="text-decoration-none text-white">
          <img src="/logo.png" alt="Logo" style={{ height: 34 }} />
        </Link>

        {/* Desktop */}
        <div className="d-none d-md-block">
          <div className="d-flex align-items-center" style={{ gap: "2em" }}>
            <Link href="/" className="text-light nav-link px-0" style={{ fontWeight: 500 }}>
              Home
            </Link>
            <Link href="/events" className="text-light nav-link px-0" style={{ fontWeight: 500 }}>
              Events
            </Link>
            <Link href="/#about" className="text-light nav-link px-0" style={{ fontWeight: 500 }}>
              About
            </Link>
            <Link href="/" className="btn cta-btn rounded-pill" style={{ fontWeight: 500 }}>
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="d-md-none">
          <button
            className="btn p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
            aria-label="Open menu"
            style={{
              background: "transparent",
              borderRadius: 12,
            }}
          >
            <span className="nav-hamburger" />
          </button>
        </div>
      </div>

      {/* Mobile Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileNav"
        aria-labelledby="mobileNavLabel"
        style={{
          background: "rgba(0,0,0,0.96)",
          color: "#fff",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileNavLabel" style={{ letterSpacing: "0.08em" }}>
            MENU
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          <div className="d-flex flex-column gap-3">
            <div type="button" className="mobile-nav-item text-start" onClick={() => goTo("/")}>
              Home
            </div>

            <div type="button" className="mobile-nav-item text-start" onClick={() => goTo("/events")}>
              Events
            </div>

            <div type="button" className="btn cta-btn rounded-pill w-100 mt-2" style={{ fontWeight: 600 }} onClick={() => goTo("/")}>
              Book Now
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
