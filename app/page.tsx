import Hero from "@/Components/section/Hero";
import About from "@/Components/section/About";
import Treatments from "@/Components/section/Treatments";
import Service from "@/Components/section/Service";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1920px]">
      <div
        id="inicio"
        data-nav-section="inicio"
        data-header-theme="dark"
      >
        <Hero />
      </div>

      <div
        id="about"
        data-nav-section="about"
        data-header-theme="dark"
      >
        <About />
      </div>

      <div
        id="tratamentos"
        data-nav-section="tratamentos"
        data-header-theme="light"
      >
        <Treatments />
      </div>

      <div
        id="services"
        data-nav-section="services"
        data-header-theme="dark"
      >
        <Service />
      </div>
    </main>
  );
}