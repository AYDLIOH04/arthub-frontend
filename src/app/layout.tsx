import Header from "@/components/header/Header";
import Footer from "@/app/(home)/Footer";

import "./globals.css";
import type { Metadata } from "next";
import { ReduxProvider } from "@/store/provider";
import "react-toastify/dist/ReactToastify.css";
export const metadata: Metadata = {
  title: "ArtHub",
  description: "Digital design training",
  icons: {
    icon: "icon.svg",
  },
};

import DamioneFont from "next/font/local";
import BlenderProFont from "next/font/local";

const damioneFont = DamioneFont({
  weight: "500",
  src: "../fonts/damione/Damione.ttf",
  variable: "--damione-font",
});

const blenderFont = BlenderProFont({
  src: [
    {
      path: "../fonts/blender-pro/BlenderPro-Thin.ttf",
      weight: "300",
    },
    {
      path: "../fonts/blender-pro/BlenderPro-Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/blender-pro/BlenderPro-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--blender-font",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body
        className={`${damioneFont.variable} ${blenderFont.variable} bg-background text-color`}
      >
        <ReduxProvider>
          <Header />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
