"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export default function Intro3D() {
  const app = useRef<any>(null);

  function onLoad(splineApp: any) {
    console.log("✅ Escena Spline cargada correctamente");
    app.current = splineApp;
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      <Spline scene="https://my.spline.design/nexbotrobotcharacterconcept-zWipjzUZniW6PiUcoXABheuM/" onLoad={onLoad} />
    </div>
  );
}
