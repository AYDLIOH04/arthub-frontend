const SliderTitle = ({ children }: { children: string }) => {
  return (
    <div className="flex md:ml-4 ml-0 md:justify-start justify-center">
      <h2 className="text-[24px] border-b-2 border-indigo-300 pb-1">
        {children}
      </h2>
    </div>
  );
};

export default SliderTitle;
