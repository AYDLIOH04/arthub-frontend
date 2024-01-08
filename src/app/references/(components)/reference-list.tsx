import { IReference } from "@/models";
import { useState } from "react";
import ReferencePopup from "./reference-popup";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AnimatePresence } from "framer-motion";
import ReferenceSlice from "./reference-slice";
import useObserver from "@/hooks/useObserver";

const ReferenceList = ({
  data,
  onLoadMore,
}: {
  data: IReference[];
  onLoadMore: any;
}) => {
  const [popupView, setPopupView] = useState(false);
  const [selectBrush, setSelectBrush] = useState<IReference>({} as IReference);
  const observerRef = useObserver(onLoadMore);

  const openViewPopup = (reference: IReference) => {
    document.body.style.overflow = "hidden";
    setSelectBrush(reference);
    setPopupView(true);
  };

  const MD = useMediaQuery("(max-width: 768px)");
  const LG = useMediaQuery("(max-width: 1024px)");
  const XL = useMediaQuery("(max-width: 1280px)");
  const GL = useMediaQuery("(max-width: 1920px)");

  const K = GL ? (XL ? (LG ? (MD ? 2 : 3) : 4) : 5) : 6;

  const slices: Array<IReference>[] = Array.from({ length: K }, () => []);

  data.forEach((r, index) => slices[index % K].push(r));

  return (
    <section>
      <div className="flex flex-wrap flex-row justify-center mt-8 box-border">
        {slices.map((slice, index) => (
          <ReferenceSlice
            key={index}
            slice={slice}
            openViewPopup={openViewPopup}
          />
        ))}
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
      <div ref={observerRef} />
    </section>
  );
};

export default ReferenceList;
