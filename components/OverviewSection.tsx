import WorkItem from "@/types/workitem";
import Image from "next/image";
import { Divider } from "./Divider";

export default function OverviewSection({ data }: { data: WorkItem }) {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-14 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-10">
          <h2 className="font-display text-2xl md:text-3xl italic font-light text-mutedtext">
            Overview
          </h2>
          <p className="mt-6 text-base md:text-lg font-light leading-relaxed text-secondarytext">
            {data.overview}
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={data.mainImgLink}
            alt={`${data.title} preview`}
            width={1200}
            height={900}
            className="w-auto h-auto max-w-full max-h-[65vh] lg:max-h-[75vh] object-contain rounded-sm"
          />
        </div>
      </div>
      <Divider className="mt-16" />
    </section>
  );
}
