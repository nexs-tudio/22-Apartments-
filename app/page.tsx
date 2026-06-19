import { Hero } from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf5]">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-start p-4">
        <Hero />
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
}
