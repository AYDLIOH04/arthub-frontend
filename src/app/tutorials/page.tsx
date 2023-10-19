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
      <h1>Tutorials Page</h1>
      <Video/>
    </PrivatePageProvider>
  );
};

export default TutorialsPage;
