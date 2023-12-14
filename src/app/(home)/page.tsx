import ArthubSection from "@/app/(home)/arthub-section";
import ExploreSection from "@/app/(home)/explore-section";
import InspireSection from "@/app/(home)/inspire-section";
import LearnSection from "@/app/(home)/learn-section";
import ScrollButton from "./scroll-button";

const Home = () => {
  return (
    <main>
      <ArthubSection />
      <LearnSection />
      <ExploreSection />
      <InspireSection />
      <ScrollButton />
    </main>
  );
};

export default Home;
