"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import "../events.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const zoomFade = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

/** ------------------ DATA ------------------ **/
const weeklyEvents = [
  {
    id: "mon",
    slug: "monday",
    month: "April",
    day: "Mon",
    dateText: "Every Mon",
    eventName: "Pre-Game: Karaoke Mondays",
    badge: "Weekly",
    genres: "Pop • Hip-Hop • Grunge • R&B • EDM",
    theme: "Club Flashback (90s / 00s / 10s)",
    timeRange: "Pre-Game 8PM–11PM • Club 11PM–Late",
    entryInfo: "Entry info at door",
    href: "/events/monday",
    image: {mobile:"/home/event1M.jpg", desktop:"/home/event1D.jpg"},
    heading: "KARAOKE MONDAYS",
    description: `THE PRE-GAME: KARAOKE MONDAYS
The night begins with you center stage. The Pre-Game is our high-energy Karaoke takeover where the drinks are cold and the mic is hot. It's the perfect excuse to round up the crew, grab a drink and belt out those guilty pleasures before the club kicks into high gear. No judgment, just pure, unadulterated fun to set the tone for the night ahead.

THE MAIN EVENT: CLUB FLASHBACK
Once the singing wraps, we shift gears and head straight to the dance floor. Club Flashback is a sonic time machine, delivering a non-stop mix of the tracks that defined generations. We’re diving deep into three iconic decades:
THE 90s: The best of Pop, Hip-Hop and Grunge.
THE 00s: The golden era of R&B and Indie-Sleaze.
THE 10s: The massive chart-toppers and EDM floor-fillers.
Warm up your vocal cords at the Pre-Game, then lose yourself in the nostalgia of Flashback. Your Monday just got a serious upgrade.`,
  },
  {
    id: "wed",
    slug: "wednesday",
    month: "April",
    day: "Wed",
    dateText: "Every Wed",
    eventName: "Pre-Game: F*ck, Marry, Kill",
    badge: "Weekly",
    genres: "Reggaeton • Latin House • Club Heat",
    theme: "Club Nochétón",
    timeRange: "Pre-Game 8PM–11PM • Club 11PM–Late",
    entryInfo: "Entry info at door",
    href: "/events/wednesday",
    image: {mobile:"/home/event2M.png",desktop:"/home/event2D.png"},
    heading: "F*CK, MARRY, KILL",
    description: `THE PRE-GAME: F*CK, MARRY, KILL
Midweek madness starts here. The Pre-Game brings you our infamous "F*ck, Marry, Kill" night- the ultimate interactive icebreaker. It’s the perfect excuse to round up the crew, grab a drink, and dive into the chaos of the game before the club kicks into high gear. Whether you’re playing along with the crowd or just watching the drama unfold, it’s the flavour your Wednesday needs.

THE MAIN EVENT: CLUB NOCHÉTÓN
Once the games are over, the lights go low and the tempo goes up. Club Nochétón takes over, transforming Loucura into a sanctuary of rhythm. We’re bringing you the heaviest hits and the smoothest transitions in Latin music, featuring:
REGGAETON: The latest global chart-toppers.
LATIN HOUSE: Deep grooves and high-energy tribal beats.`,
  },
  {
    id: "thu",
    slug: "thursday",
    month: "May",
    day: "Thu",
    dateText: "Every Thu",
    eventName: "Pre-Game: Glow & Flow Party",
    badge: "Weekly",
    genres: "Commercial Afro House • Deep Grooves",
    theme: "Infinity Revamped",
    timeRange: "Pre-Game 8PM–11PM • Club 11PM–Late",
    entryInfo: "Entry info at door",
    href: "/events/thursday",
    image: {mobile:"/home/event3.png",desktop:"/home/event3D.png"},
    heading: "GLOW & FLOW PARTY",
    description: `THE PRE-GAME: GLOW & FLOW PARTY
The night begins under the neon lights. The Pre-Game is our signature "Glow & Flow" takeover. A high-vibe social where the atmosphere is electric and the drinks are flowing. Step into the light and let the energy build as we prep for the main event.

THE MAIN EVENT: INFINITY REVAMPED
When the flow reaches its peak, we transition into the future of sound. Infinity Revamped takes the floor, offering a sophisticated, high-energy journey through the global sounds of modern nightlife. We’re bringing you a seamless blend of:
COMMERCIAL AFRO HOUSE: Infectious rhythms and chart-topping remixes.
DEEP GROOVES: A fusion of tribal soul and modern club production.
Find your glow at the Pre-Game, then lose yourself in the relentless rhythm of Infinity Revamped. Thursday is the new Friday.`,
  },
  {
    id: "fri",
    slug: "friday",
    month: "May",
    day: "Fri",
    dateText: "Every Fri",
    eventName: "Pre-Game: American House Party",
    badge: "Weekly",
    genres: "Anthems • Mashups • Party Bangers",
    theme: "Everything Goes",
    timeRange: "Pre-Game 8PM–11PM • Club 11PM–Late",
    entryInfo: "Entry info at door",
    href: "/events/friday",
    image: {mobile:"/home/event4.png",desktop:"/home/event4D.png"},
    heading: "AMERICAN HOUSE PARTY",
    description: `THE PRE-GAME: AMERICAN HOUSE PARTY
We’re bringing the frat house to the club. The Pre-Game is a nostalgic, high-energy throwback to the best house parties you’ve ever seen. It’s the perfect excuse to round up the crew, grab a drink, and dominate the tables in Beer Pong, Flip Cup and Twister before the club kicks into high gear. Compete for bragging rights and get the adrenaline pumping before the main event begins.

THE MAIN EVENT: EVERYTHING GOES
Once the games wrap up, the floor opens wide for Everything Goes. This is the night where we throw the genre handbook out the window and focus on one thing: the energy. Expect a high-octane mix of:
THE ANTHEMS: All-time favorites across every genre.
THE SURPRISES: Mashups, remixes, and unexpected bangers.

Win the game at the Pre-Game, then lose your mind at Everything Goes. This is exactly how your Friday was meant to feel.`,
  },
  {
    id: "sat",
    slug: "saturday",
    month: "June",
    day: "Sat",
    dateText: "Every Sat",
    eventName: "Pre-Game: Tat Me Up!",
    badge: "Weekly",
    genres: "Global Anthems • Underground • Heavy Hitters",
    theme: "Vale Tudo",
    timeRange: "Pre-Game 8PM–11PM • Club 11PM–Late",
    entryInfo: "Entry info at door",
    href: "/events/saturday",
    image: {mobile:"/home/event5.png",desktop:"/home/event5D.png"},
    heading: "TAT ME UP!",
    description: `THE PRE-GAME: TAT ME UP!
The night begins with a statement. The Pre-Game is our "Tat Me Up!". A bold, high-energy session where the ink and the drinks flow in equal measure. It’s the perfect excuse to round up the crew, grab a drink and get marked for the night before the club kicks into high gear. Whether you’re looking for a fresh design or just the high-octane atmosphere, this is where the Saturday story starts.

THE MAIN EVENT: VALE TUDO
Once the prep is done, we strip away the boundaries for Vale Tudo. In the spirit of "anything goes," this is the night where we push the limits of the dance floor. We’re bringing you a relentless, high-energy journey where you should Expect the Unexpected:
THE SOUND: A lawless blend of heavy hitters, global anthems and underground surprises.
THE PERFORMANCE: Immersive visuals and live elements that keep you guessing.

Get tatted up at the Pre-Game, then lose yourself in the chaos of Vale Tudo. Saturdays at Loucura are not for the faint hearted.`,
  },
];


