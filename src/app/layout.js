import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import localFont from "next/font/local";

import { Bebas_Neue } from "next/font/google";


const bebasneue = Bebas_Neue({
  subsets: ["latin"], // choose character sets
  variable: "--font-bebasneue", // optional CSS variable
  weight: ["400"], // pick the weights you need
});

const blaster = localFont({
  src: "./fonts/blaster.otf",
  variable: "--font-blaster",
});

const ltwave = localFont({
  src: "./fonts/ltwave.otf",
  variable: "--font-ltwave",
});

export const metadata = {
  title: "Loucura Bar Lisbon | Best Nightclub on Pink Street",
  description: "Discover the best parties at Loucura Bar & Club on Pink Street, Lisbon. Fresh events daily, new DJs every night, cocktails and shisha. Open till 6 AM.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ltwave.variable} ${blaster.variable} ${bebasneue.variable}`}>
      <head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity=""
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-ltwave">
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
