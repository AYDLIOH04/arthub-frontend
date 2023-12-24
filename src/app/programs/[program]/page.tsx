import ProgramPage from "@/app/programs/[program]/(components)/program-page";
import { parseUrlString } from "@/utils/parse-url";

export async function generateMetadata({ params: { program } }: Props) {
  const title = parseUrlString(program)
    .split(" ")
    .map((t) => t[0].toUpperCase() + t.slice(1))
    .join(" ");

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
  const query = program.toLowerCase();

  return (
    <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender lg:min-h-[78vh] md:min-h-[70vh] min-h-[66.3vh]">
      <ProgramPage query={query} />
    </div>
  );
};

export default ProgramsPage;
