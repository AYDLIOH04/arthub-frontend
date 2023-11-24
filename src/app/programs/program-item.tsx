import { IProgram } from "@/models";
import { getSystemsIcon } from "@/utils/get-icon";
import Image from "next/image";
import Link from "next/link";

const ProgramItem = ({ program }: { program: IProgram }) => {
  return (
    <li
      className="
      flex sm:flex-row flex-col gap-2
      border-2 border-indigo-300
      rounded-md overflow-hidden
    "
    >
      <div className="sm:w-1/6 w-full flex justify-center items-center">
        <Image
          src="/programs/Photoshop.png"
          width={200}
          height={200}
          alt={program.name}
          className="select-none pointer-events-none p-3 w-full"
        />
      </div>
      <div className="bg-main_purple sm:w-5/6 w-full px-4 py-3">
        <h2 className="border-b-2 border-[#8F81B5] inline text-[24px] pb-0.5">
          {program.name}
        </h2>
        <div className="mt-2">
          <p className="font-thin text-[18px]">{program.description}</p>
          <div className="mt-2 flex justify-between items-center">
            <Link
              href={`/programs/${program.name}`}
              className="font-thin text-[24px] border-2 border-white rounded-[5px] px-2 hover:bg-hover hover:border-hover transition"
            >
              Подробнее
            </Link>
            <div className="flex flex-row gap-2 items-center text-[24px]">
              {program.systems.map((os, index) => {
                const Icon = getSystemsIcon(os);
                return (
                  <div key={index} className="hover:opacity-80">
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProgramItem;
