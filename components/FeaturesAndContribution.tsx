import { Divider } from "./Divider";
import FeatureItemCard from "./FeatureItemCard";

export default function FeaturesAndContribution({
  features,
  contributions,
}: {
  features: string[];
  contributions: string[];
}) {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-14 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="font-display text-2xl md:text-3xl italic font-light text-mutedtext">
            Key Features
          </h2>
          <div className="mt-8 space-y-4">
            {features.map((item, index) => (
              <FeatureItemCard title={item} key={index} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl md:text-3xl italic font-light text-mutedtext">
            My Contributions
          </h2>
          <div className="mt-8 space-y-4">
            {contributions.map((item, index) => (
              <FeatureItemCard title={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Divider className="mt-16" />
    </section>
  );
}
