import { ComponentProps } from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: ComponentProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
