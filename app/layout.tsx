import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/ui/navbar";
import ToasterProvider from "@/app/providers/ToasterProvider";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Store",
  description: "Portfolio project",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <Navbar />
        <div className="pb-20 pt-[80px]">{children}</div>
      </body>
    </html>
  );
}
