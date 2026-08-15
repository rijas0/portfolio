import WorkItem from "@/types/workitem";
import TechStackCard from "./TechStackCard";
import { Divider } from "./Divider";

export default function TechStack({ data }: { data: WorkItem }) {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-14 md:py-16">
      <h2 className="font-display text-2xl md:text-3xl italic font-light text-mutedtext">
        Tech Stack
      </h2>
      <TechStackCard data={data} />
      <Divider className="mt-16" />
    </section>
  );
}
