type Props = {
  params: {
    program: string;
  };
};

const ProgramsPage = ({ params: { program } }: Props) => {
  return <div className="text-center mt-[120px] text-2xl">Program {program} Page</div>;
};

export default ProgramsPage;
