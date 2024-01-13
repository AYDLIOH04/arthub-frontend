import { MdError } from "react-icons/md";

const FavoriteFetchError = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-center items-center h-[350px] bg-page_elem_bg rounded-xl">
      <div className="text-center">
        <MdError size={90} className="mx-auto mb-5 text-rose-400" />
        <h2 className="font-bold text-4xl uppercase">Fetch Error</h2>
        <p className="text-2xl">{message}</p>
      </div>
    </div>
  );
};

export default FavoriteFetchError;