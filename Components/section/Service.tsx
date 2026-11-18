import Image from "next/image";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: "tooth" | "implant" | "braces" | "aesthetic";
};

const services: Service[] = [
  {
    title: "Check-up Completo",
    description: "Avaliação detalhada para prevenir problemas.",
    href: "/servicos/check-up",
    icon: "tooth",
  },
  {
    title: "Implantes Dentários",
    description: "Recupere seu sorriso com segurança e naturalidade.",
    href: "/servicos/implantes",
    icon: "implant",
  },
  {
    title: "Ortodontia",
    description: "Alinhe seu sorriso com discrição e conforto.",
    href: "/servicos/ortodontia",
    icon: "braces",
  },
  {
    title: "Estética Dental",
    description: "Realce a beleza do seu sorriso com naturalidade.",
    href: "/servicos/estetica",
    icon: "aesthetic",
  },
];

function ServiceIcon({ type }: { type: Service["icon"] }) {
  const common = {
    className: "size-[62%]",
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "tooth":
      return (
        <svg {...common}>
          <path d="M14 12C8 18 12 32 16 43C19 52 25 56 29 43L32 34L35 43C39 56 45 52 48 43C52 32 56 18 50 12C45 6 38 10 32 12C26 10 19 6 14 12Z" />
          <path d="M39 15C43 14 46 17 47 21" />
        </svg>
      );

    case "implant":
      return (
        <svg {...common}>
          <path d="M15 12C10 18 13 29 18 37C22 43 26 38 29 29L32 24L35 29C38 38 42 43 46 37C51 29 54 18 49 12C44 6 38 9 32 11C26 9 20 6 15 12Z" />
          <path d="M27 39L37 39L39 44L25 44L27 39Z" />
          <path d="M25 48L39 48L37 53L27 53L25 48Z" />
          <path d="M27 57L37 57" />
        </svg>
      );

    case "braces":
      return (
        <svg {...common}>
          <path d="M7 22C7 18 10 15 14 15H50C54 15 57 18 57 22V39C57 43 54 46 50 46H14C10 46 7 43 7 39V22Z" />
          <path d="M7 30H57" />
          <rect x="16" y="22" width="9" height="13" rx="2" />
          <rect x="39" y="22" width="9" height="13" rx="2" />
          <path d="M25 29H39" />
          <path d="M3 28H7M57 28H61" />
        </svg>
      );

    case "aesthetic":
      return (
        <svg {...common}>
          <path d="M7 23C15 18 22 19 32 23C42 19 49 18 57 23L54 39C47 47 17 47 10 39L7 23Z" />
          <path d="M20 21C18 28 20 35 26 41" />
          <path d="M32 23V43" />
          <path d="M44 21C46 28 44 35 38 41" />
          <path d="M12 48C22 53 42 53 52 48" />
        </svg>
      );
  }
}

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12H19" />
      <path d="M12 5L19 12L12 19" />
    </svg>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full min-w-0 flex-col items-center rounded-2xl bg-[#FFFFFF] p-3 text-center shadow-[0_8px_20px_rgba(0,20,40,0.13)] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:rounded-[18px] lg:p-[clamp(8px,1.8vh,14px)]">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#e5f7fc] text-[#09afd0] lg:size-[clamp(44px,8.5vh,66px)]">
        <ServiceIcon type={service.icon} />
      </div>

      <h3 className="mt-2 text-balance text-[12.5px] font-bold leading-tight tracking-tight text-[#092139] min-[360px]:text-[13px] sm:text-[15px] lg:text-[clamp(13px,2.3vh,16px)]">
        {service.title}
      </h3>

      <p className="mt-1 max-w-[240px] text-balance text-[11.5px] leading-[1.3] text-[#52657a] sm:text-[12.5px] lg:text-[clamp(11px,1.9vh,13px)]">
        {service.description}
      </p>

      <Link
        href={service.href}
        className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[12.5px] font-bold text-[#08aeca] transition-colors hover:text-[#087e9d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#08aeca] sm:text-[13.5px] lg:text-[clamp(12px,2vh,14px)]"
        aria-label={`Saiba mais sobre ${service.title}`}
      >
        Saiba mais
        <ArrowIcon className="size-4" />
      </Link>
    </article>
  );
}

