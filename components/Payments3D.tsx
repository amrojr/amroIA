"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline/next"), { ssr: false });

export default function Payments3D() {
  const appRef = useRef<any>(null);

  function onLoad(app: any) {
    appRef.current = app;
  }

  async function checkout(priceId: string) {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });
    const data = await res.json();
    if (data?.url) window.location.href = data.url;
  }

  return (
    <div className="relative h-[90vh] w-full">
      <Spline scene={process.env.NEXT_PUBLIC_SPLINE_PAYMENTS_SCENE as string} onLoad={onLoad} />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        <button onClick={() => checkout(process.env.NEXT_PUBLIC_PRICE_BASIC!)} className="glass rounded-xl px-5 py-2">
          Plan Básico
        </button>
        <button onClick={() => checkout(process.env.NEXT_PUBLIC_PRICE_PRO!)} className="glass rounded-xl px-5 py-2">
          Plan Pro
        </button>
        <button onClick={() => checkout(process.env.NEXT_PUBLIC_PRICE_ENTERPRISE!)} className="glass rounded-xl px-5 py-2">
          Empresa
        </button>
      </div>
    </div>
  );
}
