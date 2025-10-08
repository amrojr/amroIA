"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Spline = dynamic(() => import("@splinetool/react-spline/next"), { ssr: false });

export default function RobotHero() {
  return (
    <div className="relative h-full w-full">
      <Spline
        scene={process.env.NEXT_PUBLIC_SPLINE_ROBOT_SCENE as string}
        // Consejo: en Spline usa los eventos Follow/Look At para que el personaje siga el cursor.
      />
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">amroIA</h1>
          <p className="mt-3 text-lg text-[var(--muted)] max-w-xl mx-auto">
            Automatización con Inteligencia Artificial para escalar tu negocio.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
