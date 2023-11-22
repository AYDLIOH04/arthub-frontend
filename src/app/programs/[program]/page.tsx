import MainFooter from "@/components/UI/main-footer";
import Footer from "@/components/home/Footer";
import ProgramPage from "@/components/programs/program-page";
import { parseUrlString } from "@/utils/parse-url";

export async function generateMetadata({ params: { program } }: Props) {
  const title = parseUrlString(program);

  return {
    title: `ArtHub | ${title}`,
    description: `${title}`,
  };
}

type Props = {
  params: {
    program: string;
  };
};

const ProgramsPage = ({ params: { program } }: Props) => {
  const query = program.replace("%20", "").toLowerCase();
  const programName = parseUrlString(program);

  const data = {
    id: 1,
    description:
      "Профессиональное приложение от Adobe, предназначенное для создания векторных графических изображений. Оно широко используется художниками и дизайнерами для создания иллюстраций, логотипов и других визуальных элементов.",
    name: "Adobe Illustrator",
    link: "https://www.adobe.com/ru/products/illustrator.html",
    logo: "https://e7.pngegg.com/pngimages/255/188/png-clipart-adobe-systems-adobe-creative-cloud-illustrator-computer-software-illustration-illustrator-adobe-creative-suite.png",
    systems: ["Windows", "MacOS"],
    pluses: [
      "Мощный и гибкий набор инструментов для создания векторных рисунков.",
      "Поддержка неограниченного масштабирования без потери качества изображения.",
      "Интеграция с другими приложениями Adobe, такими как Photoshop, для более продвинутого редактирования и обработки изображений."
    ],
    minuses: [
      "Высокая стоимость программы, которая может быть недоступна для начинающих художников.",
      "Интерфейс и функциональность могут показаться сложными для новых пользователей.",
    ],
    examples: [
      "https://habrastorage.org/r/w1560/getpro/geektimes/post_images/a1c/c4c/d72/a1cc4cd72671b2c53dcea9d43a5dad9f.jpg",
      "https://habrastorage.org/r/w1560/getpro/geektimes/post_images/979/847/c6e/979847c6e328bf6b888a0c3e2b6b0da7.jpg",
      "https://habrastorage.org/r/w1560/getpro/geektimes/post_images/a1c/c4c/d72/a1cc4cd72671b2c53dcea9d43a5dad9f.jpg",
    ],
  };

  return (
    <>
      <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender">
        <ProgramPage program={data} />
      </div>
      <MainFooter/>
    </>
  );
};

export default ProgramsPage;
