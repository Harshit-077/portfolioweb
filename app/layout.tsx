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
  title: "Harshit Sharma | ML & Web Developer Portfolio",
  description: "Computer Science student passionate about Machine Learning, Backend, and Full Stack Development. Explore projects, skills, and insights.",
  openGraph: {
    title: "Harshit Sharma | ML & Web Developer Portfolio",
    description:
      "Portfolio showcasing Machine Learning, Backend, and Web Development projects.",
    url: "https://harshit-one.vercel.app",
    siteName: "Harshit Sharma Portfolio",
    images: [
      {
        url: "./preview.png",
        width: 1200,
        height: 630,
        alt: "Harshit Sharma Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Sharma | ML & Web Developer Portfolio",
    description:
      "Portfolio showcasing Machine Learning, Backend, and Web Development projects.",
    images: ["./preview.png"],
  },
  icons: {
    icon: "/favicon.ico", // put favicon.ico in /public
  },
  themeColor: "#ffffff",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='nord'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
