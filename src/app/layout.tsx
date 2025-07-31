import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
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
      <body className={`${quicksand.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
          {children}
        </main>
      </body>
    </html>
  );
}
