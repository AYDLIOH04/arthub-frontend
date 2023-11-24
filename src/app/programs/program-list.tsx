import ProgramItem from "./program-item";

const data = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fugit non et. Tenetur officia soluta obcaecati consequuntur fuga amet ducimus similique explicabo nihil. Illo cum laborum reiciendis officiis, ullam tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab consequatur provident laborum accusamus quidem non! Sed architecto, pariatur totam odit ipsum, eveniet quos hic tenetur quaerat, reiciendis quasi. Assumenda, asperiores.",
    name: "Adobe Illustrator",
    link: "https://blablabla.com",
    logo: "Adobe Illustrator",
    systems: ["Windows", "MacOS"],
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fugit non et. Tenetur officia soluta obcaecati consequuntur fuga amet ducimus similique explicabo nihil. Illo cum laborum reiciendis officiis, ullam tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab consequatur provident laborum accusamus quidem non! Sed architecto, pariatur totam odit ipsum, eveniet quos hic tenetur quaerat, reiciendis quasi. Assumenda, asperiores.",
    name: "Photoshop",
    link: "https://blablabla.com",
    logo: "Photoshop",
    systems: ["Windows", "Linux", 'MacOS'],
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fugit non et. Tenetur officia soluta obcaecati consequuntur fuga amet ducimus similique explicabo nihil. Illo cum laborum reiciendis officiis, ullam tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab consequatur provident laborum accusamus quidem non! Sed architecto, pariatur totam odit ipsum, eveniet quos hic tenetur quaerat, reiciendis quasi. Assumenda, asperiores.",
    name: "Krita",
    link: "https://blablabla.com",
    logo: "Krita",
    systems: ["Windows"],
  },
  {
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fugit non et. Tenetur officia soluta obcaecati consequuntur fuga amet ducimus similique explicabo nihil. Illo cum laborum reiciendis officiis, ullam tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab consequatur provident laborum accusamus quidem non! Sed architecto, pariatur totam odit ipsum, eveniet quos hic tenetur quaerat, reiciendis quasi. Assumenda, asperiores.",
    name: "Ink",
    link: "https://blablabla.com",
    logo: "Ink",
    systems: ["Windows", "Linux"],
  },
];

const ProgramsList = () => {
  return (
    <ul className="space-y-4">
      {data.map((program) => (
        <ProgramItem key={program.id} program={program} />
      ))}
    </ul>
  );
};

export default ProgramsList;
