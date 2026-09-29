import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Letters, Kept for You",
  description: "A private collection of Open When letters, kept for someone special.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
