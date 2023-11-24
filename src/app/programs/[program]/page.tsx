import MainFooter from "@/components/UI/main-footer";
import ProgramPage from "@/app/programs/[program]/program-page";
import { parseUrlString } from "@/utils/parse-url";

export async function generateMetadata({ params: { program } }: Props) {
  const title = parseUrlString(program);

  return {
    title: `ArtHub | ${title}`,
    description: `${title}`,
  };
}

type Props = {
  params: {
    program: string;
  };
};

const ProgramsPage = ({ params: { program } }: Props) => {
  const query = program.replace("%20", "").toLowerCase();
  
  return (
    <>
      <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender min-h-[calc(100vh - 120px)]">
        <ProgramPage query={query} />
      </div>
      <MainFooter />
    </>
  );
};

export default ProgramsPage;
