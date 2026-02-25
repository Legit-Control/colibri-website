import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Banner } from "@/components/cookiebanner";

const aspekta = localFont({
  src: [
    {
      path: "../public/fonts/Aspekta/Aspekta-100.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Aspekta/Aspekta-200.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Aspekta/Aspekta-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Aspekta/Aspekta-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aspekta/Aspekta-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Aspekta/Aspekta-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Aspekta/Aspekta-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Aspekta/Aspekta-800.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Aspekta/Aspekta-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-aspekta",
  display: "swap",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono/GeistMono-Regular.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://www.get-colibri.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Colibri – Real-Time Collaborative Markdown Editor",
    template: "%s | Colibri",
  },
  description:
    "Edit Markdown in real time with your team. Colibri is a collaborative markdown editor with sync, annotations, and Git integration.",
  keywords: [
    "collaborative markdown editor",
    "real-time markdown",
    "WYSIWYG",
    "annotations",
    "Git integration",
    "Github",
  ],
  authors: [{ name: "Legit-Control" , url: "https://www.legitcontrol.com/" }],
  icons: { icon: "/colibri-logo-white.svg" },
  appleWebApp: { title: "Colibri" },
  openGraph: {
    title: "Colibri – Real-Time Collaborative Markdown Editor",
    description:
      "Edit Markdown in real time with your team. Colibri is a collaborative markdown editor with sync, annotations, and Git integration.",
    url: siteUrl,
    siteName: "Colibri",
    images: [{ url: "/app-screen.png", width: 1200, height: 630, alt: "Colibri App Screenshot" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colibri – Real-Time Collaborative Markdown Editor",
    description:
      "Edit Markdown in real time with your team. Colibri is a collaborative markdown editor with sync, annotations, and Git integration.",
    images: ["/app-screen.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aspekta.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Banner />

      </body>
    </html>
  );
}
