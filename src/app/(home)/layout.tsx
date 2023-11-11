import Footer from "@/components/home/Footer";
import StarsBackground from "@/components/home/stars-bg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-full sm:bg-[url('/home/bg-image.jpg')] bg-[url('/home/mobile-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden relative">
      <StarsBackground />
      {children}
      <Footer />
    </main>
  );
}
