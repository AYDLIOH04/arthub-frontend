const ProgramSkeleton = () => {
  return (
    <div
      className="
      m-1
      sm:px-4 sm:py-4 px-4 py-2
      flex flex-col gap-2
      border-2 border-second_purple
      rounded-[15px]
      
    "
    >
      <div className="flex sm:flex-row flex-col gap-8 mb-4">
        <div className="sm:w-1/6 w-full flex justify-center items-center">
          <div
            className="bg-gradient-to-br from-background via-main_purple to-main_purple
            sm:w-[180px] mt-2 w-[250px] h-[180px] rounded-md animate-pulse"
          />
        </div>
        <div className="sm:w-5/6 w-full">
          <div className="bg-gradient-to-br from-main_purple mt-2 via-second_purple to-main_purple h-[25px] w-[180px] rounded-md animate-pulse mb-4" />
          <div className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple h-[100px] w-full rounded-md animate-pulse" />
          <div
            className="
            bg-gradient-to-br from-main_purple mt-6 via-second_purple to-main_purple h-[25px] w-[220px] rounded-md animate-pulse"
          />
        </div>
      </div>
      <div className="mb-8">
        <div
          className="bg-gradient-to-br from-background via-main_purple to-main_purple
            w-[120px] h-[20px] rounded-md animate-pulse mb-4"
        />
        <ul className="font-thin text-[22px] flex flex-col gap-3">
          <li className="flex flex-row items-center sm:gap-0 gap-2">
            <div className="flex items-center justify-center w-[5%]">
              <div className="h-[22px] w-[22px] bg-gradient-to-br from-background via-main_purple to-main_purple rounded-md animate-pulse" />
            </div>
            <div className="leading-6 w-[55%] bg-gradient-to-br from-main_purple  via-second_purple to-main_purple h-[25px] rounded-md animate-pulse" />
          </li>
          <li className="flex flex-row items-center sm:gap-0 gap-2">
            <div className="flex items-center justify-center w-[5%]">
              <div className="h-[22px] w-[22px] bg-gradient-to-br from-background via-main_purple to-main_purple rounded-md animate-pulse" />
            </div>
            <div className="leading-6 w-[52%] bg-gradient-to-br from-main_purple  via-second_purple to-main_purple h-[25px] rounded-md animate-pulse" />
          </li>
          <li className="flex flex-row items-center sm:gap-0 gap-2">
            <div className="flex items-center justify-center w-[5%]">
              <div className="h-[22px] w-[22px] bg-gradient-to-br from-background via-main_purple to-main_purple rounded-md animate-pulse" />
            </div>
            <div className="leading-6 w-[57%] bg-gradient-to-br from-main_purple  via-second_purple to-main_purple h-[25px] rounded-md animate-pulse" />
          </li>
        </ul>
      </div>
      <div className="mb-14">
        <div
          className="bg-gradient-to-br from-background via-main_purple to-main_purple
            w-[120px] h-[20px] rounded-md animate-pulse mb-4"
        />
        <ul className="font-thin text-[22px] flex flex-col gap-3">
        <li className="flex flex-row items-center sm:gap-0 gap-2">
            <div className="flex items-center justify-center w-[5%]">
              <div className="h-[22px] w-[22px] bg-gradient-to-br from-background via-main_purple to-main_purple rounded-md animate-pulse" />
            </div>
            <div className="leading-6 w-[49%] bg-gradient-to-br from-main_purple  via-second_purple to-main_purple h-[25px] rounded-md animate-pulse" />
          </li>
          <li className="flex flex-row items-center sm:gap-0 gap-2">
            <div className="flex items-center justify-center w-[5%]">
              <div className="h-[22px] w-[22px] bg-gradient-to-br from-background via-main_purple to-main_purple rounded-md animate-pulse" />
            </div>
            <div className="leading-6 w-[54%] bg-gradient-to-br from-main_purple  via-second_purple to-main_purple h-[25px] rounded-md animate-pulse" />
          </li>
          <li className="flex flex-row items-center sm:gap-0 gap-2">
            <div className="flex items-center justify-center w-[5%]">
              <div className="h-[22px] w-[22px] bg-gradient-to-br from-background via-main_purple to-main_purple rounded-md animate-pulse" />
            </div>
            <div className="leading-6 w-[51%] bg-gradient-to-br from-main_purple  via-second_purple to-main_purple h-[25px] rounded-md animate-pulse" />
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex sm:flex-row flex-col sm:gap-10 gap-4 items-center mx-5">
          <li className="rounded-md overflow-hidden sm:w-1/3 w-full">
            <div className="w-[500px] h-[200px] bg-gradient-to-br from-background via-main_purple to-main_purple rounded-md animate-pulse"/>
          </li>
          <li className="rounded-md overflow-hidden sm:w-1/3 w-full">
            <div className="w-[500px] h-[200px] bg-gradient-to-br from-background via-main_purple to-main_purple rounded-md animate-pulse"/>
          </li>
          <li className="rounded-md overflow-hidden sm:w-1/3 w-full">
            <div className="w-[500px] h-[200px] bg-gradient-to-br from-background via-main_purple to-main_purple rounded-md animate-pulse"/>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="bg-gradient-to-br from-main_purple via-second_purple to-main_purple
          w-[220px] h-[50px] rounded-md animate-pulse my-10
          "
        />
      </div>
    </div>
  );
};

export default ProgramSkeleton;
