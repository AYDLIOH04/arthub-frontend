"use client";

import TutorialSkeleton from "@/components/UI/skeletons/tutorial-skeleton";
import { useGetTutorialQuery } from "@/store/features/tutorials/tutorialsApi";
import { notFound } from "next/navigation";

const TutorialPage = ({ tutorialId }: { tutorialId: string }) => {
  const {
    data: tutorial,
    isLoading,
    isError,
    error,
  } = useGetTutorialQuery({ id: tutorialId });

  if (isLoading) return <TutorialSkeleton />;

  if (isError || !tutorial) {
    notFound();
  }

  return <div>Tutorial {tutorial.title}</div>;
};

export default TutorialPage;
