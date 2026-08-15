import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { AboutHeader } from "@/components/AboutHeader";
import { AboutIntro } from "@/components/AboutIntro";
import { WhatIDo } from "@/components/WhatIDo";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutCta } from "@/components/AboutCta";

export const metadata = {
  title: "About — Rijas",
  description:
    "About Rijas Muhammed — a full-stack developer from Kannur, Kerala building mobile apps and web platforms.",
};

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <AboutHeader />
      <AboutIntro />
      <WhatIDo />
      <ProcessSection />
      <AboutCta />
      <Footer />
    </div>
  );
}
