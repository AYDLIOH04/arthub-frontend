const PhotoLoader = ({
  isLoading,
  backgroundClass,
}: {
  isLoading: boolean;
  backgroundClass?: string;
}) => {
  return (
    <div className={`${isLoading ? "flex" : "hidden"} flex justify-center items-center ${backgroundClass}`}>
      <div
        className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-dotted"
      />
    </div>
  );
};

export default PhotoLoader;
