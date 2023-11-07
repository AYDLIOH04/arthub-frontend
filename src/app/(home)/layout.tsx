import Footer from "@/components/home/Footer";
import StarsBackground from "@/components/home/stars-bg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="home-layout">
      <div className="relative">
        <StarsBackground />
      </div>
      {children}
      <Footer />
    </main>
  );
}
