import { works } from "@/data/workdata";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import DetailsHeader from "@/components/DetailsHeader";
import OverviewSection from "@/components/OverviewSection";
import FeaturesAndContribution from "@/components/FeaturesAndContribution";
import TechStack from "@/components/TechStack";
import LinkAndGallery from "@/components/LinkAndGallery";

export function generateStaticParams() {
  return works.map((item) => ({ id: String(item.id) }));
}

export default async function WorkDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = works.find((item) => String(item.id) === id);

  if (!data) notFound();

  return (
    <div>
      <NavBar />
      <DetailsHeader data={data} />
      <OverviewSection data={data} />
      <FeaturesAndContribution
        features={data.keyFeatures.map((item) => item.feature)}
        contributions={data.contributions.map((item) => item.title)}
      />
      <TechStack data={data} />
      <LinkAndGallery data={data} />
      <Footer />
    </div>
  );
}
