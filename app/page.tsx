"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideMenus from "@/components/SideMenus";
import Intro3D from "@/components/Intro3D";
import RobotHero from "@/components/RobotHero";
import Payments3D from "@/components/Payments3D";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const seen = typeof window !== "undefined" && window.localStorage.getItem("amroia_seen_intro");
    if (!seen) setShowIntro(true);
  }, []);

  const handleIntroEnd = () => {
    window.localStorage.setItem("amroia_seen_intro", "1");
    setShowIntro(false);
  };

  return (
    <main className="relative">
      <SideMenus />
      <AnimatePresence>{showIntro && <Intro3D onEnd={handleIntroEnd} />}</AnimatePresence>
      <section id="inicio" className="relative h-[100dvh]">
        <RobotHero />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-sm text-[var(--muted)]">Desplázate para explorar</p>
        </div>
      </section>

      <section id="servicios" className="px-6 md:px-10 py-28 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Servicios</h2>
        <p className="text-lg text-[var(--muted)] max-w-3xl">
          Automatización de procesos, chatbots, asistentes para atención al cliente, creación de contenidos y flujos
          de trabajo para acelerar tu negocio.
        </p>
      </section>

      <section id="precios" className="px-0 py-28">
        <Payments3D />
      </section>

      <section id="contacto" className="px-6 md:px-10 py-28 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Contacto</h2>
        <p className="text-lg text-[var(--muted)] max-w-3xl">
          ¿Tienes un proyecto? Escríbeme para preparar una demo de amroIA en tu negocio.
        </p>
        <a href="mailto:hola@amroia.com" className="inline-block mt-6 rounded-2xl px-6 py-3 glass">
          hola@amroIA.com
        </a>
      </section>
    </main>
  );
}
