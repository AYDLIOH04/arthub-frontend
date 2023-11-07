import Footer from "@/components/home/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="home-layout">
      <div className="home-inner">
        {children}
        <Footer />
      </div>
    </main>
  );
}
