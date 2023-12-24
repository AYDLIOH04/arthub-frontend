import ReferencesNotFound from "@/components/UI/not-found/references-notfound";
import { IReference } from "@/models";
import getCookieData from "@/utils/get-cookie";
import { useState } from "react";
import ReferenceItem from "./reference-item";
import {
  useAddToFavoriteMutation,
  useGetReferencesQuery,
} from "@/store/features/references/referencesApi";
import ReferencePopup from "./reference-popup";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AnimatePresence } from "framer-motion";
import ReferencesFetchError from "@/components/UI/error/references-error";
import ReferencesSkeleton from "@/components/UI/skeletons/references-skeleton";

const ReferenceList = ({ select }: { select: string }) => {
  const [popupView, setPopupView] = useState(false);
  const [selectBrush, setSelectBrush] = useState<IReference>({} as IReference);
  const matches = useMediaQuery("(max-width: 768px)");

  const openViewPopup = (reference: IReference) => {
    document.body.style.overflow = "hidden";
    setSelectBrush(reference);
    setPopupView(true);
  };

  const [addToFavoriteReference] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error } = useGetReferencesQuery({
    tag: select,
    like: getCookieData("auth-data").token ? true : false,
  });

  if (isLoading) return <ReferencesSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <ReferencesNotFound />;
    }
    return <ReferencesFetchError />;
  }

  if (!data || !data?.response.length) return <ReferencesNotFound />;

  const sliceCount = data.totalCount / (matches ? 2 : 3);
  const firstData = data?.response.slice(0, sliceCount);
  const secondData = data?.response.slice(sliceCount, sliceCount * 2);
  const thirdData = !matches
    ? data?.response.slice(sliceCount * 2, sliceCount * 3)
    : [];

  return (
    <section>
      <div className="flex flex-wrap flex-row justify-center mt-8 box-border">
        <div className="flex flex-col md:w-1/3 w-1/2 md:gap-2 gap-1">
          {firstData.map((reference) => (
            <ReferenceItem
              key={reference.id}
              reference={reference}
              openViewPopup={openViewPopup}
              addToFavorite={addToFavoriteReference}
            />
          ))}
        </div>
        <div className="flex flex-col md:w-1/3 w-1/2 md:gap-2 gap-1">
          {secondData.map((reference) => (
            <ReferenceItem
              key={reference.id}
              reference={reference}
              openViewPopup={openViewPopup}
              addToFavorite={addToFavoriteReference}
            />
          ))}
        </div>
        {!matches && (
          <div className="flex flex-col w-1/3 md:gap-2 gap-1">
            {thirdData.map((reference) => (
              <ReferenceItem
                key={reference.id}
                reference={reference}
                openViewPopup={openViewPopup}
                addToFavorite={addToFavoriteReference}
              />
            ))}
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        {popupView && (
          <ReferencePopup
            reference={selectBrush}
            popupView={popupView}
            setPopupView={setPopupView}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReferenceList;
