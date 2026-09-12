/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/SharedSections/Navbar";
import Footer from "@/Components/SharedSections/Footer";
import SmoothScroll from "@/Components/SharedSections/SmoothScroll";

export const metadata: Metadata = {
  title: "Brentiq Studio",
  description: "Brentiq Studio is a leading design and development agency specializing in creating exceptional digital experiences. We offer a wide range of services, including UI/UX design, web design, branding, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Stack+Sans+Notch:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body min-h-screen flex flex-col">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
