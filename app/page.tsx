import { Hero } from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4ecdf]">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-start bg-[#f4ecdf]">
        <Hero />
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
}
