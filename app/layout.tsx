import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "amroIA — Automatización con IA",
  description: "Soluciones de automatización con Inteligencia Artificial.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
