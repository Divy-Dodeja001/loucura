// app/events/[slug]/page.jsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../events.css";

/** ------------------ DATA (with your exact copies) ------------------ **/
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
    image: "/home/event1.jpg",
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
    image: "/home/event2.png",
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
    image: "/home/event3.png",
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
    image: "/home/event4.png",
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
    image: "/home/event5.png",
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

/** Helper: keep your copy formatting but render with paragraphs + lines */
function formatCopy(text) {
  // split on double newlines into blocks
  const blocks = text
    .split(/\n\s*\n/g)
    .map((b) => b.trim())
    .filter(Boolean);

  return blocks.map((block, i) => {
    // keep lines inside block
    const lines = block
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    // If this block starts with "THE " treat first line as a mini heading
    const first = lines[0] || "";
    const isMiniHeading = first.startsWith("THE ");

    return (
      <div key={i} className="mb-3">
        {isMiniHeading ? (
          <>
            <h3 className="event-minihead">{first}</h3>
            {lines.slice(1).map((ln, idx) => (
              <p key={idx} className="event-paragraph mb-2">
                {ln}
              </p>
            ))}
          </>
        ) : (
          lines.map((ln, idx) => (
            <p key={idx} className="event-paragraph mb-2">
              {ln}
            </p>
          ))
        )}
      </div>
    );
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const event = weeklyEvents.find((e) => e.slug === slug);

  if (!event) return notFound();

  return (
    <>
      <main className="loucura-page">
        <Navbar />
        <div className="eventslug-bg" />

        <section className="eventslug-page position-relative">
          <div className="container position-relative py-5">
            {/* TOP: heading + CTA (stays above banner at start) */}
            <div className="text-center events-header py-5 my-5 eventslug-sticky">
              <div className="d-inline-flex align-items-center justify-content-center gap-2 events-pill mb-3">
                <span className="events-pill__dot" />
                <span className="events-pill__text">{event.badge}</span>
              </div>

              <h1 className="eventslug-title mb-2">{event.heading}</h1>

              <div className="eventslug-sub mb-3">
                <span className="me-2">{event.day}</span>
                <span className="opacity-75">•</span>
                <span className="ms-2">{event.dateText}</span>
              </div>

              <div className="d-flex justify-content-center gap-2 flex-wrap mb-5">
                <a
                  href="#tickets"
                  className="btn btn-dark rounded-pill px-4 py-2"
                >
                  Buy Tickets
                </a>
                <Link
                  href="/events"
                  className="btn btn-dark rounded-pill px-4 py-2"
                >
                  Back to Events
                </Link>
              </div>
            </div>

            {/* STICKY BANNER: on scroll, it "stacks" under header */}
            <div className=" mt-4" style={{ position: "relative", zIndex: 1 }}>
              <div className="eventslug-bg rounded-5" />
              <div className="eventslug-banner mb-4">
                <img
                  src={event.image}
                  alt={event.eventName}
                  className="eventslug-banner__img"
                />
                <div className="eventslug-banner__shade" />
              </div>
              {/* CONTENT: description below */}
              <div className="row justify-content-center">
                <div className="col-12 col-lg-9 col-xl-8">
                  <div className="eventslug-copycard mt-4">
                    <div className="eventslug-meta mb-3">
                      <div className="eventslug-meta__row">
                        <span className="eventslug-meta__label">Night</span>
                        <span className="eventslug-meta__value">
                          {event.eventName}
                        </span>
                      </div>
                      <div className="eventslug-meta__row">
                        <span className="eventslug-meta__label">Theme</span>
                        <span className="eventslug-meta__value">
                          {event.theme}
                        </span>
                      </div>
                      <div className="eventslug-meta__row">
                        <span className="eventslug-meta__label">Genres</span>
                        <span className="eventslug-meta__value">
                          {event.genres}
                        </span>
                      </div>
                      <div className="eventslug-meta__row">
                        <span className="eventslug-meta__label">Time</span>
                        <span className="eventslug-meta__value">
                          {event.timeRange}
                        </span>
                      </div>
                      <div className="eventslug-meta__row">
                        <span className="eventslug-meta__label">Entry</span>
                        <span className="eventslug-meta__value">
                          {event.entryInfo}
                        </span>
                      </div>
                    </div>

                    <div className="eventslug-copy">
                      {formatCopy(event.description)}
                    </div>

                    <div id="tickets" className="mt-4">
                      <a
                        className="btn btn-dark w-100 rounded-pill py-3 events-buybtn"
                        href="#"
                      >
                        Buy Tickets
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer for nicer scroll */}
            <div className="pb-5" />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
