import Image from "next/image";
import type { SVGProps } from "react";

/* ----------------------------- Ícones SVG ----------------------------- */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
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



const treatments = [
  {
    title: "Prevenção e Check-up",
    description:
      "Avaliação detalhada e cuidados que ajudam a prevenir problemas e preservar sua saúde bucal.",
    image: "/images/tratamento-prevencao.jpg",
    alt: "Instrumentais odontológicos sobre uma bandeja",
    icon: ShieldCheckIcon,
  },
  {
    title: "Odontologia Estética",
    description:
      "Realce a beleza do seu sorriso com naturalidade.",
    image: "/images/tratamento-estetica.jpg",
    alt: "Sorriso com dentes claros e alinhados",
    icon: ToothIcon,
  },
  {
    title: "Implantes Dentários",
    description:
      "Recupere a função e a estética do seu sorriso com segurança e naturalidade.",
    image: "/images/tratamento-implantes.jpg",
    alt: "Modelo de implante dentário com coroa",
    icon: ImplantIcon,
  },
  {
    title: "Ortodontia",
    description:
      "Alinhe seu sorriso com discrição e conforto.",
    image: "/images/tratamento-ortodontia.jpg",
    alt: "Alinhador transparente segurado entre os dedos",
    icon: BracesIcon,
  },
];



export default function TratamentosPage() {
  return (
    <main
      id="tratamentos"
      data-header-theme="light"
      className="overflow-x-clip bg-gradient-to-b from-white via-[#f6f9fc] to-white text-[#0c1f33]"
    >
      <section
        aria-labelledby="tratamentos-title"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
      >
        <div className="mb-10 text-center sm:mb-12">
          <p className="flex items-center justify-center gap-4 text-xs font-medium uppercase tracking-[0.25em] text-[#0c1f33]">
            <span className="h-0.5 w-10 bg-[#0a6fa8]" />
            Idea Odont
            <span className="h-0.5 w-10 bg-[#0a6fa8]" />
          </p>

          <h1
            id="tratamentos-title"
            className="font-heading mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Nossos{" "}
            <span className="text-[#12b5e5]">Tratamentos</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#4a5d70] sm:text-base">
            Oferecemos cuidados odontológicos modernos e personalizados,
            com foco na sua saúde, estética e bem-estar.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => {
            const Icon = treatment.icon;

            return (
              <li key={treatment.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_-10px_rgba(12,31,51,0.18)] ring-1 ring-[#0c1f33]/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(12,31,51,0.28)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={treatment.image}
                      alt={treatment.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>

                  <div className="relative -mt-4 flex flex-1 flex-col rounded-t-3xl bg-white px-5 pb-6 pt-6">
                    <span className="text-[#12b5e5]">
                      <Icon className="size-9" />
                    </span>

                    <h2 className="font-heading mt-4 text-lg font-semibold">
                      {treatment.title}
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-[#4a5d70]">
                      {treatment.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}