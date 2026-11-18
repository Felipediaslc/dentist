import Image from "next/image";

function Line({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-[2px] w-[34px] shrink-0 bg-[#00b8f1] ${className}`}
    />
  );
}

function ToothIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 52" fill="none" className={className} aria-hidden="true">
      <path d="M24 7.2c-5.1-4.1-13.1-3.6-16.7 2.1-3.5 5.5-.6 14.1 1.7 20.3 2.1 5.8 4.2 15.4 8.2 15.4 3.2 0 2.7-13.8 6.8-13.8s3.6 13.8 6.8 13.8c4 0 6.1-9.6 8.2-15.4 2.3-6.2 5.2-14.8 1.7-20.3C37.1 3.6 29.1 3.1 24 7.2Z" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 12.2c3.1-2.2 6.2-1.6 8.8.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <path d="M24 4 40 10v12c0 10-6.8 17.3-16 22C14.8 39.3 8 32 8 22V10L24 4Z" stroke="currentColor" strokeWidth="2" />
      <path d="m17 23 5 5 10-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <path d="M9 16 16 7h16l7 9-15 25L9 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 16h30M16 7l8 34 8-34M16 7l-7 9m23-9 7 9" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 52 48" fill="none" className="h-10 w-11" aria-hidden="true">
      <circle cx="19" cy="13" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M5 39v-4c0-7 6-12 14-12s14 5 14 12v4H5Z" stroke="currentColor" strokeWidth="2" />
      <path d="M35 8a6 6 0 0 1 0 12m4 4c5 1 8 5 8 11v4h-9M31 24c3-2 7-3 10-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Aperto de mãos refeito (antes estava distorcido) */
function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-11" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </g>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <path d="m24 4 5.8 12 13.2 1.9-9.5 9.3 2.2 13.1L24 34.1l-11.7 6.2 2.2-13.1L5 17.9 18.2 16 24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <path d="M24 41S5 29 5 16.5C5 6 18 3 24 13c6-10 19-7 19 3.5C43 29 24 41 24 41Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

function InfinityIcon() {
  return (
    <svg viewBox="0 0 52 48" fill="none" className="h-10 w-11" aria-hidden="true">
      <path d="M26 24c-7-9-11-13-16-10-8 5-5 17 2 19 5 2 9-2 14-9Zm0 0c7 9 11 13 16 10 8-5 5-17-2-19-5-2-9 2-14 9Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Ícone de calendário para o botão (antes aparecia como quadradinho) */
function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </g>
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const values = [
  { title: "Ética", detail: "e transparência", Icon: HandshakeIcon },
  { title: "Excelência", detail: "em tudo que fazemos", Icon: StarIcon },
  { title: "Cuidado", detail: "em cada detalhe", Icon: HeartIcon },
  { title: "Compromisso", detail: "com você", Icon: InfinityIcon },
];

/* Container único: garante o mesmo respiro lateral em todas as seções */
const wrap = "mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-16";

export default function About() {
  return (
    <div  id="about" data-header-theme="dark" className="mx-auto w-full max-w-[1920px] overflow-hidden text-[#FFFFFFFF]">
     
      <div className="bg-[#FFFFFFFF]">
<section className="relative isolate min-h-[500px] overflow-hidden rounded-t-[32px] bg-[#061116] lg:min-h-[clamp(500px,41vw,787px)] lg:rounded-t-[48px]">
        {/* Foto full-bleed até a borda direita, com borda curva */}
        <div
          className="absolute inset-y-0 right-0 -z-20 w-full lg:w-[52%] lg:[clip-path:ellipse(100%_150%_at_100%_50%)] lg:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_22%)] lg:[mask-image:linear-gradient(90deg,transparent_0%,#000_22%)]"
        >
          <Image
            src="/images/about-reception.jpg"
            alt="Recepção moderna da IdeaOdont"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover object-[60%_12%]"
          />
        </div>

        {/* Degradê suave de transição (escuro -> foto) */}
        <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,#061116_0%,rgba(6,17,22,.94)_36%,rgba(6,17,22,.45)_52%,rgba(6,17,22,0)_70%)] lg:block" />
        <div className="absolute inset-0 -z-10 bg-[#061116]/75 lg:hidden" />

        {/* Fio de luz curvo, bem sutil */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-[34%] -z-10 hidden w-[34%] rounded-r-[100%] border-r border-white/10 lg:block"
        />

        <div className="flex min-h-[500px] items-center px-6 py-12 sm:px-10 lg:min-h-[clamp(500px,41vw,787px)] lg:px-[6.3%] lg:py-0">
          <div className="max-w-[560px] lg:max-w-[min(46vw,883px)]">
            <div className="mb-5 flex items-center gap-4">
              <Line />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/90">
                Sobre nós
              </span>
            </div>

            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] min-[400px]:text-[36px] sm:text-[44px] lg:text-[clamp(36px,3.5vw,67px)]">
              Cuidando do seu sorriso
              <br className="hidden sm:block" /> com{" "}
              <span className="text-[#08b8ef]">ciência, empatia</span>
              <br className="hidden sm:block" /> e propósito
              <span className="text-[#08b8ef]">.</span>
            </h2>

            <p className="mt-6 max-w-[430px] text-[15px] leading-[1.55] text-white/85 sm:text-[16px] lg:max-w-[clamp(360px,34vw,653px)] lg:text-[clamp(16px,1.08vw,21px)]">
              Na Idea Odont, acreditamos que um sorriso saudável vai muito além da estética. É sobre autoestima, bem&#8209;estar e qualidade de vida.
            </p>

            <a
              href="#nossa-essencia"
              className="mt-7 inline-flex min-h-11 items-center gap-4 rounded-full border border-[#00b8f1] px-6 text-[14px] font-medium lg:min-h-[clamp(44px,3vw,58px)] lg:px-[clamp(24px,1.6vw,31px)] lg:text-[clamp(14px,0.95vw,18px)] transition-colors hover:bg-[#00b8f1]/10"
            >
              Conheça nossa clínica
              <ArrowIcon className="h-4 w-4 text-[#00b8f1]" />
            </a>
          </div>
        </div>
      </section>
      </div>

      {/* ================= NOSSA ESSÊNCIA ================= */}
      <section
        id="nossa-essencia" data-header-theme="light"
        className="bg-[#f7f8f9] py-10 text-[#101820] lg:py-8  "
      >
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-[6%]`}>
          <div className="relative mx-auto w-full max-w-[520px] lg:ml-0">
            {/* Moldura azul: lateral esquerda */}
            <div
              aria-hidden="true"
              className="absolute -left-10 top-[17%] hidden h-[48%] w-14 rounded-tl-[20px] border-l border-t border-[#00b8f1] sm:block"
            />
            {/* Moldura azul: base */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 left-[28%] hidden h-8 w-[26%] rounded-b-[18px] border-x border-b border-[#00b8f1] sm:block"
            />

            <div className="relative aspect-[1.35/1] overflow-hidden rounded-[22px] shadow-sm">
              <Image
                src="/images/about-dentist.jpg"
                alt="Dentista realizando atendimento"
                fill
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="py-2 lg:py-4 ">
            <div className="mb-4 flex items-center gap-3">
              <Line />
              <span className="text-[11px] font-medium uppercase tracking-wide">
                Nossa essência
              </span>
            </div>

            <h2 className="max-w-[620px] text-[28px] font-semibold leading-[1.12] tracking-[-0.04em] min-[400px]:text-[32px] sm:text-[38px] lg:text-[clamp(30px,2.9vw,44px)]">
              Mais que um consultório,{" "}
              <br className="hidden sm:block" />
              um <span className="text-[#08afe4]">parceiro</span> da sua saúde.
            </h2>

            {/* max-w menor para quebrar em 3 linhas como na referência */}
            <p className="mt-4 max-w-[490px] text-[15px] leading-[1.55] text-[#17232d] sm:text-[16px]">
              Somos uma clínica odontológica moderna, que une tecnologia, experiência e um atendimento humanizado para cuidar de você em todas as fases da vida.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0">
              <div className="flex flex-col items-center px-2 text-center text-[#00aef0]">
                <ToothIcon className="h-10 w-10" />
                <span className="mt-2 text-[14px] leading-[1.2] text-[#101820]">
                  Atendimento<br />Humanizado
                </span>
              </div>

              <div className="flex flex-col items-center border-[#00b8f1] px-2 text-center text-[#00aef0] sm:border-l">
                <ShieldIcon />
                <span className="mt-2 text-[14px] leading-[1.2] text-[#101820]">
                  Segurança<br />e confiança
                </span>
              </div>

              <div className="flex flex-col items-center border-[#00b8f1] px-2 text-center text-[#00aef0] sm:border-l">
                <DiamondIcon />
                <span className="mt-2 text-[14px] leading-[1.2] text-[#101820]">
                  Tecnologia<br />de ponta
                </span>
              </div>

              <div className="flex flex-col items-center border-[#00b8f1] px-2 text-center text-[#00aef0] sm:border-l">
                <TeamIcon />
                <span className="mt-2 text-[14px] leading-[1.2] text-[#101820]">
                  Equipe<br />especializada
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALORES + CTA ================= */}
      <div className="bg-transparent pb-0 lg:pb-0" data-header-theme="dark">
<section className="rounded-b-[32px] bg-[#061116] bg-[radial-gradient(ellipse_at_50%_0%,rgba(29,64,78,.18),transparent_55%)] pb-14 lg:rounded-b-[48px] pt-10 lg:pb-[62px] lg:pt-[43px]">
        <div className="mx-auto w-full px-6 sm:px-10 lg:px-[3%]">
          <div className="grid items-center gap-8 xl:grid-cols-[.95fr_1.4fr] xl:gap-10 lg:px-[2.8%]">
            <div>
              <div className="mb-3 flex items-center gap-4">
                <Line />
                <span className="text-[11px] uppercase">Nossos valores</span>
              </div>

              <h2 className="max-w-[400px] text-[28px] font-semibold leading-[1.12] tracking-[-0.035em] min-[400px]:text-[30px] sm:text-[34px]">
                Princípios que guiam{" "}
                <br className="hidden sm:block" />
                cada <span className="text-[#08b8ef]">atendimento.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">
              {values.map(({ title, detail, Icon }, i) => (
                <div
                  key={title}
                  className={`flex min-h-[100px] flex-col items-center justify-center border-[#00b8f1]/50 px-1 text-center text-[#08b8ef] sm:min-h-[112px] ${
                    i > 0 ? "sm:border-l" : ""
                  }`}
                >
                  <Icon />
                  <span className="mt-2 text-[13px] leading-[1.25] text-white xl:text-[14px]">
                    {title}<br />{detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Banner CTA */}
          <div className="relative mt-10 flex min-h-[124px] items-center overflow-hidden rounded-[28px] border border-white/20 bg-[#14232c] px-7 py-7 sm:px-10 lg:mt-[50px] lg:px-[54px]">
            {/* Foto visível, ancorada à direita para mostrar a cadeira */}
            <div className="absolute inset-0">
              <Image
                src="/images/about-treatment-room.jpg"
                alt="Ambiente de atendimento odontológico"
                fill
                sizes="100vw"
                className="object-cover object-[80%_center] opacity-90"
              />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,17,22,.94)_0%,rgba(6,17,22,.78)_38%,rgba(6,17,22,.25)_68%,rgba(6,17,22,.1)_100%)]" />

            <div className="relative z-10 flex w-full flex-col items-start gap-6 md:flex-row md:items-center">
              <ToothIcon className="hidden h-[66px] w-[66px] shrink-0 text-[#FFFFFFFF] md:block" />

              <div className="min-w-0 flex-1">
                <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.03em] min-[400px]:text-[24px] lg:text-[27px]">
                  Seu sorriso em{" "}
                  <span className="text-[#08b8ef]">boas mãos.</span>
                </h3>

                <p className="mt-1 text-[14px] text-white/90 sm:text-[15px]">
                  Agende sua consulta e descubra o cuidado que você merece.
                </p>
              </div>

              <a
                href="/agendamento"
                className="inline-flex min-h-[48px] shrink-0 items-center gap-3 rounded-full bg-[#FFFFFFFF] px-6 text-[13px] font-semibold text-[#101820] transition-transform hover:scale-[1.03]"
              >
                <CalendarIcon />
                <span>Agendar Consulta</span>
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}