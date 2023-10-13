import Header from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Header />
        <main className="main-layout">{children}</main>
      </body>
    </html>
  );
}
