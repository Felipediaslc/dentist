import Image from "next/image";
import Link from "next/link";

function ToothMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 42 48"
      fill="none"
      className="inline-block h-[0.7em] w-[0.62em] shrink-0 overflow-visible align-[-0.035em]"
    >
      <path
        d="M8.1 4.8C3.7 7.2 2.5 13.1 4.3 19.5c1.1 4 3.2 7.4 4.4 11.3 1 3.1 1.2 10.1 5.1 10.1 3.1 0 3.4-9.5 7.2-9.5s4.1 9.5 7.2 9.5c3.9 0 4.1-7 5.1-10.1 1.2-3.9 3.3-7.3 4.4-11.3 1.8-6.4.6-12.3-3.8-14.7C29.6 2.2 25.8 5 21 5S12.4 2.2 8.1 4.8Z"
        stroke="currentColor"
        strokeWidth="4.0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" data-header-theme="dark"
      aria-labelledby="hero-title"
      className="relative isolate h-[calc(100svh-16px)] min-h-[560px] max-h-[960px] overflow-hidden rounded-[24px] bg-[#17201f] sm:h-[calc(100svh-32px)] sm:min-h-[680px] sm:rounded-[36px] lg:rounded-[40px]"
    >
      <Image
        src="/images/image-HERO.jpg"
        alt="Ambiente odontológico da Idea Odontologia Integrada"
        fill
        preload
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[68%_64%] sm:object-[68%_center]"
      />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,17,19,0.82)_0%,rgba(8,17,19,0.66)_32%,rgba(8,17,19,0.34)_62%,rgba(8,17,19,0.10)_100%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(5,12,13,0.42)_0%,rgba(5,12,13,0.08)_45%,transparent_75%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,17,19,0.20)_0%,transparent_28%)]" />

      <div className="absolute inset-0 -z-10 bg-[rgba(8,17,19,0.28)] sm:hidden" />

      <div className="mx-auto flex min-h-full w-full max-w-[1600px] items-center px-6 pb-16 pt-[4.5rem] sm:px-12 sm:py-32 lg:px-20 xl:px-24">
        <div className="w-full max-w-[1120px] -translate-y-3 text-white sm:translate-y-0">
          <p className="mb-5 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.45)] sm:mb-8 sm:text-xs sm:tracking-[0.22em] sm:[text-shadow:none] lg:text-sm">
            Seu sorriso,
            <span className="text-sky-300 sm:text-sky-400">
              {" "}nossa prioridade
            </span>
          </p>

          <h1
            id="hero-title"
            className="max-w-[1120px] text-balance font-heading text-[clamp(2.4rem,7.6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[clamp(3.25rem,5vw,5.25rem)] sm:leading-[1]"
          >
            <span className="block">
              Idea{" "}
              <span className="font-normal text-sky-400 sm:font-light">
                Odont
              </span>
            </span>

            <span className="mt-1 flex flex-wrap items-center gap-x-[0.2em] gap-y-1">
              <span>Odontologia</span>
              <span className="inline-flex items-center gap-[0.2em] whitespace-nowrap">
                <ToothMark />
                <span>Integrada</span>
              </span>
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-pretty text-[13px] font-normal leading-[1.8] tracking-normal text-white/90 sm:mt-8 sm:text-base lg:text-lg lg:leading-[1.8]">
            <span className="sm:block">
              Experimente um cuidado odontológico pensado para você.
            </span>{" "}
            <span className="sm:block">
              Um sorriso mais saudável começa com conforto,{" "}
              <span className="sm:block">
                confiança e uma equipe que se importa.
              </span>
            </span>
          </p>

          <Link
            href="#appointment"
            className="group mt-6 inline-flex min-h-[56px] w-full max-w-[340px] items-center justify-center gap-5 rounded-full bg-white px-8 text-[14px] font-semibold text-[#17201f] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f3faff] hover:shadow-[0_14px_36px_rgba(0,0,0,0.20)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 motion-reduce:transition-none sm:mt-10 sm:min-h-[60px] sm:w-auto sm:min-w-[250px] sm:text-[15px]"
          >
            Agendar consulta

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}