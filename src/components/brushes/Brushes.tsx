import { IBrush } from "@/models/IBrush";
import BrushesItem from "./Brush";

async function getBrushes() {
  const res = await fetch("http://localhost:7000/brushes", {
    next: {
      revalidate: 5
    }});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function BrushesList() {
  const brushes: IBrush[] = await getBrushes();
  return (
    <div>
      <ul>
        {brushes.map((brush) => (
          <li key={brush.title}>
            <BrushesItem brush={brush} />
          </li>
        ))}
      </ul>
    </div>
  );
}
