import type { Metadata } from "next";
import "./globals.css";
import { workSans } from "./_lib/fonts";

export const metadata: Metadata = {
  title: "Pitch App",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable}`}>{children}</body>
    </html>
  );
}
