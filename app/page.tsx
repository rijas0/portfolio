import { HeroComponent } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { HeadingLabel } from "@/components/HeadingLabel";
import { SelectedWork } from "@/components/SelectedWork";
import { works } from "@/data/workdata";
import { Footer } from "@/components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroComponent />
      <HeadingLabel />
      <SelectedWork data={works.slice(0, 3)} />
      <div className="px-6 sm:px-10 lg:px-20 py-20 md:py-24 flex justify-center">
        <Link
          href="/work"
          className="group inline-flex items-center gap-4 rounded-full border border-foreground px-8 py-4 text-base font-light transition-colors duration-300 hover:bg-foreground hover:text-background"
        >
          Explore more
          <span className="flex items-center justify-center w-6 h-6">
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
