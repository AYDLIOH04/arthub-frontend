const TutorialSkeleton = () => {
  return (
    <div className="flex flex-col items-center sm:max-w-[1000px] w-full sm:mx-auto mx-0 px-3">
      <div className="w-full sm:h-[558px] h-[250px] bg-gradient-to-br rounded-md from-background via-main_purple to-main_purple animate-pulse" />
      <div className="flex flex-row justify-between items-center w-full border-b-2 border-[#8F81B5] py-[18px]">
        <div className="flex flex-row gap-3 items-center">
          <div className="w-[40px] h-[40px]  bg-gradient-to-br from-main_purple via-second_purple to-main_purple rounded-full animate-pulse" />
          <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[28px] w-[180px] sm:w-[250px] rounded-md animate-pulse" />
        </div>
        <div className="w-[50px] h-[50px]  bg-gradient-to-br rounded-full from-background via-main_purple to-main_purple animate-pulse" />
      </div>
      <div className="flex flex-row justify-between items-center w-full my-1 mt-4">
        <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[26px] w-[180px] rounded-md animate-pulse" />
        <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[30px] w-[80px] rounded-md animate-pulse" />
      </div>
    </div>
  );
};

export default TutorialSkeleton;
