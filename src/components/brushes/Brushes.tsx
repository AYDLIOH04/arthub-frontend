"use client";

import { useGetBrushesQuery } from "@/store/features/brushes/brushesApi";
import BrushesSkeleton from "../UI/skeletons/brushes-skeletons";
import Brush from "./Brush";
import { IBrush } from "@/models/IBrush";

const brushFakeData: IBrush[] = [
  {
    id: 1,
    image: "https://pngimg.com/uploads/brush/brush_PNG7365.png",
    link: "Ссылка на кисть 1",
    title: "Первая кисть",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat expedita nemo eum repellat quia exercitationem, soluta praesentium quos fugiat suscipit iusto voluptatum distinctio facilis, necessitatibus quis, aspernatur animi voluptatem rerum!",
    programm: "Krita",
  },
  {
    id: 2,
    image: "https://ugra.ru/pic-3.bp.blogspot.com/-3U3iqI6R80A/UfubFSfhldI/AAAAAAAAB4w/GhAYBbiTJ8o/s1600/artistic%2Bbrush.jpg",
    link: "Ссылка на кисть 2",
    title: "Вторая кисть",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis eaque tempore nesciunt tempora! Vitae beatae enim voluptates nemo assumenda. Unde ratione harum ducimus! Obcaecati distinctio amet labore vero? Dolor?",
    programm: "Inkscape",
  },
  {
    id: 3,
    image: "https://pngimg.com/uploads/brush/brush_PNG7365.png",
    link: "Ссылка на кисть 3",
    title: "Третья кисть",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur aliquam omnis sequi ipsum exercitationem eum incidunt quas? Doloremque accusamus ipsa, maiores molestias dolore facilis autem? In, debitis? Nisi, incidunt.",
    programm: "Photoshop",
  },
  {
    id: 4,
    image: "https://pngimg.com/uploads/brush/brush_PNG7365.png",
    link: "Ссылка на кисть 4",
    title: "Четвертая кисть",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa iusto modi, id quos explicabo aliquid beatae itaque nihil minima. Blanditiis doloremque dolorum rem impedit ipsam officia quidem laudantium quod?",
    programm: "Ai",
  },
  {
    id: 5,
    image: "https://pngimg.com/uploads/brush/brush_PNG7365.png",
    link: "Ссылка на кисть 1",
    title: "Пятая кисть",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis neque est quasi sit eos deleniti ducimus accusamus maiores rerum, sed laudantium! Blanditiis vitae et quas praesentium quo laudantium optio enim.",
    programm: "Photoshop",
  },
  {
    id: 6,
    image: "https://pngimg.com/uploads/brush/brush_PNG7365.png",
    link: "Ссылка на кисть 2",
    title: "Шестая кисть",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptatum dolores quaerat quisquam, incidunt, odit quod repellendus atque in totam porro! Blanditiis error aliquid at fugit expedita maxime quaerat adipisci?",
    programm: "Figma",
  },
  {
    id: 7,
    image: "https://pngimg.com/uploads/brush/brush_PNG7365.png",
    link: "Ссылка на кисть 3",
    title: "Седьмая кисть",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam, omnis itaque reprehenderit cumque perspiciatis! Ipsum quaerat doloremque repellendus dolorum debitis sunt ad maiores quod dolores officiis! Rerum, nostrum similique!",
    programm: "Krita",
  },
  {
    id: 8,
    image: "https://pngimg.com/uploads/brush/brush_PNG7365.png",
    link: "Ссылка на кисть 4",
    title: "Восьмая кисть",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam natus asperiores facilis iste rem iusto neque atque sequi? Magni ullam unde nihil. Consequuntur ipsam ullam aut, pariatur modi sapiente!",
    programm: "Figma",
  },
  {
    id: 9,
    image: "https://pngimg.com/uploads/brush/brush_PNG7365.png",
    link: "Ссылка на кисть 3",
    title: "Девятая кисть",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam, omnis itaque reprehenderit cumque perspiciatis! Ipsum quaerat doloremque repellendus dolorum debitis sunt ad maiores quod dolores officiis! Rerum, nostrum similique!",
    programm: "Krita",
  },
  {
    id: 10,
    image: "https://pngimg.com/uploads/brush/brush_PNG7365.png",
    link: "Ссылка на кисть 4",
    title: "Десятая кисть",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam natus asperiores facilis iste rem iusto neque atque sequi? Magni ullam unde nihil. Consequuntur ipsam ullam aut, pariatur modi sapiente!",
    programm: "Figma",
  },
];

const Brushes = () => {
  const { data: brushes, isLoading } = useGetBrushesQuery();

  if (isLoading) return <BrushesSkeleton />;

  return (
    <div className="flex flex-wrap flex-row justify-center gap-8 mt-10">
      {brushFakeData?.map((brush, index) => (
        <Brush key={index} brush={brush} />
      ))}
    </div>
  );
};

export default Brushes;
