import { IReference } from "@/models";

const ReferenceSlide = ({
  reference,
  addToFavorite,
}: {
  reference: IReference;
  addToFavorite: any;
}) => {
  return <div>{reference.title}</div>;
};

export default ReferenceSlide;