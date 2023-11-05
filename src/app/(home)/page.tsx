import ArthubSection from "@/components/home/arthub-section";
import ExploreSection from "@/components/home/explore-section";
import InspireSection from "@/components/home/inspire-section";
import LearnSection from "@/components/home/learn-section";

export default function Home() {
  return (
    <main>
      <ArthubSection />
      <LearnSection/>
      <ExploreSection/>
      <InspireSection/>
    </main>
  );
}
