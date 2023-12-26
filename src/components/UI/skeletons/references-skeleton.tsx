const ReferenceItemSkeleton = ({
  height,
  smHeight,
}: {
  height: number;
  smHeight: number;
}) => {
  return (
    <div
      className={`sm:h-[${height}px] h-[${smHeight}px] w-full bg-gradient-to-br from-main_purple via-second_purple to-main_purple animate-pulse`}
    />
  );
};

const ReferencesSkeleton = () => {
  return (
    <div className="flex flex-row gap-2 mt-8">
      <div className="flex flex-col gap-2 sm:w-1/3 w-1/2">
        <ReferenceItemSkeleton height={400} smHeight={200} />
        <ReferenceItemSkeleton height={500} smHeight={300} />
        <ReferenceItemSkeleton height={550} smHeight={350} />
      </div>
      <div className="flex flex-col gap-2 sm:w-1/3 w-1/2">
        <ReferenceItemSkeleton height={550} smHeight={350} />
        <ReferenceItemSkeleton height={400} smHeight={200} />
        <ReferenceItemSkeleton height={500} smHeight={300} />
      </div>
      <div className="sm:flex flex-col gap-2 w-1/3 hidden">
        <ReferenceItemSkeleton height={400} smHeight={200} />
        <ReferenceItemSkeleton height={550} smHeight={350} />
        <ReferenceItemSkeleton height={500} smHeight={300} />
      </div>
    </div>
  );
};

export default ReferencesSkeleton;
