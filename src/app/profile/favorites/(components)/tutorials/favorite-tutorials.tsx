import SliderTitle from "../slider-title";
import TutorialsSlider from "./tutorials-slider";

const FavoriteTutorials = () => {
  return (
    <section className="mt-12">
      <SliderTitle>Избранные туториалы</SliderTitle>
      <div className="mt-5 relative">
        <TutorialsSlider/>
      </div>
    </section>
  );
};

export default FavoriteTutorials;
