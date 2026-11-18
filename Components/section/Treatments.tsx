import Image from "next/image";
import Link from "next/link";
import type { ReactNode, SVGProps } from "react";

/* ----------------------------- Ícones (SVG) ----------------------------- */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function ToothIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7.5 3C5 3 3.3 4.9 3.3 7.4c0 2 .8 3.4 1.4 5 .7 1.9.6 4.4 1.4 6.9.3 1 1.4 1.5 2 .6.9-1.4 1-3.9 2.2-3.9h.1c1.2 0 1.3 2.5 2.2 3.9.6.9 1.7.4 2-.6.8-2.5.7-5 1.4-6.9.6-1.6 1.4-3 1.4-5C20.7 4.9 19 3 16.5 3c-1.7 0-2.6.9-4.5.9S9.2 3 7.5 3Z" />
    </svg>
  );
}

function ImplantIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3.5h10c.8 0 1.3.7 1.1 1.5-.4 1.6-1.4 2.5-2.6 2.5h-7C7.3 7.5 6.3 6.6 5.9 5 5.7 4.2 6.2 3.5 7 3.5Z" />
      <path d="M9 9.5h6M9 12h6M9.5 14.5h5M10 17h4" />
      <path d="M10.5 19.5 12 21l1.5-1.5" />
    </svg>
  );
}

function BracesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="8" width="5.5" height="8" rx="1.8" />
      <rect x="9.25" y="8" width="5.5" height="8" rx="1.8" />
      <rect x="16.5" y="8" width="5.5" height="8" rx="1.8" />
      <path d="M2 12h20M12 10v4" />
    </svg>
  );
}

function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.1 8 7.5 9.5 4.4-1.5 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m8.8 12 2.4 2.4 4.2-4.4" />
    </svg>
  );
}

function MonitorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M15.5 4.8a3.2 3.2 0 0 1 0 6.3M17.5 14.8c2.1.7 3.5 2.5 3.5 5.2" />
    </svg>
  );
}

function LotusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4c2 2.2 3 4.5 3 7s-1 4.8-3 7c-2-2.2-3-4.5-3-7s1-4.8 3-7Z" />
      <path d="M9.2 9.5C6.5 9 4 9.8 2.5 11.5c.8 3.5 3.8 6 7.5 6.5M14.8 9.5c2.7-.5 5.2.3 6.7 2-.8 3.5-3.8 6-7.5 6.5" />
      <path d="M7 19.5c1.6.8 3.2 1 5 1s3.4-.2 5-1" />
    </svg>
  );
}

function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4M8 14h2M12 14h2M16 14h.01" />
    </svg>
  );
}

function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* -------------------------------- Dados -------------------------------- */

const treatments: {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  icon: ReactNode;
}[] = [
  {
    title: "Odontologia Estética",
    description: "Realce a beleza do seu sorriso com naturalidade.",
    href: "",
    image: "/images/tratamento-estetica.jpg",
    alt: "Sorriso com dentes claros e alinhados",
    icon: <ToothIcon className="size-9" />,
  },
  {
    title: "Implantes Dentários",
    description: "Recupere a função e a estética do seu sorriso.",
    href: "",
    image: "/images/tratamento-implantes.jpg",
    alt: "Modelo de implante dentário com coroa",
    icon: <ImplantIcon className="size-9" />,
  },
  {
    title: "Ortodontia",
    description: "Alinhe seu sorriso com discrição e conforto.",
    href: "",
    image: "/images/tratamento-ortodontia.jpg",
    alt: "Alinhador transparente segurado entre os dedos",
    icon: <BracesIcon className="size-9" />,
  },
  {
    title: "Prevenção",
    description: "Cuidados que fazem a diferença a longo prazo.",
    href: "",
    image: "/images/tratamento-prevencao.jpg",
    alt: "Instrumentais odontológicos sobre uma bandeja",
    icon: <ShieldCheckIcon className="size-9" />,
  },
];

const differentials: { label: string; icon: ReactNode }[] = [
  { label: "Equipe especializada", icon: <ToothIcon className="size-10" /> },
  { label: "Tecnologia de ponta", icon: <MonitorIcon className="size-10" /> },
  { label: "Atendimento humanizado", icon: <UsersIcon className="size-10" /> },
  { label: "Ambiente acolhedor", icon: <LotusIcon className="size-10" /> },
];



