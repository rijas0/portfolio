import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { WorkHeader } from "@/components/WorkHeader";
import { SelectedWork } from "@/components/SelectedWork";
import { works } from "@/data/workdata";

export const metadata = {
  title: "Work — Rijas",
  description:
    "Selected projects and products built by Rijas Muhammed — mobile apps and web platforms.",
};

export default function WorkPage() {
  return (
    <div>
      <NavBar />
      <WorkHeader />
      <SelectedWork data={works} />
      <Footer />
    </div>
  );
}
