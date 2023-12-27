const ReferenceItemSkeleton = ({ height }: { height: number }) => {
  return (
    <div
      className={`h-[${height}px] w-full bg-gradient-to-br from-main_purple via-second_purple to-main_purple animate-pulse`}
    />
  );
};

const ReferencesSkeleton = () => {
  return (
    <div className="flex flex-row gap-2 mt-8">
      <div className="flex flex-col gap-2 gl:w-1/6 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2">
        <ReferenceItemSkeleton height={400} />
        <ReferenceItemSkeleton height={550} />
        <ReferenceItemSkeleton height={500} />
      </div>
      <div className="flex flex-col gap-2 gl:w-1/6 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2">
        <ReferenceItemSkeleton height={500} />
        <ReferenceItemSkeleton height={400} />
        <ReferenceItemSkeleton height={550} />
      </div>
      <div className="sm:flex hidden flex-col gap-2 gl:w-1/6 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2">
        <ReferenceItemSkeleton height={500} />
        <ReferenceItemSkeleton height={550} />
        <ReferenceItemSkeleton height={400} />
      </div>
      <div className="md:flex hidden flex-col gap-2 gl:w-1/6 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2">
        <ReferenceItemSkeleton height={550} />
        <ReferenceItemSkeleton height={500} />
        <ReferenceItemSkeleton height={400} />
      </div>
      <div className="lg:flex hidden flex-col gap-2 gl:w-1/6 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2">
        <ReferenceItemSkeleton height={500} />
        <ReferenceItemSkeleton height={400} />
        <ReferenceItemSkeleton height={550} />
      </div>
      <div className="xl:flex hidden flex-col gap-2 gl:w-1/6 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2">
        <ReferenceItemSkeleton height={400} />
        <ReferenceItemSkeleton height={550} />
        <ReferenceItemSkeleton height={500} />
      </div>
      <div className="gl:flex hidden flex-col gap-2 gl:w-1/6 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2">
        <ReferenceItemSkeleton height={550} />
        <ReferenceItemSkeleton height={400} />
        <ReferenceItemSkeleton height={500} />
      </div>
    </div>
  );
};

export default ReferencesSkeleton;
