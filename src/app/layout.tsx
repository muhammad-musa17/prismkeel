import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrismKeel — Bold ideas. Solid foundations.",
  description:
    "PrismKeel brings together web and mobile development, cybersecurity, social media marketing, 3D modelling and AI integration.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}