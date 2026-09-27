import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/SharedSections/Navbar";
import Footer from "@/Components/SharedSections/Footer";
import SmoothScroll from "@/Components/SharedSections/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brentiq Studio",
  description:
    "Brentiq Studio is a leading design and development agency specializing in creating exceptional digital experiences. We offer a wide range of services, including UI/UX design, web design, branding, and more.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
      className={`h-full antialiased ${plusJakartaSans.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body min-h-screen flex flex-col" suppressHydrationWarning>
        <SmoothScroll />
        <Navbar />
        <main className="flex-1" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
