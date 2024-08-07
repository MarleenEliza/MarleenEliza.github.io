import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import { DM_Sans } from "next/font/google";
import en from "@/dictionaries/en.json";
import GoogleAnalytics from "@/app/components/atoms/GoogleAnalytics";

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

export const metadata: Metadata = {
  title: en.title,
  description: en.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics></GoogleAnalytics>
      <body className={`${DMSans.className} h-screen flex flex-col bg-white`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
