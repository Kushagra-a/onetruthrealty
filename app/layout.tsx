import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "One truth Realty | Private Bengaluru Luxury Advisory",
  description:
    "A polished private real estate advisory website for high-net-worth Bengaluru property clients."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={playfair.variable}>{children}</body>
    </html>
  );
}
