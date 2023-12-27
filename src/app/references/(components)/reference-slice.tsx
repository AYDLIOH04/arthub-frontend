import { IReference } from "@/models";
import ReferenceItem from "./reference-item";

const ReferenceSlice = ({
  slice,
  openViewPopup,
}: {
  slice: IReference[];
  openViewPopup: any;
}) => {
  return (
    <div className="flex flex-col gl:w-1/6 xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 md:gap-2 gap-1">
      {slice.map((reference) => (
        <ReferenceItem
          key={reference.id}
          reference={reference}
          openViewPopup={openViewPopup}
        />
      ))}
    </div>
  );
};

export default ReferenceSlice;
