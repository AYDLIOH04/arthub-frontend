import { IProgram } from "@/models";

const ProgramSlide = ({
  program,
  addToFavorite,
}: {
  program: IProgram;
  addToFavorite: any;
}) => {
  return <div>{program.name}</div>;
};

export default ProgramSlide;