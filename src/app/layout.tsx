import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verde Mimarlık | Sürdürülebilir Mimarlık & Tasarım",
  description:
    "Verde Mimarlık, sürdürülebilir mimarlık, iç mekan tasarımı, peyzaj ve çevre dostu yapı danışmanlığı hizmetleri sunmaktadır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-verde-bg text-verde-text">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
