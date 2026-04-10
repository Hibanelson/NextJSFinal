import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { FavoritesProvider } from "@/context/FavoritesContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CartoonFlix – Stream Your Favorite Animated Movies",
  description:
    "Discover and browse the best cartoon and animated movies. Family-friendly entertainment with a stunning dark-themed streaming experience.",
  keywords: ["cartoon movies", "animated movies", "family movies", "streaming", "animation"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">
        <FavoritesProvider>
          <Header />
          <main className="pb-20 md:pb-0">{children}</main>
          <BottomNav />
        </FavoritesProvider>
      </body>
    </html>
  );
}
