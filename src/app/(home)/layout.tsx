import Footer from "@/components/home/Footer";
import StarsBackground from "@/components/home/stars-bg";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="home-layout">
      <StarsBackground />
      {children}
      <Footer />
    </main>
  );
}
