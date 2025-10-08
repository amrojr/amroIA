"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "precios", label: "Precios" },
  { id: "contacto", label: "Contacto" },
];

export default function SideMenus() {
  return (
    <>
      {/* Izquierda */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <ul className="flex flex-col gap-3">
          {items.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`} className="glass rounded-full px-4 py-2 text-sm hover:opacity-100 opacity-80">
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Derecha */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        <motion.a href="#contacto" whileHover={{ scale: 1.05 }} className="glass rounded-full px-4 py-2 text-sm">
          Solicitar demo
        </motion.a>
        <motion.a href="#precios" whileHover={{ scale: 1.05 }} className="glass rounded-full px-4 py-2 text-sm">
          Comprar
        </motion.a>
      </div>
      {/* Móvil */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden glass rounded-full px-3 py-2">
        {items.map((it) => (
          <Link key={it.id} href={`#${it.id}`} className="px-2 text-sm">{it.label}</Link>
        ))}
      </div>
    </>
  );
}
