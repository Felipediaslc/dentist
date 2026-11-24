import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4 transition-transform duration-300 group-hover:translate-x-1 min-[1700px]:size-[1.05vw]!"
    >
      <path d="M5 12H19" />
      <path d="M12 5L19 12L12 19" />
    </svg>
  );
}

export default function Agendamento() {
  return (
    <section
      id="agendamento"
      data-header-theme="dark"
      aria-labelledby="agendamento-title"
      className="relative isolate flex min-h-[750px] min-[375px]:min-h-[860px] w-full flex-col overflow-hidden rounded-[32px] bg-[#171717] sm:min-h-[620px] lg:min-h-[min(100svh,900px)] lg:rounded-[48px] min-[1700px]:min-h-[57vw]!"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/agendamento-idea-odont.png"
          alt="Profissional odontológica sorridente segurando instrumentos"
          fill
          sizes="100vw"
          className="object-cover object-[68%_1%] lg:object-[58%_1%]"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/60 to-black/20 sm:bg-linear-to-r sm:from-black/60 sm:via-black/30 sm:to-transparent" />

      <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center px-7 py-16 sm:px-8 sm:py-20 lg:max-w-[1696px] lg:px-12 lg:py-[clamp(24px,8vh,80px)]">
        <div className="w-full max-w-[680px] sm:ml-48 sm:w-auto lg:ml-[18vw] lg:max-w-[720px] min-[1700px]:max-w-[47vw]!">
          <div className="mb-5 flex items-center gap-3 lg:mb-[clamp(10px,2.2vh,24px)] lg:gap-4 min-[1700px]:mb-[1.56vw]! min-[1700px]:gap-[1.04vw]!">
            <span className="h-[3px] w-10 rounded-full bg-[#08c2e6] lg:w-[clamp(40px,4.5vw,68px)] min-[1700px]:h-[0.2vw]! min-[1700px]:w-[4.43vw]!" />

            <span className="text-[11px] font-bold tracking-[0.22em] text-white lg:text-[clamp(11px,1.8vh,12px)] min-[1700px]:text-[0.78vw]!">
              AGENDAMENTO
            </span>
          </div>

          <h2
            id="agendamento-title"
            className="text-[clamp(1.75rem,6.5vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.05em] text-white sm:text-[clamp(2.25rem,5vw,3rem)] lg:text-[clamp(2rem,min(3.6vw,7vh),2.75rem)] min-[1700px]:text-[2.865vw]!"
          >
            Cuide do seu sorriso
            <br className="hidden sm:block" /> com quem entende.
          </h2>

          <p className="mt-4 max-w-[520px] text-[16px] leading-[1.45] text-white/90 min-[375px]:text-[18px] sm:text-[16px] lg:mt-[clamp(8px,2vh,20px)] lg:text-[clamp(13px,2.5vh,17px)] min-[1700px]:mt-[1.3vw]! min-[1700px]:max-w-[34vw]! min-[1700px]:text-[1.1vw]!">
            Agende sua consulta e descubra o cuidado
            <br className="hidden sm:block" />
            personalizado da IdeaOdont.
          </p>

          <Link
            href="#contato"
            className="group mt-6 inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full bg-white px-5 text-[13px] font-semibold text-[#171717] transition-all duration-300 hover:bg-[#08c2e6] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-sm lg:mt-[clamp(12px,3vh,28px)] lg:min-h-[clamp(38px,6.6vh,52px)] lg:px-6 lg:text-[clamp(13px,2.1vh,15px)] min-[1700px]:mt-[1.8vw]! min-[1700px]:min-h-[3.4vw]! min-[1700px]:gap-[0.65vw]! min-[1700px]:px-[1.56vw]! min-[1700px]:text-[0.98vw]!"
          >
            Agendar Consulta
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}