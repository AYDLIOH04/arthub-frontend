"use client";

import ProgramSkeleton from "@/components/UI/skeletons/program-skeleton";
import { useGetProgramQuery } from "@/store/features/programs/programsApi";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProgramPage = ({ query }: { query: string }) => {
  const {
    data: program,
    isLoading,
    isError,
    error,
  } = useGetProgramQuery({ program: query });

  if (isLoading) return <ProgramSkeleton />;

  if (isError || !program) {
    notFound();
  }

  return (
    <div
      className="
      m-1
      sm:px-9 sm:py-4 px-4 py-2
      flex flex-col gap-2
      border-2 border-indigo-300
      rounded-[15px]
    "
    >
      <div className="flex sm:flex-row flex-col gap-8 mb-3">
        <div className="sm:w-1/6 w-full flex justify-center items-center">
          <img
            src={program.logo}
            width={250}
            height={250}
            alt={program.name}
            className="select-none pointer-events-none w-full"
          />
        </div>
        <div className="sm:w-5/6 w-full">
          <h2 className="border-b-2 border-[#8F81B5] inline text-[24px] pb-0.5">
            {program.name}
          </h2>
          <p className="font-thin text-[22px] mb-3">{program.description}</p>
          <div className="sm:text-start text-center">
            <a
              className="
              font-thin text-indigo-300 text-[22px] pb-0.5
              hover:text-hover border-hover hover:border-b-2 hover:border-hover
              transition duration-300
              sm:mx-0 mx-auto
            "
              href={program.link}
              target="blank"
            >
              Официальный сайт
            </a>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-[22px]">Плюсы:</h3>
        <ul className="font-thin text-[22px] flex flex-col gap-3">
          {program.pluses.map((plus, index) => (
            <li key={index} className="flex flex-row gap-3">
              <div className="flex items-center justify-center w-[5%]">
                <Image
                  src="/programs/li-stone.png"
                  alt={`plus-${index}`}
                  height={22}
                  width={22}
                />
              </div>
              <p className="leading-6 w-[95%]">{plus}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-14">
        <h3 className="text-[22px]">Минусы:</h3>
        <ul className="font-thin text-[22px] flex flex-col gap-3">
          {program.minuses.map((minus, index) => (
            <li key={index} className="flex flex-row gap-3">
              <div className="flex items-center justify-center w-[5%]">
                <Image
                  src="/programs/li-stone.png"
                  alt={`minus-${index}`}
                  height={22}
                  width={22}
                />
              </div>
              <p className="leading-6 w-[95%]">{minus}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex sm:flex-row flex-col sm:gap-10 gap-4 items-center">
          {program.examples.map((example, index) => (
            <li
              key={index}
              className="rounded-md overflow-hidden scale-100 hover:scale-110 transition"
            >
              <img src={example} alt={`example-${index}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <a
          href={program.link}
          target="blank"
          className="
          bg-page_elem_bg hover:bg-hover
          text-[26px] rounded-md
          px-10 py-2 my-10
          transition duration-300 ease-out
          "
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default ProgramPage;
