import type { Metadata } from "next";
import Dashboard from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Household Network Courtroom",
  description:
    "A courtroom-style dashboard for household network activity, witness credibility, and transcript export.",
};

export default function Home() {
  return (
    <main className="courtroom-dashboard">
      <Dashboard />
    </main>
  );
}