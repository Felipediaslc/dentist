import Image from "next/image";

function Line({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-[2px] w-[34px] shrink-0 bg-[#00b8f1] min-[1700px]:h-[0.13vw]! min-[1700px]:w-[2.214vw]! ${className}`}
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
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 min-[1700px]:size-[2.604vw]!" aria-hidden="true">
      <path d="M24 4 40 10v12c0 10-6.8 17.3-16 22C14.8 39.3 8 32 8 22V10L24 4Z" stroke="currentColor" strokeWidth="2" />
      <path d="m17 23 5 5 10-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 min-[1700px]:size-[2.604vw]!" aria-hidden="true">
      <path d="M9 16 16 7h16l7 9-15 25L9 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 16h30M16 7l8 34 8-34M16 7l-7 9m23-9 7 9" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 52 48" fill="none" className="h-10 w-11 min-[1700px]:h-[2.604vw]! min-[1700px]:w-[2.865vw]!" aria-hidden="true">
      <circle cx="19" cy="13" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M5 39v-4c0-7 6-12 14-12s14 5 14 12v4H5Z" stroke="currentColor" strokeWidth="2" />
      <path d="M35 8a6 6 0 0 1 0 12m4 4c5 1 8 5 8 11v4h-9M31 24c3-2 7-3 10-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-11 min-[1700px]:h-[2.604vw]! min-[1700px]:w-[2.865vw]!" aria-hidden="true">
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
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 min-[1700px]:size-[2.604vw]!" aria-hidden="true">
      <path d="m24 4 5.8 12 13.2 1.9-9.5 9.3 2.2 13.1L24 34.1l-11.7 6.2 2.2-13.1L5 17.9 18.2 16 24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 min-[1700px]:size-[2.604vw]!" aria-hidden="true">
      <path d="M24 41S5 29 5 16.5C5 6 18 3 24 13c6-10 19-7 19 3.5C43 29 24 41 24 41Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

function InfinityIcon() {
  return (
    <svg viewBox="0 0 52 48" fill="none" className="h-10 w-11 min-[1700px]:h-[2.604vw]! min-[1700px]:w-[2.865vw]!" aria-hidden="true">
      <path d="M26 24c-7-9-11-13-16-10-8 5-5 17 2 19 5 2 9-2 14-9Zm0 0c7 9 11 13 16 10 8-5 5-17-2-19-5-2-9 2-14 9Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
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

const wrap =
  "mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-16 min-[1700px]:max-w-[85.94vw]! min-[1700px]:px-[4.167vw]!";

export default function About() {
  return (
    <div data-header-theme="dark" className="mx-auto w-full max-w-[1920px] overflow-hidden text-[#FFFFFFFF]">
      <div className="bg-[#FFFFFFFF]">
     
        <section
          id="about"
          className="scroll-mt relative isolate min-h-[460px] overflow-hidden rounded-t-[32px] bg-[#061116] lg:min-h-[clamp(460px,36vw,690px)] lg:rounded-t-[48px]"
        >
          <div className="absolute inset-y-0 right-0 -z-20 w-full lg:w-[52%] lg:[clip-path:ellipse(100%_150%_at_100%_50%)] lg:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_22%)] lg:[mask-image:linear-gradient(90deg,transparent_0%,#000_22%)]">
            <Image
              src="/images/about-reception.jpg"
              alt="Recepção moderna da IdeaOdont"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover object-[60%_12%]"
            />
          </div>

          <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,#061116_0%,rgba(6,17,22,.94)_36%,rgba(6,17,22,.45)_52%,rgba(6,17,22,0)_70%)] lg:block" />
          <div className="absolute inset-0 -z-10 bg-[#061116]/75 lg:hidden" />

          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-[34%] -z-10 hidden w-[34%] rounded-r-[100%] border-r border-white/10 lg:block"
          />

          <div className="flex min-h-[460px] items-center px-6 pt-28 pb-14 sm:px-10 sm:pt-32 sm:pb-16 lg:min-h-[clamp(460px,36vw,690px)] lg:px-[6.3%] lg:py-0">
            <div className="max-w-[560px] lg:max-w-[min(46vw,883px)]">
              <div className="mb-5 flex items-center gap-4 min-[1700px]:mb-[1.302vw]! min-[1700px]:gap-[1.042vw]!">
                <Line />
                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 min-[1700px]:text-[0.716vw]!">
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

              <p className="mt-5 max-w-[430px] text-[15px] leading-[1.55] text-white/85 sm:text-[16px] lg:max-w-[clamp(360px,34vw,653px)] lg:text-[clamp(16px,1.08vw,21px)] min-[1700px]:mt-[1.563vw]!">
                Na Idea Odont, acreditamos que um sorriso saudável vai muito além da estética. É sobre autoestima, bem&#8209;estar e qualidade de vida.
              </p>

              <a
                href="#nossa-essencia"
                className="mt-6 inline-flex min-h-11 items-center gap-4 rounded-full border border-[#00b8f1] px-6 text-[14px] font-medium transition-colors hover:bg-[#00b8f1]/10 lg:min-h-[clamp(44px,3vw,58px)] lg:px-[clamp(24px,1.6vw,31px)] lg:text-[clamp(14px,0.95vw,18px)] min-[1700px]:mt-[1.823vw]! min-[1700px]:gap-[1.042vw]!"
              >
                Conheça nossa clínica
                <ArrowIcon className="h-4 w-4 text-[#00b8f1] min-[1700px]:size-[1.042vw]!" />
              </a>
            </div>
          </div>
        </section>
      </div>

    
      <section
        id="nossa-essencia"
        data-header-theme="light"
        className="bg-[#f7f8f9] py-8 text-[#101820] lg:py-7 min-[1700px]:py-[1.6vw]!"
      >
        <div className={`${wrap} grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-[5%]`}>
          <div className="relative mx-auto w-full max-w-[520px] lg:ml-0 min-[1700px]:max-w-[33.85vw]!">
            <div
              aria-hidden="true"
              className="absolute -left-10 top-[17%] hidden h-[48%] w-14 rounded-tl-[20px] border-l border-t border-[#00b8f1] sm:block min-[1700px]:-left-[2.604vw]! min-[1700px]:w-[3.646vw]! min-[1700px]:rounded-tl-[1.302vw]!"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-5 left-[28%] hidden h-8 w-[26%] rounded-b-[18px] border-x border-b border-[#00b8f1] sm:block min-[1700px]:-bottom-[1.302vw]! min-[1700px]:h-[2.083vw]! min-[1700px]:rounded-b-[1.172vw]!"
            />

            <div className="relative aspect-[1.35/1] overflow-hidden rounded-[22px] shadow-sm min-[1700px]:rounded-[1.432vw]!">
              <Image
                src="/images/about-dentist.jpg"
                alt="Dentista realizando atendimento"
                fill
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="py-1 lg:py-3 min-[1700px]:py-[0.781vw]!">
            <div className="mb-3 flex items-center gap-3 min-[1700px]:mb-[0.781vw]! min-[1700px]:gap-[0.781vw]!">
              <Line />
              <span className="text-[11px] font-medium uppercase tracking-wide min-[1700px]:text-[0.716vw]!">
                Nossa essência
              </span>
            </div>

            <h2 className="max-w-[620px] text-[28px] font-semibold leading-[1.12] tracking-[-0.04em] min-[400px]:text-[32px] sm:text-[38px] lg:text-[clamp(30px,2.9vw,44px)] min-[1700px]:max-w-[40.36vw]! min-[1700px]:text-[2.865vw]!">
              Mais que um consultório,{" "}
              <br className="hidden sm:block" />
              um <span className="text-[#08afe4]">parceiro</span> da sua saúde.
            </h2>

            <p className="mt-3 max-w-[490px] text-[15px] leading-[1.55] text-[#17232d] sm:text-[16px] min-[1700px]:mt-[0.781vw]! min-[1700px]:max-w-[31.9vw]! min-[1700px]:text-[1.042vw]!">
              Somos uma clínica odontológica moderna, que une tecnologia, experiência e um atendimento humanizado para cuidar de você em todas as fases da vida.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-0 min-[1700px]:mt-[1.563vw]!">
              <div className="flex flex-col items-center px-2 text-center text-[#00aef0] min-[1700px]:px-[0.521vw]!">
                <ToothIcon className="h-10 w-10 min-[1700px]:size-[2.604vw]!" />
                <span className="mt-2 text-[14px] leading-[1.2] text-[#101820] min-[1700px]:mt-[0.521vw]! min-[1700px]:text-[0.911vw]!">
                  Atendimento<br />Humanizado
                </span>
              </div>

              <div className="flex flex-col items-center border-[#00b8f1] px-2 text-center text-[#00aef0] sm:border-l min-[1700px]:px-[0.521vw]!">
                <ShieldIcon />
                <span className="mt-2 text-[14px] leading-[1.2] text-[#101820] min-[1700px]:mt-[0.521vw]! min-[1700px]:text-[0.911vw]!">
                  Segurança<br />e confiança
                </span>
              </div>

              <div className="flex flex-col items-center border-[#00b8f1] px-2 text-center text-[#00aef0] sm:border-l min-[1700px]:px-[0.521vw]!">
                <DiamondIcon />
                <span className="mt-2 text-[14px] leading-[1.2] text-[#101820] min-[1700px]:mt-[0.521vw]! min-[1700px]:text-[0.911vw]!">
                  Tecnologia<br />de ponta
                </span>
              </div>

              <div className="flex flex-col items-center border-[#00b8f1] px-2 text-center text-[#00aef0] sm:border-l min-[1700px]:px-[0.521vw]!">
                <TeamIcon />
                <span className="mt-2 text-[14px] leading-[1.2] text-[#101820] min-[1700px]:mt-[0.521vw]! min-[1700px]:text-[0.911vw]!">
                  Equipe<br />especializada
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <div className="bg-transparent pb-0 lg:pb-0" data-header-theme="dark">
        <section className="rounded-b-[32px] bg-[#061116] bg-[radial-gradient(ellipse_at_50%_0%,rgba(29,64,78,.18),transparent_55%)] pb-10 pt-8 lg:rounded-b-[48px] lg:pb-10 lg:pt-9 min-[1700px]:pb-[2.6vw]! min-[1700px]:pt-[1.8vw]!">
          <div className="mx-auto w-full px-6 sm:px-10 lg:px-[3%]">
            <div className="grid items-center gap-6 xl:grid-cols-[.95fr_1.4fr] xl:gap-10 lg:px-[2.8%] min-[1700px]:gap-[2.083vw]!">
              <div>
                <div className="mb-3 flex items-center gap-4 min-[1700px]:mb-[0.781vw]! min-[1700px]:gap-[1.042vw]!">
                  <Line />
                  <span className="text-[11px] uppercase min-[1700px]:text-[0.716vw]!">
                    Nossos valores
                  </span>
                </div>

                <h2 className="max-w-[400px] text-[28px] font-semibold leading-[1.12] tracking-[-0.035em] min-[400px]:text-[30px] sm:text-[34px] min-[1700px]:max-w-[26.04vw]! min-[1700px]:text-[2.214vw]!">
                  Princípios que guiam{" "}
                  <br className="hidden sm:block" />
                  cada <span className="text-[#08b8ef]">atendimento.</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
                {values.map(({ title, detail, Icon }, i) => (
                  <div
                    key={title}
                    className={`flex min-h-[88px] flex-col items-center justify-center border-[#00b8f1]/50 px-1 text-center text-[#08b8ef] sm:min-h-[96px] min-[1700px]:min-h-[6.25vw]! min-[1700px]:px-[0.26vw]! ${
                      i > 0 ? "sm:border-l" : ""
                    }`}
                  >
                    <Icon />
                    <span className="mt-2 text-[13px] leading-[1.25] text-white xl:text-[14px] min-[1700px]:mt-[0.521vw]! min-[1700px]:text-[0.911vw]!">
                      {title}<br />{detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}