import SliderTitle from "../slider-title";
import ProgramsSlider from "./programs-slider";

const FavoritePrograms = () => {
  return (
    <section className="mt-10">
      <SliderTitle>Избранные программы</SliderTitle>
      <div className="mt-5 relative">
        <ProgramsSlider />
      </div>
    </section>
  );
};

export default FavoritePrograms;
