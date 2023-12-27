import ArthubSection from "@/app/(home)/(components)/arthub-section";
import ExploreSection from "@/app/(home)/(components)/explore-section";
import InspireSection from "@/app/(home)/(components)/inspire-section";
import LearnSection from "@/app/(home)/(components)/learn-section";
import ScrollButton from "../../components/UI/scroll-button";

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
