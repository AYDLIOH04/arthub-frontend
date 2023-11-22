const BrushesSkeleton = () => {
  const brushCount = 12;

  const brushElements = [];
  for (let i = 0; i < brushCount; i++) {
    brushElements.push(<BrushSkeleton key={i} />);
  }

  return (
    <div className="flex flex-wrap flex-row justify-center gap-8 mt-10">
      {brushElements}
    </div>
  );
};

export default BrushesSkeleton;

const BrushSkeleton = () => {
  return (
    <div className="flex flex-col border-2 border-second_purple rounded-md overflow-hidden w-[300px] max-h-[670px]">
      <div className="bg-gradient-to-br from-second_purple via-main_purple to-main_purple h-[250px] mx-auto w-full pb-3 animate-pulse relative">
        <div className="bg-gradient-to-br from-background via-main_purple to-main_purple h-full w-full rounded-md animate-pulse" />
        <div className="absolute right-2 top-2 w-[50px] h-[50px]  bg-gradient-to-br from-main_purple via-second_purple to-main_purple rounded-full animate-pulse" />
      </div>
      <div className="h-[3px] bg-second_purple" />
      <div className="bg-second_purple px-4 py-4 h-[280px] flex flex-col gap-2 ">
        <div className="flex gap-3 items-center justify-between mb-2">
          <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[20px] w-[100px] rounded-md border-b-2 border-second_purple animate-pulse" />
          <div className="flex flex-row items-center gap-2">
            <div className="w-[30px] h-[30px]  bg-gradient-to-br from-main_purple via-second_purple to-main_purple rounded-full animate-pulse" />
            <div className="hidden sm:block bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[20px] w-[50px] rounded-md border-b-2 border-second_purple animate-pulse" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[200px] w-full rounded-md animate-pulse" />
      </div>
    </div>
  );
};
