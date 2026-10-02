import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050b11]">
      <Header />

      <main>
        <Hero />

        <NewsSection />

        <KnowledgeSection />
      </main>

      <Footer />
    </div>
  );
}