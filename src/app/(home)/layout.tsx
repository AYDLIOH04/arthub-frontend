import Footer from "@/components/home/Footer";
import Image from "next/image";
import bg from "public/home/bg-image.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <>
        <div className="absolute -z-10 w-full">
          <Image src={bg} alt="bg" className="h-full" loading="lazy" />
        </div>
        <main>
          {children}
          <Footer />
        </main>
      </>
    </div>
  );
}
