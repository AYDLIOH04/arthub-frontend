import SliderTitle from "../slider-title";
import ReferencesSlider from "./references-slider";

const FavoriteReferences = () => {
  return (
    <section className="mt-10">
      <SliderTitle>Избранные референсы</SliderTitle>
      <div className="mt-5 relative">
        <ReferencesSlider />
      </div>
    </section>
  );
};

export default FavoriteReferences;
