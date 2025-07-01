
import { Button } from "@/components/ui/button";
import FeatureCards from "./FeatureCards";

const Highlights = () => {
  return (
    <section id="highlights" className="section-spacing bg-white px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <FeatureCards compact={true} />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
