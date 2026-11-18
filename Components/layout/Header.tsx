"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Início", href: "#inicio", target: "inicio" },
  { label: "Sobre", href: "#about", target: "about" },
  { label: "Tratamentos", href: "#tratamentos", target: "tratamentos" },
  { label: "Serviços", href: "#services", target: "services" },
  { label: "Agendamento", href: "#appointment", target: "appointment" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [lightBackground, setLightBackground] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frameId: number | null = null;

    function updateHeader() {
      const activationPoint = 160;

      const availableSections = navigation
        .map((item) => {
          const element = document.getElementById(item.target);

          if (!element) return null;

          return {
            target: item.target,
            top: element.getBoundingClientRect().top,
          };
        })
        .filter(
          (section): section is { target: string; top: number } =>
            section !== null
        );

      const reachedSections = availableSections.filter(
        (section) => section.top <= activationPoint
      );

      if (reachedSections.length > 0) {
        const currentSection = reachedSections.reduce((previous, current) =>
          current.top > previous.top ? current : previous
        );

        setActiveSection(currentSection.target);
      } else if (availableSections.length > 0) {
        setActiveSection(availableSections[0].target);
      }

      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (isAtPageBottom && availableSections.length > 0) {
        setActiveSection(
          availableSections[availableSections.length - 1].target
        );
      }

      const themeElements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-header-theme]")
      );

      const currentTheme = themeElements
        .map((element) => ({
          element,
          rect: element.getBoundingClientRect(),
        }))
        .filter(({ rect }) => rect.top <= 48 && rect.bottom > 48)
        .sort((a, b) => a.rect.height - b.rect.height)[0];

      setLightBackground(
        currentTheme?.element.dataset.headerTheme === "light"
      );
    }

    function handleScroll() {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        updateHeader();
        frameId = null;
      });
    }

    updateHeader();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  const textColor = lightBackground ? "text-[#17201f]" : "text-white";

  const mutedColor = lightBackground
    ? "text-[#17201f]/75"
    : "text-white/85";

  const glassStyle = lightBackground
    ? "border-[#17201f]/10 bg-white/75 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
    : "border-white/20 bg-white/[0.16] shadow-[0_8px_32px_rgba(0,0,0,0.10)]";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12">
      <div className="relative mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3">
        <Link
          href="/"
          aria-label="Idea Odont — página inicial"
          onClick={closeMenu}
          className={`relative z-10 shrink-0 font-heading text-[1.5rem] font-medium tracking-[-0.04em] transition-colors duration-300 hover:opacity-80 motion-reduce:transition-none sm:text-[1.8rem] ${textColor}`}
        >
          Idea<span className="font-normal text-sky-500">Odont</span>
          <span className="ml-0.5 inline-block align-top text-[1.1rem] font-medium leading-none tracking-normal">
            ®
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border p-1 backdrop-blur-2xl transition-colors duration-300 lg:flex ${glassStyle}`}
        >
          {navigation.map((item) => {
            const active = activeSection === item.target;

            return (
              <Link
                key={item.target}
                href={item.href}
                aria-current={active ? "location" : undefined}
                className={`whitespace-nowrap rounded-full px-5 py-3 text-[14px] font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 motion-reduce:transition-none ${
                  active
                    ? "bg-[#0c1f33] text-white shadow-sm"
                    : `${mutedColor} hover:bg-black/5`
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2">
          <Link
            href="#appointment"
            onClick={closeMenu}
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-white px-4 text-[12px] font-semibold text-[#17201f] shadow-[0_5px_20px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3faff] hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 motion-reduce:transition-none sm:min-h-[54px] sm:px-7 sm:text-sm"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="hidden h-[17px] w-[17px] sm:block"
            >
              <path
                d="M5.5 3.5h3l2 5-2 1.5a15 15 0 0 0 6.5 6.5l1.5-2 5 2v3c0 1.1-.9 2-2 2C10.1 21.5 2.5 13.9 2.5 4.5c0-.6.4-1 1-1Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden sm:inline">Agendar consulta</span>
            <span className="sm:hidden">Agendar</span>
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className={`inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border shadow-[0_5px_20px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 motion-reduce:transition-none lg:hidden ${
              lightBackground
                ? "border-[#17201f]/15 bg-white/75 text-[#17201f] hover:bg-white"
                : "border-white/25 bg-white/[0.16] text-white hover:bg-white/25"
            }`}
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          aria-hidden={!menuOpen}
          className={`absolute inset-x-0 top-full mt-3 rounded-2xl border border-white/15 bg-[#17201f]/95 p-3 text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-200 motion-reduce:transition-none lg:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => {
              const active = activeSection === item.target;

              return (
                <Link
                  key={item.target}
                  href={item.href}
                  aria-current={active ? "location" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 motion-reduce:transition-none ${
                    active
                      ? "bg-white text-[#17201f]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}