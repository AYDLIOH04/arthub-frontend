
const NotFoundError = ({ Icon, message }: { Icon: any; message: string }) => {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="text-center">
        <div className="w-[80px] h-[80px] mx-auto flex justify-center items-center bg-hover rounded-full mb-5">
          <Icon size={60} className="text-background" />
        </div>
        <h2 className="font-bold text-4xl uppercase">Not Found</h2>
        <p className="text-2xl">{message}</p>
      </div>
    </div>
  );
};

export default NotFoundError;
