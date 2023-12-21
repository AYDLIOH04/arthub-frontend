import SliderTitle from "../slider-title";
import BrushesSlider from "./brushes-slider";

const FavoriteBrushes = () => {
  return (
    <section className="mt-12">
      <SliderTitle>Избранные кисти</SliderTitle>
      <div className="mt-5 relative">
        <BrushesSlider />
      </div>
    </section>
  );
};

export default FavoriteBrushes;
