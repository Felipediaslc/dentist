import Hero from "@/Components/section/Hero";
import About from "@/Components/section/About";
import Treatments from "@/Components/section/Treatments";

import Agendamento from "@/Components/section/Agendamento";

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
        id="agendamentos"
        data-nav-section="agendamentos"
        data-header-theme="dark"
      >
        <Agendamento />
      </div>
    </main>
  );
}