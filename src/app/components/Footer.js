"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="ff-footer py-5 mt-4 px-3">
      <div className="container">
        <div className="d-flex flex-column flex-md-row gap-4 justify-content-between">
          <div>
            <div className="ff-title mb-3">
              <img
                src="/logo.png"
                style={{ width: "128px", height: "32px" }}
              ></img>
            </div>
            <div className="text-light">
              Loucura bar and club. Live the madness
            </div>

            <div className="d-flex gap-3 mt-3">
              <Link
                href="https://www.instagram.com/loucurabarandclub"
                className="text-white"
                aria-label="Instagram"
              >
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
  );
};

export default Footer;
