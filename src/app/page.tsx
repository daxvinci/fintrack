"use client"

import Header from "@/components/Header";
import Overview from "@/components/Overview";
import SideNav from "@/components/SideNav";
import Transaction from "@/components/Transaction";
import { useState } from "react";


export default function Home() {
  const [view,setView] = useState("overview")
  return (
    <div className="py-16 flex gap-8">
      <SideNav />
      <main className="flex flex-col flex-1 gap-4 row-start-2 items-center sm:items-start">
        <Header />
        <div className="view-toggle border-b w-full border-gray-400 flex gap-4">
          <div
            className={`pb-2 hover:cursor-pointer ${
              view === "overview"
                ? "border-b border-blue-300 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setView("overview")}
          >
            Overview
          </div>
          <div
            className={`pb-2 hover:cursor-pointer ${
              view === "transaction"
                ? "border-b border-blue-300 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setView("transaction")}
          >
            Transactions
          </div>
        </div>
        {view === "overview" && <Overview />}
        {view === "transaction" && <Transaction />}
      </main>
    </div>
  );
}
