import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import ThemeContextProvider from "./ThemeContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fintrack",
  description: "financial tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#FCFDFD] w-full min-h-screen p-8 sm:px-16 sm:pt-4 sm:pb-8 antialiased`}
      >
        <ThemeContextProvider>
          <TopNav />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
