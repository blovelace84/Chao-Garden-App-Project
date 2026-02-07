import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chao Garden Layout",
  description:
    "This is a layout for the Chao Garden page, providing a consistent structure and styling across the application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif" }}>{children}</body>
    </html>
  );
}
