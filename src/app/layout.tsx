import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "The Code Hatch",
    template: "%s · The Code Hatch",
  },
  description:
    "Coding competitions and workshops empowering Phoenix teenagers with future-ready, AI-driven tech skills.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        <Header />
        <main className="relative z-10 flex-1 pt-36 md:pt-40">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
