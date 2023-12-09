const Video = ({ id }: { id: string }) => {
  return (
    <iframe
      className="w-[300px] h-[300px]"
      src={`https://www.youtube.com/embed/${id}`}
      allowFullScreen
    />
  );
};

export default Video;
