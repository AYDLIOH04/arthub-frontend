const TutorialItemSkeleton = () => {
  return (
    <div className="w-[351px] h-[321px] bg-main_purple flex flex-col gap-2 rounded-md p-3 group duration-300">
      <div className="rounded-t-md overflow-hidden relative">
        <div className=" w-full h-[250px]">
          <div className="bg-gradient-to-br from-background via-main_purple to-background rounded-md animate-pulse h-full w-full" />
          <div className="absolute bottom-1 right-1 bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[25px] w-[50px] rounded-md animate-pulse" />
        </div>
      </div>
      <div className="pb-2 border-b-2 border-[#8F81B5]">
        <div className="flex flex-row justify-between items-center">
          <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[25px] w-[220px] rounded-md animate-pulse" />
          <div className="bg-gradient-to-br from-background via-main_purple to-background h-[25px] w-[25px] rounded-full animate-pulse"/>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center relative">
        <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[25px] w-[130px] rounded-md animate-pulse" />
        <div className="bg-gradient-to-br from-background via-main_purple to-background h-[40px] w-[40px] rounded-full animate-pulse"/>
      </div>
    </div>
  );
};

const TutorialsSkeleton = () => {
  const tutorialCount = 6;

  const tutorialElements = [];
  for (let i = 0; i < tutorialCount; i++) {
    tutorialElements.push(<TutorialItemSkeleton key={i} />);
  }

  return (
    <ul className="flex flex-wrap justify-center gap-8">
      {tutorialElements}
    </ul>
  );
};

export default TutorialsSkeleton;
