import Link from "next/link";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Agendamento", href: "#agendamentos" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" className="size-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor"
      aria-hidden="true" className="size-5">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.3H7.7v3.1h2.7v8h3.1Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor"
      aria-hidden="true" className="size-5">
      <path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.5 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" className="size-4">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080b0e] text-white">
   
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full border border-[#08bde5]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 size-[360px] rounded-full border border-[#08bde5]/20"
      />

      <div className="relative mx-auto grid w-full max-w-[1800px] gap-12 px-5 pt-28 pb-14 sm:px-8 sm:py-16 lg:grid-cols-[1.2fr_0.65fr_1.35fr] lg:gap-12 lg:px-[5%] lg:py-20">

       
        <div>
          <Link href="#inicio" aria-label="Idea Odont - Início"
            className="inline-block text-[34px] font-light tracking-[-0.06em] sm:text-[40px]">
            Idea<span className="text-[#08bde5]">Odont</span>
            <sup className="ml-1 text-[11px] font-semibold">®</sup>
          </Link>

          <p className="mt-5 max-w-[340px] text-[15px] leading-relaxed text-white/65 sm:text-base">
            Seu sorriso em boas mãos,
            <br />
            com cuidado em cada detalhe.
          </p>

          {/* Redes sociais: substituir os hrefs pelos perfis reais */}
          <div className="mt-7 flex gap-3">
            {[
              { label: "Instagram", icon: <InstagramIcon /> },
              { label: "Facebook", icon: <FacebookIcon /> },
              { label: "YouTube", icon: <YoutubeIcon /> },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-[#08bde5] hover:text-[#08bde5]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold sm:text-xl">
            Navegação
          </h3>
          <span className="mt-3 block h-[3px] w-16 rounded-full bg-[#08bde5]" />

          <nav aria-label="Navegação do rodapé" className="mt-6">
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-white/70 transition-colors hover:text-[#08bde5]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

       
        <div id="contato">
          <h3 className="text-lg font-semibold sm:text-xl">
            Contato
          </h3>
          <span className="mt-3 block h-[3px] w-16 rounded-full bg-[#08bde5]" />

          <div className="mt-6 space-y-5 text-[15px] text-white/70">
            <Link
              href="#agendamentos"
              className="flex items-center gap-4 transition-colors hover:text-[#08bde5]"
            >
              <ArrowIcon />
              <span>Agende sua consulta</span>
            </Link>

            <p className="flex items-start gap-4">
              <span className="text-[#08bde5]">●</span>
              <span>Entre em contato com nossa equipe.</span>
            </p>
          </div>
        </div>
      </div>

      
      <div className="relative border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-4 px-5 py-6 text-[13px] text-white/55 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-[5%]">
          <p>
            © 2026 Idea Odont. Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido por{" "}
            <span className="font-medium text-[#08bde5]">DiasCode</span>
          </p>
        </div>
      </div>
    </footer>
  );
}