import { Hero } from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import { Properties } from "@/components/Properties";
import { ContactUs } from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4ecdf]">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-start bg-[#f4ecdf]">
        <Hero />
        <Properties />
        <AboutUs />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}
