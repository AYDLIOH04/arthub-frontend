import Footer from "@/app/(home)/(components)/Footer";
import StarsBackground from "@/app/(home)/(components)/stars-bg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-full sm:bg-[url('/home/bg-image.png')] bg-[url('/home/mobile-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden relative">
      <StarsBackground />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
