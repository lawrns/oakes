"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ThesisGrid from "@/components/ThesisGrid";
import ApproachPanel from "@/components/ApproachPanel";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import TeamSection from "@/components/TeamSection";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import MagneticCursor from "@/components/MagneticCursor";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MagneticCursor />
      <main className="min-h-screen bg-offwhite">
        <Navigation />
        <HeroSection />
        <ThesisGrid />
        <PortfolioShowcase />
        <TeamSection />
        <ApproachPanel />
        <ContactCard />
        <Footer />
      </main>
    </>
  );
}
