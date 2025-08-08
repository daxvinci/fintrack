import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import ThemeContextProvider from "./ThemeContextProvider";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fintrack",
  description: "financial tracking app",
  authors: [{ name: "Elvis Okoro" }],
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "fintrack",
    "finance",
    "tracking",
    "personal finance",
    "budget",
    "expenses",
    "fintech",
    "financial technology",
    "digital banking",
    "online banking",
    "mobile banking",
    "banking apps",
    "financial services",
    "neobanks",
    "challenger banks",
    "digital payments",
    "payment gateway",
    "payment processing",
    "contactless payments",
    "QR payments",
    "e-wallet",
    "mobile wallet",
    "peer-to-peer payments",
    "cross-border payments",
    "blockchain",
    "cryptocurrency",
    "bitcoin",
    "ethereum",
    "stablecoins",
    "crypto wallet",
    "DeFi",
    "smart contracts",
    "robo-advisors",
    "digital investing",
    "stock trading apps",
    "investment platforms",
    "wealth management",
    "crowdfunding",
    "P2P lending",
    "financial security",
    "payment security",
    "fraud detection",
    "AML",
    "KYC",
    "regulatory compliance",
    "AI in finance",
    "machine learning in fintech",
    "open banking",
    "API banking",
    "embedded finance",
    "regtech",
    "insurtech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} bg-[#FCFDFD] w-full min-h-screen p-8 sm:px-16 sm:pt-4 sm:pb-8 antialiased`}
      >
        <ThemeContextProvider>
          <TopNav />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
