// app/layout.tsx
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header"; // Ajustamos el nombre a Navbar
import CarouselCategories from "@/components/Categories/CarouselCategories";
import BannerCards from "@/components/ui/BannerCards";
import Carousel from "@/components/ui/Carousel";
import CarouselProducts from "@/components/products/CarouselProducts";
import { categories } from "@/data/data";
import { CartProvider } from "@/components/cart/CartContext";

// Definimos la interfaz para las categorías (igual que en Navbar)
interface Category {
  name: string;
  subcategories: string[];
}

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const images: string[] = [
  "/donofrio.jpg",
  "/imagen.png",
  "/papel.png",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categoryNames: string[] = categories.map((category: Category) => category.name);

  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} antialiased`}>
        <CartProvider>
          <Header categories={categories} />
          <main className="lg:px-6 max-w-7xl mx-auto px-6 sm:px-6">
            <Carousel images={images} />
            <CarouselCategories title="Explora nuestras categorías" />
            <CarouselProducts title="OFERTA de tus lacteos favoritos" />
            <BannerCards />
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}