import Link from "next/link";

const FavoriteNotFound = ({
  Icon,
  message,
  add,
  link,
}: {
  Icon: any;
  message: string;
  add: string;
  link: string;
}) => {
  return (
    <div className="flex justify-center items-center h-[350px] bg-page_elem_bg rounded-xl">
      <div className="text-center">
        <div className="w-[80px] h-[80px] mx-auto flex justify-center items-center bg-hover rounded-full mb-5">
          <Icon size={60} className="text-page_elem_bg" />
        </div>
        <h2 className="font-bold text-4xl uppercase">Not Found</h2>
        <p className="text-2xl mb-5">{message}</p>
        <Link
          href={link}
          className="text-2xl px-3 py-2 rounded-md bg-hover hover:opacity-70 duration-200"
        >
          Добавить {add}
        </Link>
      </div>
    </div>
  );
};

export default FavoriteNotFound;
