import Header from "@/components/Header";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <section>
      <div className="relative min-h-screen dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] overflow-hidden ">
        <div className="max-w-7xl mx-auto p-5 ">
          <Header />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </section>
  );
}
