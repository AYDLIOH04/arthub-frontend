import { Metadata } from "next";
import TutorialPage from "./(components)/tutorial-page";

export const metadata: Metadata = {
  title: "ArtHub | Tutorial",
};

type Props = {
  params: {
    tutorialId: string;
  };
};

const ProgramsPage = ({ params: { tutorialId } }: Props) => {
  return (
    <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender min-h-[calc(100vh - 120px)]">
      <TutorialPage tutorialId={tutorialId} />
    </div>
  );
};

export default ProgramsPage;
