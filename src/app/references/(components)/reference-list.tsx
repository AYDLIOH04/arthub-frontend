import { IReference } from "@/models";
import { useState } from "react";
import ReferenceItem from "./reference-item";
import ReferencePopup from "./reference-popup";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AnimatePresence } from "framer-motion";


const ReferenceList = ({
  data,
  count,
}: {
  data: IReference[];
  count: number;
}) => {
  const [popupView, setPopupView] = useState(false);
  const [selectBrush, setSelectBrush] = useState<IReference>({} as IReference);
  const matches = useMediaQuery("(max-width: 768px)");

  const openViewPopup = (reference: IReference) => {
    document.body.style.overflow = "hidden";
    setSelectBrush(reference);
    setPopupView(true);
  };

  const sliceCount = count / (matches ? 2 : 3);
  const firstData = data.slice(0, sliceCount);
  const secondData = data.slice(sliceCount, sliceCount * 2);
  const thirdData = !matches
    ? data.slice(sliceCount * 2, sliceCount * 3)
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
            />
          ))}
        </div>
        <div className="flex flex-col md:w-1/3 w-1/2 md:gap-2 gap-1">
          {secondData.map((reference) => (
            <ReferenceItem
              key={reference.id}
              reference={reference}
              openViewPopup={openViewPopup}
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
