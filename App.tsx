import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AppSection } from "./components/AppSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}