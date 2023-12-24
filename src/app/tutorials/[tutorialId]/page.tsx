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
    <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender lg:min-h-[78vh] md:min-h-[70vh] min-h-[66.3vh]">
      <TutorialPage tutorialId={tutorialId} />
    </div>
  );
};

export default ProgramsPage;
