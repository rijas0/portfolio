import WorkItem from "@/types/workitem";
import Gallery from "./Gallery";
import LiveLink from "./LiveLink";

export default function LinkAndGallery({ data }: { data: WorkItem }) {
  return (
    <section className="px-6 sm:px-10 lg:px-20 pt-14 pb-20 md:pt-16 md:pb-24">
      <LiveLink data={data} />
      <Gallery images={data.images.map((item) => item.imageUrl)} />
    </section>
  );
}
