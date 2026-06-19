import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import Workflow from "@/components/Workflow";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Platforms />
      <Workflow />
      <FeaturesGrid />
      <Footer />
    </main>
  );
}
