import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SOS Pool LLC | Pool Cleaning Service",
  description:
    "Professional pool cleaning, balancing, and maintenance plans for homes and vacation properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="top-strip">
          <div className="site-container top-strip-inner">
            <p>+1 (754) 316-2012</p>
            <p>sospoolfullservice@gmail.com</p>
            <p>Mon - Fri 9AM - 6PM</p>
          </div>
        </div>

        <header className="site-header">
          <div className="site-container nav-inner">
            <Link className="brand" href="/" aria-label="SOS Pool LLC Home">
              <Image
                src="/sos-logo.svg"
                alt="SOS Pools logo"
                width={58}
                height={58}
                className="brand-logo"
                priority
              />
              <span className="brand-text">
                <span className="sos-highlight">SOS</span> Pool LLC
              </span>
            </Link>
            <nav className="main-nav" aria-label="Main Navigation">
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/booking">Booking Request</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/booking" className="nav-quote-btn">
                Request A Quote
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="site-container footer-inner">
            <p>© {new Date().getFullYear()} SOS Pool LLC</p>
            <p>Clean water. Reliable service. Zero guesswork.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
