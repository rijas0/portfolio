import WorkItem from "@/types/workitem";

export default function TechStackCard({ data }: { data: WorkItem }) {
  return (
    <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
      {data.techStack.map((item, index) => (
        <div
          className="flex flex-col items-center gap-3"
          key={`${item.title}-${index}`}
        >
          <div className="w-6 h-6 flex items-center justify-center text-foreground [&>svg]:w-full [&>svg]:h-full">
            {item.svgUrl ? (
              <span dangerouslySetInnerHTML={{ __html: item.svgUrl }} />
            ) : (
              <span className="flex items-center justify-center w-6 h-6 rounded-full border border-divider text-[10px] font-medium text-secondarytext">
                {item.title.charAt(0)}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-secondarytext">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