export default function TratamentosPage() {
  return (
    <div id="product" data-header-theme="light" className="overflow-x-clip bg-gradient-to-b from-white via-[#f6f9fc] to-white text-[#0c1f33]  ">
      
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full lg:w-[62%] rounded-t-[32px] lg:rounded-t-[48px]">
          <Image
            src="/images/dente-hero.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover opacity-40 lg:opacity-100 rounded-t-[32px] lg:rounded-t-[48px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent lg:via-white/30" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f6f9fc] to-transparent" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 pb-16 pt-14 lg:grid-cols-[1.4fr_1fr] lg:pb-20 lg:pt-16">
          <div>
            <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.25em] text-[#0c1f33]">
              <span className="h-0.5 w-14 bg-[#0a6fa8]" />
              Tratamentos
            </p>

            <h1 className="font-heading mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.2rem]">
              Soluções completas
              <br className="hidden lg:block" /> para um{" "}
              <span className="text-[#12b5e5]">sorriso saudável</span>
              <br className="hidden lg:block" /> e ainda mais confiante.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#2f4256]">
              Oferecemos tratamentos modernos e personalizados, com foco na sua
              saúde, estética e bem-estar.
            </p>

            <Link
              href="#tratamentos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0c1f33] px-7 py-4 text-sm font-medium text-[#00b8f1] shadow-lg shadow-[#0c1f33]/20 transition hover:bg-[#13304d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12b5e5]"
            >
              Conheça nossos tratamentos
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------- CARDS DE TRATAMENTO ------------------------- */}
      <section
        id="tratamentos" data-header-theme="light"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-14"
        aria-label="Nossos tratamentos"
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((t) => (
            <li key={t.title}>
              <Link
                href={t.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_-10px_rgba(12,31,51,0.18)] ring-1 ring-[#0c1f33]/5 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(12,31,51,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12b5e5]"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative -mt-4 flex flex-1 flex-col rounded-t-3xl bg-white px-6 pb-6 pt-6">
                  <span className="text-[#12b5e5]">{t.icon}</span>
                  <h2 className="font-heading mt-4 text-lg font-semibold">
                    {t.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a5d70]">
                    {t.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#0a6fa8]">
                    Saiba mais
                    <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------- POR QUE ESCOLHER ------------------------- */}
      <section data-header-theme="light" className="mx-auto max-w-[78rem] px-4 pb-12 sm:px-6">
        <div className="grid items-center gap-10 rounded-[2rem] bg-[#0c1f33] px-8 py-10 text-white shadow-xl shadow-[#0c1f33]/20 lg:grid-cols-[1.1fr_1.4fr] lg:px-12">
          <div>
            <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/90">
              <span className="h-0.5 w-12 bg-[#12b5e5]" />
              Por que escolher a Idea Odont?
            </p>
            <h2 className="font-heading mt-4 text-3xl font-semibold leading-tight">
              Tratamento de <span className="text-[#12b5e5]">excelência</span>{" "}
              em todas as fases da vida.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
              Da prevenção ao tratamento avançado, unimos tecnologia,
              experiência e um atendimento humanizado.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
            {differentials.map((d, i) => (
              <li
                key={d.label}
                className={`flex flex-col items-center gap-3 px-3 text-center text-sm font-semibold leading-snug sm:border-l sm:border-white/25 ${
                  i % 2 === 0 ? "" : "border-l border-white/25"
                }`}
              >
                <span className="text-[#12b5e5]">{d.icon}</span>
                {d.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------ CTA FINAL ------------------------------ */}
      <section data-header-theme="light" className="mx-auto max-w-[78rem] px-4 pb-16 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#0c1f33] text-white shadow-xl shadow-[#0c1f33]/20">
          <Image
            src="/images/tratamentos-cta.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 78rem, 100vw"
            className="-z-10 object-cover object-[75%_30%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0c1f33] via-[#0c1f33]/90 to-[#0c1f33]/10" />

          <div className="flex flex-col items-start gap-6 px-8 py-12 sm:px-12 md:flex-row md:items-center md:py-14">
            <ToothIcon className="size-20 shrink-0 text-[#00b8f1]" strokeWidth={1.2} />
            <span className="hidden h-16 w-px bg-[#00b8f1]/60 md:block" />

            <div className="md:max-w-md">
              <h2 className="font-heading text-2xl font-semibold">
                Cuide do <span className="text-[#00b8f1]">seu sorriso</span> com
                quem entende.
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Agende sua consulta e descubra o cuidado da Idea Odont.
              </p>
            </div>

            <Link
              href="/agendar"
              className="inline-flex items-center gap-3 rounded-full bg-[#0c1f33] px-6 py-3.5 text-sm font-semibold text-[#00b8f1] shadow-lg shadow-black/20 transition hover:bg-[#ffd9a3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:ml-auto"
            >
              <CalendarIcon className="size-5" />
              Agendar Consulta
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}