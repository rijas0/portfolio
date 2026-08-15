import { HeroComponent } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { HeadingLabel } from "@/components/HeadingLabel";
import { SelectedWork } from "@/components/SelectedWork";
import { works } from "@/data/workdata";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroComponent />
      <HeadingLabel />
      <SelectedWork data={works}/>
      <Footer />
    </div>
  );
}
