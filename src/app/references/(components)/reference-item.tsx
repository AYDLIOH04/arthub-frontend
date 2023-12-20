import useCurrentUser from "@/hooks/useCurrentUser";
import { IReference } from "@/models";
import { useRouter } from "next/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ReferenceItem = ({
  reference,
  addToFavorite,
  openViewPopup,
}: {
  reference: IReference;
  addToFavorite: any;
  openViewPopup: any;
}) => {
  const router = useRouter();
  const user = useCurrentUser();

  const toggleFavorite = (event: any) => {
    event.stopPropagation();
    if (user.isAuth) {
      addToFavorite({ reference });
    } else {
      router.push("/auth");
    }
  };

  const LikeIcon = reference.favorite ? FaHeart : FaRegHeart;

  return (
    <div
      onClick={() => openViewPopup(reference)}
      className="mx-1 relative group cursor-pointer"
    >
      <img
        src={reference.image}
        alt={reference.title}
        className="hover:opacity-30 duration-200 select-none"
      />
      <div className="absolute sm:bottom-1 bottom-0 sm:right-2 right-0 opacity-0 group-hover:opacity-100 sm:text-[16px] md:text-[20px] xl:text-[22px] text-[12px] duration-200">
        {reference.hashtag
          .split(" ")
          .map((hastag) => `#${hastag}`)
          .join(" ")}
      </div>
      <div
        onClick={toggleFavorite}
        className={`
            cursor-pointer
            flex ${
              reference.favorite ? "sm:flex sm:opacity-100" : "sm:hidden"
            }  group-hover:flex 
            absolute sm:top-2 top-1 sm:right-2 right-1 sm:opacity-0 opacity-100 group-hover:opacity-100 duration-200 sm:w-[50px] w-[25px] sm:h-[50px] h-[25px] hover:bg-gray-300 hover:scale-110 bg-white rounded-full justify-center items-center`}
      >
        <LikeIcon className="text-background sm:text-[30px] text-[15px]" />
      </div>
    </div>
  );
};

export default ReferenceItem;
