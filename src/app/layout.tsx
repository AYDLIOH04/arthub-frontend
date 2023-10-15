import Header from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { ReduxProvider } from "@/store/provider";

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
        </ReduxProvider>
      </body>
    </html>
  );
}
