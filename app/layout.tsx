import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "@/Components/layout/Header";
import Footer from "@/Components/layout/Footer";
import "./globals.css";
import type { ReactNode } from "react";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IdeaOdont | Odontologia Integrada",
  description:
    "IdeaOdont é uma clínica odontológica que oferece serviços de alta qualidade para cuidar do seu sorriso. Nossa equipe de profissionais especializados está pronta para proporcionar um atendimento personalizado e eficaz, garantindo a saúde bucal e a estética do seu sorriso.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}