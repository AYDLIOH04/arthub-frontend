import BrushesItem from "@/components/brushes/Brush";
import { IBrush } from "@/models/IBrush";
import { notFound } from "next/navigation";

async function getBrush(id: number) {
  const res = await fetch(`http://localhost:5000/brushes/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function BrushDetails({ params }: any) {
  const brush: IBrush = await getBrush(params.id);

  return (
    <main>
      <h2>Brush Details</h2>
      <div>
        <BrushesItem brush={brush} />
      </div>
    </main>
  );
}
