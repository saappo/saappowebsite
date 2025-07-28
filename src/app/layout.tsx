import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Saappo - AI Automation Engineering | Kings of microSaaS",
  description: "Saappo specializes in AI automation engineering, helping businesses build intelligent microSaaS solutions that scale. Transform your operations with cutting-edge AI technology.",
  keywords: "AI automation, microSaaS, engineering, artificial intelligence, automation, software development",
  authors: [{ name: "Saappo" }],
  openGraph: {
    title: "Saappo - AI Automation Engineering",
    description: "Kings of microSaaS - Transform your business with AI automation",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
