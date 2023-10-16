"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCreateBrushMutation } from "@/store/api/brushesApi";

export default function CreateForm() {
  const router = useRouter();
  const [createBrush, { isError }] = useCreateBrushMutation();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    createBrush({ title, link });
    if (!isError) {
      router.refresh();
      router.push("/brushes");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <button>Submit</button>
    </form>
  );
}
