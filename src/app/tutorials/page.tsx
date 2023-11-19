import PrivatePageProvider from "@/components/PageProvider";
import Video from "@/components/tutorials/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Tutorials",
  description: "Our Tutorials",
};

const TutorialsPage = () => {
  return (
    <PrivatePageProvider>
      <main className="text-center mt-[120px]">
        <h1 className="text-2xl">Tutorials Page</h1>
        <Video />
      </main>
    </PrivatePageProvider>
  );
};

export default TutorialsPage;
