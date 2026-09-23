import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import CarsSection from "@/components/CarsSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050b11]">

      <Header />

      <main>
        <Hero />

        <NewsSection />

        <CarsSection />

        <KnowledgeSection />
      </main>

      <Footer />

    </div>
  );
}