import { NavBar } from "@/components/NavBar";
import { ContactHeader } from "@/components/ContactHeader";
import { ContactChannels } from "@/components/ContactChannels";
import { SocialsStrip } from "@/components/SocialsStrip";

export const metadata = {
  title: "Contact — Rijas",
  description:
    "Get in touch with Rijas Muhammed for mobile apps, web platforms, and collaborations.",
};

export default function ContactPage() {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <ContactChannels />
      <SocialsStrip />
    </div>
  );
}
