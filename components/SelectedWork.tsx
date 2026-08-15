import WorkItem from "@/types/workitem";
import { SelectedWorkCard } from "./SelectedWorkCard";
import { Divider } from "./Divider";

export function SelectedWork({ data }: { data: WorkItem[] }) {
  return (
    <div className="px-6 sm:px-10 lg:px-20 pb-6">
      {data.map((item) => (
        <div key={item.id}>
          <SelectedWorkCard data={item} />
          <Divider />
        </div>
      ))}
    </div>
  );
}
