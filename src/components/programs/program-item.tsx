import { IProgram } from "@/models";
import { getSystemsIcon } from "@/utils/get-icon";

const ProgramItem = ({ program }: { program: IProgram }) => {
  return (
    <div>
      {program.systems.map((os) => {
        const Icon = getSystemsIcon(os);
        return <Icon />;
      })}
      {program.title}
    </div>
  );
};

export default ProgramItem;