export default function Services() {
  return (
    <div>
      <section id="services"
  data-header-theme="dark"
  aria-labelledby="servicos-title"
  className="relative isolate flex flex-col overflow-hidden bg-[#062b40] rounded-[32px] lg:min-h-[min(100svh,900px)] lg:rounded-[48px]"
>
        <div  className="absolute inset-0 -z-20 ">
          <Image
            src="/images/Sorriso.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[80%_center] sm:object-[72%_center] lg:object-[62%_center]"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#002b40]/95 via-[#00334a]/85 to-[#00334a]/50 lg:via-[#00334a]/45 lg:to-transparent" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#00364b]/75 via-transparent to-[#002b40]/15 lg:from-[#00364b]/45" />

        <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-4 pb-8 pt-12 sm:px-8 sm:pt-16 lg:justify-center lg:gap-[clamp(16px,4.7vh,48px)] lg:px-[5%] lg:pb-[clamp(20px,6vh,64px)] lg:pt-[clamp(24px,8vh,80px)]">
          <div className="w-full max-w-[680px] lg:max-w-[790px]">
            <div className="mb-3 flex items-center gap-3 lg:mb-[clamp(10px,2.2vh,24px)] lg:gap-4">
              <span className="h-[3px] w-10 rounded-full bg-[#08c2e6] lg:w-[clamp(40px,4.5vw,68px)]" />

              <span className="text-[11px] font-bold tracking-[0.22em] text-white lg:text-[clamp(11px,1.8vh,12px)]">
                SERVIÇOS
              </span>
            </div>

            <h1
              id="servicos-title"
              className="text-[clamp(1.75rem,6.5vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.05em] text-[#FFFFFF] sm:text-[clamp(2.25rem,5vw,3rem)] lg:text-[clamp(2rem,min(3.6vw,7vh),2.75rem)]"
            >
              Mais do que tratamentos,
              <br className="hidden sm:block" />{" "}
              <span className="text-[#09c0e5]">cuidado</span> em cada detalhe.
            </h1>

            <p className="mt-3 max-w-[520px] text-[14px] leading-[1.45] text-white/90 sm:text-[15px] lg:mt-[clamp(8px,2vh,20px)] lg:text-[clamp(13px,2.5vh,17px)]">
              Oferecemos uma gama completa de serviços
              <br className="hidden lg:block" /> odontológicos, sempre com tecnologia avançada
              <br className="hidden lg:block" /> e um atendimento humanizado.
            </p>

            <Link
              href="#lista-servicos"
              className="mt-5 inline-flex min-h-10 items-center justify-center gap-2.5 rounded-full border-2 border-[#FFFFFF]/90 px-4 text-[13px] font-semibold text-[#FFFFFF] transition-all duration-300 hover:border-[#09c0e5] hover:bg-[#09c0e5] hover:text-[#062b40] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFFFFF] sm:text-sm lg:mt-[clamp(12px,3vh,28px)] lg:min-h-[clamp(38px,6.6vh,52px)] lg:px-5 lg:text-[clamp(13px,2.1vh,15px)]"
            >
              Conheça nossos serviços
              <ArrowIcon className="size-4 lg:size-[18px]" />
            </Link>
          </div>

          <div
            id="lista-servicos"
            className="mt-10 grid w-full grid-cols-2 items-stretch gap-2.5 sm:gap-3 md:mx-auto md:max-w-[640px] lg:mx-0 lg:mt-0 lg:max-w-none lg:grid-cols-4 lg:gap-[clamp(10px,1.2vw,18px)]"
          >
            {services.map((service) => (
              <ServiceCard key={service.href} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}