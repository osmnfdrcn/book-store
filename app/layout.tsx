import Navbar from "@/components/layout/navbar";
import Search from "@/components/modules/search";
import { StateProvider } from "@/providers/StateProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <StateProvider>
          <ToasterProvider />
          <Search />
          <Navbar />
          <div className="pb-20 pt-[120px]">{children}</div>
        </StateProvider>
      </body>
    </html>
  );
}
