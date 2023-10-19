import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import "./globals.css";
import type { Metadata } from "next";
import { ReduxProvider } from "@/store/provider";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "ArtHub",
  description: "Digital design training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <ReduxProvider>
          <Header />
          <main className="main-layout">{children}</main>
          <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}