const MONTHS = ["All", "April", "May", "June"];

const page = () => {
  const [activeMonth, setActiveMonth] = useState("All");

  const filtered = useMemo(() => {
    if (activeMonth === "All") return weeklyEvents;
    return weeklyEvents.filter((e) => e.month === activeMonth);
  }, [activeMonth]);

  return (
    <>
      <main className="loucura-page">
        <Navbar />
        <div className="events-bg" />
        <div>
          <section className="events-page position-relative py-5">
            <div className="container position-relative">
              {/* Header */}
              <div className="text-center mb-4">
                {/* <span className="events-kicker">EVENTS</span> */}
                <h1 className="events-title mb-4 font-blaster">
                  WEEKLY EVENTS
                </h1>
                {/* <div className="events-sub">
                  All weekly nights listed under one tag.
                </div> */}
              </div>

              {/* Month Filter (pill slider) */}
              {/* <div className="d-flex justify-content-center mb-4">
                <div className="events-filter">
                  {MONTHS.map((m) => (
                    <button
                      key={m}
                      type="button"
                      className={`events-filter-btn ${activeMonth === m ? "is-active" : ""}`}
                      onClick={() => setActiveMonth(m)}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Cards Grid */}
              <div className="row g-4">
                {filtered.map((ev) => (
                  <div className="col-12 col-md-6 col-lg-4" key={ev.id}>
                    <motion.div
                      className="event-card h-100"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {" "}
                      {/* Media */}
                      <Link href={`/events/${ev.slug}`}>
                        <div className="event-media">
                          <img
                            src={ev.image}
                            alt={ev.eventName}
                            className="event-img"
                          />
                          <span className="event-badge">{ev.badge}</span>

                          {/* <span className="event-tag">Weekly Events</span> */}
                        </div>
                      </Link>
                      {/* Body */}
                      <div className="event-body">
                        <div className="event-top">
                          <div className="event-date">
                            <div className="event-date__dow">{ev.day}</div>
                            <div className="event-date__text">
                              {ev.dateText}
                            </div>
                          </div>

                          <div>
                            <div className="event-name">{ev.eventName}</div>
                            <div className="event-theme">{ev.theme}</div>
                          </div>
                        </div>

                        <div className="event-info">
                          <div className="event-line">
                            <span className="event-label">Genres</span>
                            <span className="event-value">{ev.genres}</span>
                          </div>
                          <div className="event-line">
                            <span className="event-label">Time</span>
                            <span className="event-value">{ev.timeRange}</span>
                          </div>
                          <div className="event-line">
                            <span className="event-label">Entry</span>
                            <span className="event-value">{ev.entryInfo}</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <Link
                            href={ev.href}
                            className="btn btn-dark w-100 event-cta"
                          >
                            Buy Tickets
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default page;
