const ProgramItemSkeleton = () => {
  return (
    <li
      className="
      flex sm:flex-row flex-col
      border-2 border-second_purple
      rounded-md overflow-hidden
      min-h-[210px] w-full"
    >
      <div className="sm:w-1/6 w-full flex justify-center items-center sm:h-auto h-[300px] relative">
        <div className="bg-gradient-to-br from-background via-main_purple to-main_purple h-5/6 w-5/6 rounded-md animate-pulse" />
        <div className="flex sm:left-2 group-hover:flex absolute right-2 top-2 w-[50px] h-[50px] bg-gradient-to-br from-main_purple via-second_purple to-main_purple rounded-full animate-pulse" />
      </div>
      <div className="bg-main_purple sm:w-5/6 w-full px-4 py-3">
        <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[25px] w-[180px] rounded-md animate-pulse" />
        <div className="mt-4">
          <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[90px] w-full rounded-md animate-pulse" />
          <div className="mt-4 flex justify-between items-center">
            <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[40px] w-[150px] rounded-md animate-pulse" />
            <div className="flex flex-row gap-2 items-center text-[24px]">
              <div className="w-[40px] h-[40px]  bg-gradient-to-br from-main_purple via-second_purple to-main_purple rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const ProgramsSkeleton = () => {
  const programCount = 4;

  const programElements = [];
  for (let i = 0; i < programCount; i++) {
    programElements.push(<ProgramItemSkeleton key={i} />);
  }

  return (
    <ul className="flex flex-wrap justify-center space-y-4">
      {programElements}
    </ul>
  );
};

export default ProgramsSkeleton;
